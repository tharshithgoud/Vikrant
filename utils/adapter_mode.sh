#!/bin/bash

# Get main network interface
main_interface=$(ip route | awk '/default/ {print $5}')

# Set main network interface to promiscuous mode
ifconfig $main_interface promisc