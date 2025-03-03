#Stage1 : build the backend
FROM node:22-alpine AS backend-build

WORKDIR /backend

COPY backend/package*.json ./
RUN npm install
COPY backend ./

#Stage2 : run the backend
FROM node:22-alpine

WORKDIR /app

COPY --from=backend-build /backend /app
COPY .env /app/.env
 
EXPOSE 3000

CMD ["node", "index.js"]
