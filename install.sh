sudo apt update
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo apt install openjdk-8-jdk
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -v
sudo apt install -y nodejs
sudo add-apt-repository ppa:oisf/suricata-stable
sudo apt update
sudo apt install suricata jq

cd bin

docker compose up
