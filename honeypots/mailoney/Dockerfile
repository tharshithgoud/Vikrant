FROM alpine:3.15
RUN apk -U --no-cache add \
            git \
            libcap \
            python2 && \
    git clone https://github.com/t3chn0m4g3/mailoney /opt/mailoney && \
    cd /opt/mailoney && \
    setcap cap_net_bind_service=+ep /usr/bin/python2.7 && \
    apk del --purge git && \
    rm -rf /root/* /var/cache/apk/* /opt/mailoney/.git

STOPSIGNAL SIGINT
WORKDIR /opt/mailoney/
CMD ["/usr/bin/python","mailoney.py","-i","0.0.0.0","-p","25","-s","mailrelay.local","-t","schizo_open_relay"]