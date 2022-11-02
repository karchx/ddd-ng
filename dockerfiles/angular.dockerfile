FROM node:current-alpine

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

ENV PNPM_HOME=/usr/local/bin

RUN corepack enable

RUN SHELL=bash pnpm setup \
    && source /root/.bashrc


RUN pnpm add -g @angular/cli


EXPOSE 4200

WORKDIR /app-ddd/ddd-ng
