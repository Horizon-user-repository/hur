# HUR - Horizon User Repository

🌅 Community-driven packages and resources for HorizonOS

## About

HUR (Horizon User Repository) is a central repository for HorizonOS-specific packages, themes, tools, and guides created by the community.

## Installation

Add HUR to your system:
```bash
# Add HUR repository
echo "[hur]" | sudo tee -a /etc/pacman.conf
echo "Server = https://Horizon-user-repository.github.io/hur/repo/\$arch" | sudo tee -a /etc/pacman.conf

# Update package database
sudo pacman -Sy
```

## Contributing

1. Fork this repository
2. Create your package/guide
3. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Structure
```
hur/
├── index.html          # Main website
├── wiki/               # Documentation
├── packages/           # Package PKGBUILDs
├── repo/               # Built packages
└── assets/             # CSS, JS, images
```

## License

MIT License - See [LICENSE](LICENSE) for details
