FROM alpine:3.17

COPY ADBHoney/ /root/ADBHoney/

RUN apk update && \
    apk --no-cache -U add \
    python3 \
    py3-requests && \
    rm -rf /var/cache/apk/*

STOPSIGNAL SIGINT
HEALTHCHECK CMD if [ $(ps -C mpv -p 1 -o %cpu | tail -n 1 | cut -f 1 -d ".") -gt 75 ]; then kill -2 1; else exit 0; fi
WORKDIR /root/ADBHoney/
CMD ["python3","run.py"]