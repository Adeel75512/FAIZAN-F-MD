// Repaired full index.js (with crypto fix) (Baileys MD Compatible)
// -------------------------------------------------------

// FIX: Import crypto for Render environment
const crypto = require("crypto");

// GLOBAL FIX: Make crypto available everywhere (Render compatibility)
global.crypto = crypto;
("crypto");

const {
    default: makeWASocket,
    DisconnectReason,
    useMultiFileAuthState,
    Browsers
} = require('@whiskeysockets/baileys');

const fs = require('fs');
const path = require('path');
const P = require('pino');

// MAIN START FUNCTION ----------------------------------------------------
async function connectToWA() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState('./session');
        const conn = makeWASocket({
            logger: P({ level: 'silent' }),
            printQRInTerminal: true,
            auth: state,
            browser: Browsers.macOS('Firefox'),
            qrTimeout: 0,
            syncFullHistory: false
        });

        // SAVE CREDS ------------------------------------------------------
        conn.ev.on('creds.update', saveCreds);

        // CONNECTION UPDATE FIXED -----------------------------------------
        conn.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect } = update;

            if (connection === 'close') {
                const code = lastDisconnect?.error?.statusCode ||
                             lastDisconnect?.error?.output?.statusCode ||
                             lastDisconnect?.error?.message;

                console.log('Disconnect Reason:', code);

                if (code !== DisconnectReason.loggedOut) {
                    console.log('Reconnecting...');
                    connectToWA();
                } else {
                    console.log('Session Logged Out ❌ Delete /session folder.');
                }
            }

            if (connection === 'open') {
                console.log('🧬 Installing Plugins...');

                fs.readdirSync('./plugins/').forEach((file) => {
                    if (path.extname(file).toLowerCase() === '.js') {
                        require('./plugins/' + file);
                    }
                });

                console.log('Plugins Installed Successfully ✅');
                conn.sendMessage(conn.user.id, { text: 'Bot is Online ✔️' });
            }
        });

        // MESSAGE HANDLER --------------------------------------------------
        conn.ev.on('messages.upsert', async ({ messages }) => {
            const msg = messages[0];
            if (!msg.message) return;

            const from = msg.key.remoteJid;
            const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

            if (!text) return;

            // Example command
            if (text.toLowerCase() === '!ping') {
                await conn.sendMessage(from, { text: 'Pong 🏓' });
            }
        });

    } catch (err) {
        console.error('Startup Error:', err);
        setTimeout(connectToWA, 5000);
    }
}

// SESSION ID LOGIN SUPPORT
// If SESSION_ID exists in environment, load it
if (process.env.SESSION_ID) {
    try {
        const decoded = Buffer.from(process.env.SESSION_ID, 'base64').toString();
        if (!fs.existsSync('./session')) fs.mkdirSync('./session');
        fs.writeFileSync('./session/creds.json', decoded);
        console.log('SESSION_ID loaded successfully ✔️');
    } catch (e) {
        console.log('Invalid SESSION_ID ❌');
    }
}

// START BOT --------------------------------------------------------------
connectToWA();

