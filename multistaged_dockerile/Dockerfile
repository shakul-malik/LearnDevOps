# Dockerfile

# Stage 1: Build Node.js application
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY src/ ./src/
RUN npm install --only=development
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
