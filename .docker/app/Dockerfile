FROM oven/bun:latest

WORKDIR /workspace

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    curl

COPY --from=node:21 /usr/local/bin/node /usr/local/bin/node

# COPY ./../package.json /workspace/package.json

# RUN bun install

CMD ["bun", "run", "--watch", "src/index.ts"]