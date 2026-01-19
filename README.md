# HUR - Horizon User Repository

🌅 Community-driven packages and resources for HorizonOS

## About

HUR (Horizon User Repository) is a central repository for HorizonOS-specific packages, themes, tools, and guides created by the community.

## Features

- 📦 **Package Repository** - Browse and install community packages
- 📚 **Guides & Tutorials** - Learn from the community
- 🎨 **Themes & Customizations** - Make HorizonOS your own
- 🤝 **Community Contributions** - Everyone can contribute

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

We welcome contributions! Here's how:

1. Fork this repository
2. Create your package/guide
3. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Package Guidelines

- All packages must work on HorizonOS
- Include proper documentation
- Follow Arch packaging standards
- Test thoroughly before submitting

## Community

- **Website**: https://Horizon-user-repository.github.io/hur
- **GitHub**: https://github.com/Horizon-user-repository/hur

## License

MIT License - See [LICENSE](LICENSE) for details
=======
# hur
The HUR is the Horizon-user-repository for HorizonOS
