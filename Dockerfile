# -------------------------------------
# 1. Base Image (Alpine is smallest)
# -------------------------------------
FROM node:18-alpine

# -------------------------------------
# 2. Install required dependencies
# -------------------------------------
RUN apk update && apk add --no-cache \
    ffmpeg \
    imagemagick \
    git \
    bash

# -------------------------------------
# 3. App working directory
# -------------------------------------
WORKDIR /app

# -------------------------------------
# 4. Copy package files first
# -------------------------------------
COPY package.json .
COPY package-lock.json .

# -------------------------------------
# 5. Install Node dependencies
# -------------------------------------
RUN npm install --production

# -------------------------------------
# 6. Copy all bot files
# -------------------------------------
COPY . .

# -------------------------------------
# 7. Expose port (if your bot uses express)
# -------------------------------------
EXPOSE 3000

# -------------------------------------
# 8. Start the bot
# -------------------------------------
CMD ["node", "index.js"]
