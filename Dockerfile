FROM nginx:1.16.0-alpine
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf