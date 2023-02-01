#!/bin/bash

# Update the package index and upgrade packages
sudo apt-get update
sudo apt-get upgrade -y

# Install Docker's dependencies
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

# Add the Docker repository to the system
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"

# Update the package index and install Docker CE
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Start the Docker service
sudo systemctl start docker

# Enable the Docker service to start at boot
sudo systemctl enable docker