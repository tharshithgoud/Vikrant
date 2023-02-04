FROM ubuntu:22.04
ENV DEBIAN_FRONTEND noninteractive

COPY dist/ /root/dist/

RUN ARCH=$(arch) && \
      if [ "$ARCH" = "x86_64" ]; then ARCH="amd64"; fi && \
      if [ "$ARCH" = "aarch64" ]; then ARCH="arm64"; fi && \
    echo "$ARCH" && \
    cd /root/dist/ && \
    apt-get update -y && \
    apt-get install wget -y && \
    wget http://ftp.us.debian.org/debian/pool/main/libe/libemu/libemu2_0.2.0+git20120122-1.2+b1_$ARCH.deb \
         http://ftp.us.debian.org/debian/pool/main/libe/libemu/libemu-dev_0.2.0+git20120122-1.2+b1_$ARCH.deb && \
    apt install ./libemu2_0.2.0+git20120122-1.2+b1_$ARCH.deb \
                ./libemu-dev_0.2.0+git20120122-1.2+b1_$ARCH.deb -y && \
    apt-get install -y --no-install-recommends \
	build-essential \
	ca-certificates \
	check \
	cmake \
	cython3 \
	git \
        libcap2-bin \
	libcurl4-openssl-dev \
	libev-dev \
	libglib2.0-dev \
	libloudmouth1-dev \
	libnetfilter-queue-dev \
	libnl-3-dev \
	libpcap-dev \
	libssl-dev \
	libtool \
	libudns-dev \
	procps \
	python3 \
	python3-dev \
	python3-boto3 \
	python3-bson \
	python3-yaml \
	fonts-liberation && \
    git clone --depth=1 https://github.com/dinotools/dionaea -b 0.11.0 /root/dionaea/ && \
    cd /root/dionaea && \
    mkdir build && \
    cd build && \
    cmake -DCMAKE_INSTALL_PREFIX:PATH=/opt/dionaea .. && \
    make && \
    make install && \
    addgroup --gid 2000 dionaea && \
    adduser --system --no-create-home --shell /bin/bash --uid 2000 --disabled-password --disabled-login --gid 2000 dionaea && \
    setcap cap_net_bind_service=+ep /opt/dionaea/bin/dionaea && \
    chown -R dionaea:dionaea /opt/dionaea/var && \
    rm -rf /opt/dionaea/etc/dionaea/* && \
    mv /root/dist/etc/* /opt/dionaea/etc/dionaea/ && \
    apt-get purge -y \
      build-essential \
      ca-certificates \
      check \
      cmake \
      cython3 \
      git \
      libcurl4-openssl-dev \
      libemu-dev \
      libev-dev \
      libglib2.0-dev \
      libloudmouth1-dev \
      libnetfilter-queue-dev \
      libnl-3-dev \
      libpcap-dev \
      libssl-dev \
      libtool \
      libudns-dev \
      python3 \
      python3-dev \   
      python3-boto3 \
      python3-bson \
      python3-yaml \ 
      wget && \ 
      apt-get install -y \
      ca-certificates \
      python3 \
      python3-boto3 \
      python3-bson \
      python3-yaml \
      libcurl4 \
      libemu2 \
      libev4 \
      libglib2.0-0 \
      libnetfilter-queue1 \
      libnl-3-200 \
      libpcap0.8 \
      libpython3.10 \
      libudns0 && \
    apt-get autoremove --purge -y && \
    apt-get clean && \
    rm -rf /root/* /var/lib/apt/lists/* /tmp/* /var/tmp/* /root/.cache /opt/dionaea/.git

STOPSIGNAL SIGINT
HEALTHCHECK CMD if [ $(ps -C mpv -p 1 -o %cpu | tail -n 1 | cut -f 1 -d ".") -gt 75 ]; then kill -2 1; else exit 0; fi
USER dionaea:dionaea
CMD ["/opt/dionaea/bin/dionaea", "-c", "/opt/dionaea/etc/dionaea/dionaea.cfg"]