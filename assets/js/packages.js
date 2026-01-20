// Combined package database (HUR + AUR + Arch)
const allPackages = [
    // HUR Packages
    {
        name: "plasma-blur-effects",
        description: "Enhanced blur effects and transparency for KDE Plasma",
        version: "2.0.1",
        repo: "hur",
        category: "customization",
        tags: ["plasma", "effects", "blur", "kde"],
        maintainer: "PlasmaDevs"
    },
    {
        name: "horizonos-welcome",
        description: "Welcome application for post-installation setup and customization",
        version: "1.0.5",
        repo: "hur",
        category: "utilities",
        tags: ["utilities", "setup", "welcome"],
        maintainer: "HorizonOS Team"
    },
    {
        name: "gaming-performance-pack",
        description: "Collection of gaming optimizations, tweaks, and performance enhancements",
        version: "3.1.0",
        repo: "hur",
        category: "gaming",
        tags: ["gaming", "performance", "optimization"],
        maintainer: "GamersCollective"
    },
    {
        name: "dev-tools-bundle",
        description: "Curated collection of development tools and IDE configurations",
        version: "2.5.0",
        repo: "hur",
        category: "development",
        tags: ["development", "coding", "ide"],
        maintainer: "DevCommunity"
    },
    {
        name: "hyprland-animations",
        description: "Smooth animations and transitions for Hyprland window manager",
        version: "1.3.2",
        repo: "hur",
        category: "customization",
        tags: ["hyprland", "animations", "wayland"],
        maintainer: "HyprlandEnthusiast"
    },
    {
        name: "multimedia-codecs-extra",
        description: "Additional multimedia codecs for complete media playback support",
        version: "1.0.0",
        repo: "hur",
        category: "multimedia",
        tags: ["multimedia", "codecs", "video"],
        maintainer: "MediaTeam"
    },
    {
        name: "horizon-icon-theme",
        description: "Modern, colorful icon theme designed specifically for HorizonOS",
        version: "2.1.0",
        repo: "hur",
        category: "themes",
        tags: ["icons", "themes", "design"],
        maintainer: "DesignTeam"
    },
    {
        name: "system-monitor-widget",
        description: "Advanced system monitoring widget for KDE Plasma panels",
        version: "1.4.5",
        repo: "hur",
        category: "utilities",
        tags: ["plasma", "widgets", "monitoring"],
        maintainer: "MonitorDev"
    },
    {
        name: "cachyos-settings",
        description: "Pre-configured settings for CachyOS kernel optimizations",
        version: "1.0.2",
        repo: "hur",
        category: "system",
        tags: ["kernel", "performance", "cachyos"],
        maintainer: "CachyOS Community"
    },
    {
        name: "kde-productivity-suite",
        description: "Productivity applications and widgets for KDE Plasma workflow",
        version: "3.0.0",
        repo: "hur",
        category: "utilities",
        tags: ["productivity", "kde", "workflow"],
        maintainer: "ProductivityTeam"
    },
    {
        name: "obs-studio-plugins",
        description: "Essential OBS Studio plugins for streaming and recording",
        version: "1.2.3",
        repo: "hur",
        category: "multimedia",
        tags: ["obs", "streaming", "plugins"],
        maintainer: "StreamersPack"
    },

    // Popular AUR Packages
    {
        name: "yay",
        description: "Yet another yogurt - AUR helper written in Go",
        version: "12.0.5",
        repo: "aur",
        category: "utilities",
        tags: ["aur", "package-manager", "helper"],
        maintainer: "Jguer"
    },
    {
        name: "paru",
        description: "Feature packed AUR helper written in Rust",
        version: "2.0.0",
        repo: "aur",
        category: "utilities",
        tags: ["aur", "package-manager", "rust"],
        maintainer: "Morganamilo"
    },
    {
        name: "visual-studio-code-bin",
        description: "Visual Studio Code (binary version from Microsoft)",
        version: "1.85.1",
        repo: "aur",
        category: "development",
        tags: ["editor", "ide", "microsoft", "development"],
        maintainer: "D3SOX"
    },
    {
        name: "spotify",
        description: "A proprietary music streaming service",
        version: "1.2.31.1205",
        repo: "aur",
        category: "multimedia",
        tags: ["music", "streaming", "audio"],
        maintainer: "Ashley Whetter"
    },
    {
        name: "google-chrome",
        description: "The popular web browser by Google (Stable Channel)",
        version: "120.0.6099.109",
        repo: "aur",
        category: "utilities",
        tags: ["browser", "web", "google"],
        maintainer: "Xuanwo"
    },
    {
        name: "discord",
        description: "All-in-one voice and text chat for gamers",
        version: "0.0.40",
        repo: "aur",
        category: "utilities",
        tags: ["chat", "voip", "gaming"],
        maintainer: "Jiachen Yang"
    },
    {
        name: "brave-bin",
        description: "Web browser that blocks ads and trackers by default (binary release)",
        version: "1.60.125",
        repo: "aur",
        category: "utilities",
        tags: ["browser", "privacy", "web"],
        maintainer: "Jonathon Fernyhough"
    },

    // Official Arch Packages
    {
        name: "firefox",
        description: "Standalone web browser from mozilla.org",
        version: "121.0",
        repo: "arch",
        category: "utilities",
        tags: ["browser", "web", "mozilla"],
        maintainer: "Arch Linux"
    },
    {
        name: "steam",
        description: "Valve's digital software delivery system",
        version: "1.0.0.79",
        repo: "arch",
        category: "gaming",
        tags: ["games", "valve", "gaming-platform"],
        maintainer: "Arch Linux"
    },
    {
        name: "gimp",
        description: "GNU Image Manipulation Program",
        version: "2.10.36",
        repo: "arch",
        category: "multimedia",
        tags: ["graphics", "image-editor", "photo"],
        maintainer: "Arch Linux"
    },
    {
        name: "vlc",
        description: "Multi-platform MPEG, VCD/DVD, and DivX player",
        version: "3.0.20",
        repo: "arch",
        category: "multimedia",
        tags: ["video", "player", "media"],
        maintainer: "Arch Linux"
    },
    {
        name: "libreoffice-fresh",
        description: "LibreOffice branch which contains new features and program enhancements",
        version: "7.6.4",
        repo: "arch",
        category: "utilities",
        tags: ["office", "productivity", "documents"],
        maintainer: "Arch Linux"
    },
    {
        name: "docker",
        description: "Pack, ship and run any application as a lightweight container",
        version: "24.0.7",
        repo: "arch",
        category: "development",
        tags: ["containers", "virtualization", "devops"],
        maintainer: "Arch Linux"
    },
    {
        name: "blender",
        description: "A fully integrated 3D graphics creation suite",
        version: "4.0.2",
        repo: "arch",
        category: "multimedia",
        tags: ["3d", "modeling", "animation"],
        maintainer: "Arch Linux"
    }
];

let filteredPackages = [...allPackages];
let currentSort = { column: 'name', direction: 'asc' };

// Extract all unique tags
const allTags = [...new Set(allPackages.flatMap(pkg => pkg.tags))].sort();

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    populateTagFilter();
    updateStats();
    renderPackages();
    setupEventListeners();
});

function populateTagFilter() {
    const tagFilter = document.getElementById('tag-filter');
    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagFilter.appendChild(option);
    });
}

function updateStats() {
    const hurCount = allPackages.filter(p => p.repo === 'hur').length;
    const aurCount = allPackages.filter(p => p.repo === 'aur').length;
    const archCount = allPackages.filter(p => p.repo === 'arch').length;

    document.getElementById('total-packages').textContent = allPackages.length;
    document.getElementById('hur-packages').textContent = hurCount;
    document.getElementById('aur-packages').textContent = aurCount;
    document.getElementById('arch-packages').textContent = archCount;
}

function setupEventListeners() {
    document.getElementById('search-input').addEventListener('input', filterPackages);
    document.getElementById('repo-filter').addEventListener('change', filterPackages);
    document.getElementById('category-filter').addEventListener('change', filterPackages);
    document.getElementById('tag-filter').addEventListener('change', filterPackages);

    document.querySelectorAll('.sortable').forEach(th => {
        th.addEventListener('click', () => sortPackages(th.dataset.sort));
    });
}

function filterPackages() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const repoFilter = document.getElementById('repo-filter').value;
    const categoryFilter = document.getElementById('category-filter').value;
    const tagFilter = document.getElementById('tag-filter').value;

    filteredPackages = allPackages.filter(pkg => {
        const matchesSearch = pkg.name.toLowerCase().includes(searchTerm) ||
                            pkg.description.toLowerCase().includes(searchTerm);
        const matchesRepo = repoFilter === 'all' || pkg.repo === repoFilter;
        const matchesCategory = categoryFilter === 'all' || pkg.category === categoryFilter;
        const matchesTag = tagFilter === 'all' || pkg.tags.includes(tagFilter);

        return matchesSearch && matchesRepo && matchesCategory && matchesTag;
    });

    renderPackages();
}

function sortPackages(column) {
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
    }

    filteredPackages.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];

        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }

        if (currentSort.direction === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    updateSortIndicators();
    renderPackages();
}

function updateSortIndicators() {
    document.querySelectorAll('.sortable').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
        if (th.dataset.sort === currentSort.column) {
            th.classList.add(`sort-${currentSort.direction}`);
        }
    });
}

function renderPackages() {
    const tbody = document.getElementById('package-tbody');
    const noResults = document.getElementById('no-results');

    tbody.innerHTML = '';

    if (filteredPackages.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    filteredPackages.forEach(pkg => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><span class="package-name">${pkg.name}</span></td>
            <td><span class="package-repo repo-${pkg.repo}">${pkg.repo.toUpperCase()}</span></td>
            <td>${pkg.version}</td>
            <td>${pkg.description}</td>
            <td>
                <div class="package-tags">
                    ${pkg.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    ${pkg.tags.length > 3 ? `<span class="tag">+${pkg.tags.length - 3}</span>` : ''}
                </div>
            </td>
            <td>
                <button class="install-btn" onclick='showInstallModal(${JSON.stringify(pkg)})'>
                    Install
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function showInstallModal(pkg) {
    const modal = document.getElementById('install-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const command = document.getElementById('modal-command');

    title.textContent = pkg.name;
    description.textContent = pkg.description;

    let installCmd = '';
    if (pkg.repo === 'hur') {
        installCmd = `sudo pacman -S ${pkg.name}`;
    } else if (pkg.repo === 'aur') {
        installCmd = `yay -S ${pkg.name}\n# or\nparu -S ${pkg.name}`;
    } else {
        installCmd = `sudo pacman -S ${pkg.name}`;
    }

    command.textContent = installCmd;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('install-modal').classList.remove('active');
}

function copyCommand() {
    const command = document.getElementById('modal-command').textContent;
    navigator.clipboard.writeText(command).then(() => {
        alert('Command copied to clipboard!');
    });
}

// Close modal when clicking outside
document.getElementById('install-modal').addEventListener('click', (e) => {
    if (e.target.id === 'install-modal') {
        closeModal();
    }
});
