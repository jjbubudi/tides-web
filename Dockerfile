ARG BASE_IMAGE=nginx:1.16.0-alpine
FROM ${BASE_IMAGE}
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf