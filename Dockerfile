# 1. Base Image
FROM node:18-alpine

# 2. Set working directory inside container
WORKDIR /usr/src/app

# 3. Copy dependencies and install
COPY package*.json ./
RUN npm install --production

# 4. Copy source code
COPY . .

# 5. Expose application port
EXPOSE 3000

# 6. Start command
CMD ["npm", "start"]
