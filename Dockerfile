# Base image with Node.js
FROM node:18-slim

# Install Python and yt-dlp
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    curl \
    && rm -rf /var/lib/apt/lists/*

RUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Render uses a dynamic port, so we don't fix it to 3000
ENV PORT=10000
EXPOSE 10000

# Start the application on the port provided by Render
CMD ["sh", "-c", "npm start -- -p ${PORT:-10000}"]
