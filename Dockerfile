# Stage 1: Build the Next.js application
FROM node:21-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run lint

RUN npm run build

# Stage 2: Create a lightweight image to serve the built application
FROM node:21-alpine

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./
COPY --from=build /app/src ./src

# Expose the port Next.js runs on (default is 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
