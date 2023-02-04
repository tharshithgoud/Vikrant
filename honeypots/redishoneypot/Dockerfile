FROM alpine:3.17
COPY dist/ /root/dist/
RUN apk -U --no-cache add \
                   build-base \
                   git \
                   go \
                   g++ && \
    cd /root && \
    export GOPATH=/opt/go/ && \
    mkdir -p /opt/go && \ 
    git clone https://github.com/cypwnpwnsocute/RedisHoneyPot && \
    cd RedisHoneyPot && \
    git checkout 45adc622a423d12d76392c3a54274f6cff111d58 && \
    go mod download && \
    go install && \
    mkdir -p /opt/redishoneypot && \
    mv /opt/go/bin/RedisHoneyPot /opt/redishoneypot/ && \
    mv /root/dist/redis.conf /opt/redishoneypot && \
    mkdir -p /var/log/redishoneypot && \
    apk del --purge build-base \
                    git \
                    go \
                    g++ && \
    rm -rf /var/cache/apk/* \
           /opt/go \
           /root/* \
	   /opt/redishoneypot/.git

WORKDIR /opt/redishoneypot
CMD ./RedisHoneyPot > /var/log/redishoneypot/redishoneypot.log 2>&1