const fs = require('fs');
const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "Show FAIZAN-F-MD Premium Menu",
    category: "main", 
    react: "💫",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const totalCommands = Object.keys(commands).length;
        const uptime = runtime(process.uptime());
        
        // 💎 FAIZAN-F-MD PREMIUM DESIGN WITH DIFFERENT SYMBOLS 💎
        const menuCaption = `
╭━━━〔 *FAIZAN-F-MD* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 👑 Owner : **FAIZAN-F-MD**
┃✦│ ⚡ Prefix : [ . ]
┃✦│ 🛠️ Commands : ${totalCommands}+
┃✦│ 🕐 Uptime : ${uptime}
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

📋 *ᴄʜᴏᴏsᴇ ᴀ ᴄᴀᴛᴇɢᴏʀʏ ᴛᴏ ᴇxᴘʟᴏʀᴇ:*
> _ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ᴍᴀᴛᴄʜɪɴɢ ɴᴜᴍʙᴇʀ ᴛᴏ ᴏᴘᴇɴ ᴛʜᴇ ᴍᴇɴᴜ_

 ➦✧ -〘 *ʙᴏᴛ ᴍᴇɴᴜ* 〙 -  ✧━┈⊷
┃✧ ➦✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰✧━┈⊷
┃✧│  ❶  *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ*
┃✧│  ❷  *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃✧│  ❸  *ғᴜɴ ᴍᴇɴᴜ*
┃✧│  ❹  *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┃✧│  ❺  *ᴀɪ ᴍᴇɴᴜ*
┃✧│  ❻  *ᴀɴɪᴍᴇ ᴍᴇɴᴜ*
┃✧│  ❼  *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
┃✧│  ❽  *ᴏᴛʜᴇʀ ᴍᴇɴᴜ*
┃✧│  ❾  *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
┃✧│  ❿  *ᴍᴀɪɴ ᴍᴇɴᴜ*
┃✧ ➥ ✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰✧━┈⊷
 ➥✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰✧━┈⊷

✨ *ᴘʀᴇᴍɪᴜᴍ ғᴇᴀᴛᴜʀᴇs:*
• 🚀 Ultra Fast Performance
• 🔒 Military Grade Security  
• 📱 Multi-Device Support
• 🎯 300+ Advanced Commands
• 💫 24/7 Active Service

📝 *ᴜsᴀɢᴇ ɢᴜɪᴅᴇ:*
Reply with number 1-10 to open category menu
Example: Reply "5" for AI Menu

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
        `.trim();

        // 💎 MUZAMMIL-MD MENU DATA WITH DIFFERENT SYMBOLS 💎
        const menuData = {
            '1': {
                title: "❶ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Downloader Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 🌐 *Social Media*
┃✦│ • facebook [url]
┃✦│ • tiktok [url]
┃✦│ • instagram [url]
┃✦│ • twitter [url]
┃✦│ • pinterest [url]
┃✦│ • mediafire [url]
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🎵 *Music/Video*
┃✦│ • spotify [query]
┃✦│ • play [song]
┃✦│ • ytmp3 [url]
┃✦│ • ytmp4 [url]
┃✦│ • song [name]
┃✦│ • video [name]
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 📱 *Apps & Images*
┃✦│ • apk [app name]
┃✦│ • apk2 [app name]
┃✦│ • img [query]
┃✦│ • pins [query]
┃✦│ • wallpaper [query]
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '2': {
                title: "❷ *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Group Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 🛠️ *Management*
┃✦│ • add @user
┃✦│ • remove @user
┃✦│ • kick @user
┃✦│ • kickall
┃✦│ • grouplink
┃✦│ • revoke
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 👑 *Admin Tools*
┃✦│ • promote @user
┃✦│ • demote @user
┃✦│ • mute [time]
┃✦│ • unmute
┃✦│ • lockgc
┃✦│ • unlockgc
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🏷️ *Tagging*
┃✦│ • tagall
┃✦│ • tagadmins
┃✦│ • hidetag [msg]
┃✦│ • invite
┃✦│ • groupname [text]
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '3': {
                title: "❸ *ғᴜɴ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Fun Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 🎭 *Interactive*
┃✦│ • shapar
┃✦│ • rate @user
┃✦│ • ship @user1 @user2
┃✦│ • character
┃✦│ • pickup
┃✦│ • joke
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🎮 *Games*
┃✦│ • hack @user
┃✦│ • insult @user
┃✦│ • truth
┃✦│ • dare
┃✦│ • quiz
┃✦│ • slot
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 😊 *Reactions*
┃✦│ • love @user
┃✦│ • happy @user
┃✦│ • sad @user
┃✦│ • angry @user
┃✦│ • laugh @user
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '4': {
                title: "❹ *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Owner Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 🤖 *Bot Control*
┃✦│ • restart
┃✦│ • shutdown
┃✦│ • updatecmd
┃✦│ • block @user
┃✦│ • unblock @user
┃✦│ • leavegc
┃✦╰──────────────
┃✦╭──────────────
┃✦│ ⚙️ *System*
┃✦│ • setpp [image]
┃✦│ • fullpp [image]
┃✦│ • broadcast [msg]
┃✦│ • eval [code]
┃✦│ • term [command]
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 📊 *Info*
┃✦│ • gjid
┃✦│ • listcmd
┃✦│ • runtime
┃✦│ • status
┃✦│ • ping
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '5': {
                title: "❺ *ᴀɪ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *AI Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 💬 *Chat AI*
┃✦│ • ai [query]
┃✦│ • gpt3 [query]
┃✦│ • gpt2 [query]
┃✦│ • gptmini [query]
┃✦│ • gpt [query]
┃✦│ • meta [query]
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🖼️ *Image AI*
┃✦│ • imagine [text]
┃✦│ • imagine2 [text]
┃✦│ • dalle [text]
┃✦│ • luma [query]
┃✦│ • aiimg [text]
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🔍 *Specialized*
┃✦│ • blackbox [query]
┃✦│ • luma [query]
┃✦│ • dj [query]
┃✦│ • khan [query]
┃✦│ • bard [query]
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '6': {
                title: "❻ *ᴀɴɪᴍᴇ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Anime Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 🖼️ *Anime Images*
┃✦│ • waifu
┃✦│ • neko
┃✦│ • loli
┃✦│ • megumin
┃✦│ • maid
┃✦│ • awoo
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 👤 *Characters*
┃✦│ • animegirl
┃✦│ • animeboy
┃✦│ • naruto
┃✦│ • foxgirl
┃✦│ • garl
┃✦│ • shinobu
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🎲 *Random*
┃✦│ • fack
┃✦│ • dog
┃✦│ • anime1-5
┃✦│ • animegirl1-5
┃✦│ • wallanime
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '7': {
                title: "❼ *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Convert Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 🖼️ *Media*
┃✦│ • sticker [image]
┃✦│ • sticker2 [image]
┃✦│ • tomp3 [video]
┃✦│ • emojimix 😊+😂
┃✦│ • take [name,text]
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 📝 *Text*
┃✦│ • fancy [text]
┃✦│ • tts [text]
┃✦│ • trt [text]
┃✦│ • base64 [text]
┃✦│ • unbase64 [text]
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🔄 *Formats*
┃✦│ • toimg [sticker]
┃✦│ • togif [video]
┃✦│ • tomp4 [gif]
┃✦│ • tourl [media]
┃✦│ • toaudio [video]
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '8': {
                title: "❽ *ᴏᴛʜᴇʀ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Other Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 🛠️ *Tools*
┃✦│ • timenow
┃✦│ • date
┃✦│ • count [number]
┃✦│ • calculate [math]
┃✦│ • countx
┃✦│ • qr [text]
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🎲 *Random*
┃✦│ • flip
┃✦│ • coinflip
┃✦│ • rcolor
┃✦│ • roll
┃✦│ • fact
┃✦│ • quote
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🔍 *Search*
┃✦│ • define [word]
┃✦│ • news [query]
┃✦│ • movie [name]
┃✦│ • weather [city]
┃✦│ • google [query]
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '9': {
                title: "❾ *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Reaction Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ ❤️ *Affection*
┃✦│ • cuddle @user
┃✦│ • hug @user
┃✦│ • kiss @user
┃✦│ • lick @user
┃✦│ • pat @user
┃✦│ • love @user
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 😂 *Funny*
┃✦│ • bully @user
┃✦│ • bonk @user
┃✦│ • yeet @user
┃✦│ • slap @user
┃✦│ • kill @user
┃✦│ • punch @user
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 😊 *Expressions*
┃✦│ • blush @user
┃✦│ • smile @user
┃✦│ • happy @user
┃✦│ • wink @user
┃✦│ • poke @user
┃✦│ • wave @user
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            },
            '10': {
                title: "❿ *ᴍᴀɪɴ ᴍᴇɴᴜ*",
                content: `
╭━━━〔 *Main Menu* 〕━━━┈⊷
┃✦╭──────────────
┃✦│ 🤖 *Bot Info*
┃✦│ • ping
┃✦│ • alive
┃✦│ • runtime
┃✦│ • uptime
┃✦│ • owner
┃✦│ • repo
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 🎯 *Controls*
┃✦│ • menu
┃✦│ • help
┃✦│ • restart
┃✦│ • status
┃✦│ • listcmd
┃✦│ • support
┃✦╰──────────────
┃✦╭──────────────
┃✦│ 📊 *Status*
┃✦│ • Platform: Heroku
┃✦│ • Speed: Ultra Fast
┃✦│ • Security: Maximum
┃✦│ • Accuracy: 99.9%
┃✦│ • Memory: Optimized
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-F-MD Official ❣️*
                `
            }
        };

        // 💫 PREMIUM CONTEXT INFO
        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '0029Vb6u4UZ1dAw78zbIiL1h@newsletter',
                newsletterName: "FAIZAN-F-MD",
                serverMessageId: 143
            }
        };

        // 🚀 SEND MUZAMMIL-MD MENU
        let sentMsg;
        try {
            sentMsg = await conn.sendMessage(
                from,
                {
                    image: { 
                        url: config.MENU_IMAGE_URL || 'https://image2url.com/images/1764942601032-3a96a0f0-a825-4dfb-863c-89b48b968b84.jpg' 
                    },
                    caption: menuCaption,
                    contextInfo: contextInfo,
                    headerType: 1
                },
                { quoted: mek }
            );
        } catch (e) {
            sentMsg = await conn.sendMessage(
                from,
                { 
                    text: menuCaption, 
                    contextInfo: contextInfo 
                },
                { quoted: mek }
            );
        }

        const messageID = sentMsg.key.id;

        // 🎯 INTERACTIVE HANDLER
        const handler = async (msgData) => {
            try {
                const receivedMsg = msgData.messages[0];
                if (!receivedMsg?.message || !receivedMsg.key?.remoteJid) return;

                const isReplyToMenu = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;
                
                if (isReplyToMenu) {
                    const receivedText = receivedMsg.message.conversation || 
                                      receivedMsg.message.extendedTextMessage?.text;
                    const senderID = receivedMsg.key.remoteJid;

                    if (menuData[receivedText]) {
                        const selectedMenu = menuData[receivedText];
                        
                        await conn.sendMessage(
                            senderID,
                            {
                                image: { 
                                    url: config.MENU_IMAGE_URL || 'https://image2url.com/images/1764942601032-3a96a0f0-a825-4dfb-863c-89b48b968b84.jpg' 
                                },
                                caption: selectedMenu.content,
                                contextInfo: contextInfo
                            },
                            { quoted: receivedMsg }
                        );

                        await conn.sendMessage(senderID, {
                            react: { text: '✅', key: receivedMsg.key }
                        });

                    } else {
                        await conn.sendMessage(
                            senderID,
                            {
                                text: `❌ *ɪɴᴠᴀʟɪᴅ sᴇʟᴇᴄᴛɪᴏɴ!* ❌\n\nPlease reply with number 1-10 only.\n\n*Example:* Reply "5" for AI Menu\n\n🔧 Need help? Contact: MUZAMMIL-MD`,
                                contextInfo: contextInfo
                            },
                            { quoted: receivedMsg }
                        );
                    }
                }
            } catch (e) {
                console.log('Handler error:', e);
            }
        };

        // 📱 ADD LISTENER
        conn.ev.on("messages.upsert", handler);

        // ⏰ REMOVE LISTENER AFTER 10 MINUTES
        setTimeout(() => {
            conn.ev.off("messages.upsert", handler);
        }, 600000);

    } catch (e) {
        console.error('Menu Error:', e);
        await conn.sendMessage(
            from,
            { 
                text: `🌀 *sʏsᴛᴇᴍ ʙᴜsʏ* 🌀\n\FAIZAN-F-MD Menu is currently optimizing...\n\nPlease try again in few seconds!\n\n⚡ Powered by: FAIZAN-F-MD
            },
            { quoted: mek }
        );
    }
});
