#!/bin/sh
apt-get update && apt-get install -y fontconfig
mkdir -p /usr/local/share/fonts
cd /usr/local/share/fonts
curl -fLo "Ubuntu-Regular.ttf" "https://github.com/google/fonts/raw/main/ufl/ubuntu/Ubuntu-Regular.ttf"
curl -fLo "Ubuntu-Bold.ttf" "https://github.com/google/fonts/raw/main/ufl/ubuntu/Ubuntu-Bold.ttf"
fc-cache -f -v
