FROM node:14-slim as webBuilder
MAINTAINER livo
ADD ./ /web
WORKDIR /web
RUN npm install  && npm run-script build

FROM nginx:stable-alpine
MAINTAINER livo
ENV TZ : 'Asia/Shanghai'
COPY --from=webBuilder /web/build /usr/share/nginx/html
ADD ./nginx.conf /etc/nginx/nginx.conf
