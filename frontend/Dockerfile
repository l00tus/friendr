# Step 1: Build the Angular frontend
FROM node:22-alpine AS frontend-build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production

# Step 2: Serve the frontend with Express
FROM node:22-alpine

WORKDIR /app

COPY --from=frontend-build /app/dist/frontend /app/dist/frontend
COPY server.js /app/server.js
COPY package*.json /app/

# Install production dependencies
RUN npm install --omit=dev

EXPOSE 8080

CMD ["node", "server.js"]
