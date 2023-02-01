#!/bin/bash

# Backup the original SSH config file
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak

# Replace the default SSH port with the desired port
sudo sed -i 's/#Port 22/Port 2222/g' /etc/ssh/sshd_config

# Restart the SSH service to apply the changes
sudo systemctl restart ssh