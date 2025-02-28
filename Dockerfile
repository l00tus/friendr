#Stage1 : build the backend
FROM node:22-alpine AS backend-build

WORKDIR /backend

COPY backend/package*.json ./
RUN npm install
COPY backend ./

#Stage2 : build the frontend
FROM node:22-alpine AS frontend-build

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm install
COPY frontend ./

#Stage3 : combine both backend and frontend
FROM node:22-alpine

WORKDIR /app

#backend
COPY --from=backend-build /backend /app

#frontend
COPY --from=frontend-build /frontend /app/public

 
RUN npm install -g @angular/cli
RUN echo 'cd /app && node index.js & cd /app/public && ng serve --port 4200 --host 0.0.0.0' > /start-apps.sh 
RUN chmod +x /start-apps.sh

EXPOSE 4200

CMD [ "sh", "-c", "/start-apps.sh"]
