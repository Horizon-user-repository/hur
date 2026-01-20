// HUR Package Database

// Render packages
function renderPackages(packagesToRender) {
    const packageList = document.getElementById('package-list');
    packageList.innerHTML = '';
    
    if (packagesToRender.length === 0) {
        packageList.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">No packages found matching your search.</p>';
        return;
    }
    
    packagesToRender.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <h3>${pkg.name}</h3>
            <p>${pkg.description}</p>
            <div class="package-meta">
                <span>📦 v${pkg.version}</span>
                <span>👤 ${pkg.author}</span>
                <span>💾 ${pkg.size}</span>
            </div>
            <div class="package-tags">
                ${pkg.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="install-cmd">sudo pacman -S ${pkg.name}</div>
        `;
        packageList.appendChild(card);
    });
}

// Search and filter functionality
let currentPackages = packages;

document.getElementById('search').addEventListener('input', filterPackages);
document.getElementById('category-filter').addEventListener('change', filterPackages);

function filterPackages() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    
    currentPackages = packages.filter(pkg => {
        const matchesSearch = pkg.name.toLowerCase().includes(searchTerm) ||
                            pkg.description.toLowerCase().includes(searchTerm) ||
                            pkg.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesCategory = category === 'all' || pkg.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    renderPackages(currentPackages);
}

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
EOF
