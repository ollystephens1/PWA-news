# Build Angular application
FROM node:8.11.1 as builder

COPY . /pwa-news

WORKDIR /pwa-news

RUN npm install
RUN $(npm bin) ng build

# Serve application with nginx
FROM nginx

COPY --from=builder /pwa-news/dist/* /usr/share/nginx/html/

EXPOSE 80
