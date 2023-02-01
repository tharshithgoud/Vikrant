FROM alpine:3.15
RUN apk -U --no-cache add \
            git \
            libcap \
            python2 && \
    git clone https://github.com/t3chn0m4g3/mailoney /opt/mailoney && \
    cd /opt/mailoney && \
    addgroup -g 2000 mailoney && \
    adduser -S -H -s /bin/ash -u 2000 -D -g 2000 mailoney && \
    chown -R mailoney:mailoney /opt/mailoney && \
    setcap cap_net_bind_service=+ep /usr/bin/python2.7 && \
    apk del --purge git && \
    rm -rf /root/* /var/cache/apk/* /opt/mailoney/.git

STOPSIGNAL SIGINT
USER mailoney:mailoney
WORKDIR /opt/mailoney/
CMD ["/usr/bin/python","mailoney.py","-i","0.0.0.0","-p","25","-s","mailrelay.local","-t","schizo_open_relay"]