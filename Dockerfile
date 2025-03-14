# Use official Bun image as base
FROM oven/bun:1

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json .
COPY bun.lockb .

# Install dependencies
RUN bun install

# Copy rest of the application
COPY . .

# Expose port if needed (adjust as necessary)
EXPOSE 3000

# Start the application
CMD ["bun", "start"]
