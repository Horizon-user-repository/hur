// Sample package data (will be replaced with real data from GitHub API)
const packages = [
    {
        name: "horizonos-themes",
        description: "Beautiful custom themes for HorizonOS",
        version: "1.0.0",
        author: "HorizonOS Team",
        downloads: 1234,
        tags: ["themes", "plasma", "customization"]
    },
    {
        name: "horizonos-tools",
        description: "Essential utilities for HorizonOS users",
        version: "2.1.0",
        author: "Community",
        downloads: 5678,
        tags: ["utilities", "tools"]
    },
    {
        name: "gaming-optimizations",
        description: "Tweaks and optimizations for gaming on HorizonOS",
        version: "1.5.2",
        author: "GamersUnite",
        downloads: 3456,
        tags: ["gaming", "performance"]
    },
    {
        name: "dev-environment",
        description: "Pre-configured development environment setup",
        version: "3.0.1",
        author: "DevTeam",
        downloads: 2345,
        tags: ["development", "coding"]
    }
];

// Animate counters
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Load stats
window.addEventListener('load', () => {
    animateCounter(document.getElementById('package-count'), packages.length);
    animateCounter(document.getElementById('contributor-count'), 42);
    animateCounter(document.getElementById('download-count'), packages.reduce((sum, pkg) => sum + pkg.downloads, 0));
});

// Render packages
function renderPackages(packagesToRender) {
    const packageList = document.getElementById('package-list');
    packageList.innerHTML = '';
    
    packagesToRender.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <h3>${pkg.name}</h3>
            <p>${pkg.description}</p>
            <div class="package-meta">
                <span>📦 v${pkg.version}</span>
                <span>👤 ${pkg.author}</span>
                <span>⬇️ ${pkg.downloads}</span>
            </div>
            <div class="package-tags">
                ${pkg.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="#" class="btn btn-sm btn-primary" style="margin-top: 1rem;">Install</a>
        `;
        packageList.appendChild(card);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = packages.filter(pkg => 
        pkg.name.toLowerCase().includes(searchTerm) ||
        pkg.description.toLowerCase().includes(searchTerm) ||
        pkg.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    renderPackages(filtered);
});

// Initial render
renderPackages(packages);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
