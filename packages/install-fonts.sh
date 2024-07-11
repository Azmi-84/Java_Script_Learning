#!/bin/sh
apt-get update && apt-get install -y fontconfig
mkdir -p /usr/local/share/fonts
cd /usr/local/share/fonts
curl -fLo "FiraSans-Regular.ttf" "https://github.com/google/fonts/raw/main/ofl/firasans/FiraSans-Regular.ttf"
curl -fLo "FiraSans-Bold.ttf" "https://github.com/google/fonts/raw/main/ofl/firasans/FiraSans-Bold.ttf"
fc-cache -f -v
