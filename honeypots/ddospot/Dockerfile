FROM alpine:3.17

COPY ddospot/ /root/ddospot/

RUN apk update && \
    apk --no-cache -U add \
    git \
    python3 \
    py3-pip && \
    cd /root/ddospot && \
    pip install -r requirements.txt && \
    apk del --purge git \
    py3-pip && \
    rm -rf /var/cache/apk/* 

STOPSIGNAL SIGINT
WORKDIR /root/ddospot/
CMD ["python3","ddospot.py","-n"]