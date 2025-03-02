# WireGuard Config Generator
## [https://longqt-sea.github.io/wg-generator](https://longqt-sea.github.io/wg-generator/)

## Usage
1. For most users, you’ll likely only need to specify the server address and adjust the number of clients.
2. Press Generate configs and review the output.
3. Replace the configuration in the script [wireguard_install.sh](https://github.com/LongQT-sea/wg-generator/blob/main/wireguard_install.sh) with the one you generated and run the script to install.

## Key Features
Generates WireGuard configuration files for Ubuntu and Debian servers and multiple clients.
Includes support for port forwarding rules.
All key generation is performed client-side, locally, using the wireguard.js file from the official [wireguard-tools](https://git.zx2c4.com/wireguard-tools/tree/contrib/keygen-html/wireguard.js) repository.

## Security Warning
For secure and production-ready WireGuard deployments:
- Always generate keys securely using the official wg command-line tool on a trusted machine.
- Use this tool only as a template generator to simplify the creation of WireGuard configuration files.

## Credits
The wireguard.js file used in this repo is part of the official [wireguard-tools](https://git.zx2c4.com/wireguard-tools) repository, original author: Jason A. Donenfeld <Jason@zx2c4.com>.

## Disclaimer
This tool is provided "as-is" without any warranties. Use it at your own risk.