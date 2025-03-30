FROM node:20-alpine

WORKDIR /app

# Create necessary directories with correct permissions
RUN mkdir -p /app/.next && \
    chown -R node:node /app

# Switch to non-root user
USER node

# Install dependencies first (better caching)
COPY --chown=node:node package*.json ./
RUN npm install

# Copy the rest of the application
COPY --chown=node:node . .

# Expose the port Next.js runs on
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"] 