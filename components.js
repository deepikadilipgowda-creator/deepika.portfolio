document.addEventListener('DOMContentLoaded', () => {
    // Inject Background Blobs
    const blobs = document.createElement('div');
    blobs.className = 'bg-blobs';
    blobs.innerHTML = `
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
    `;
    document.body.prepend(blobs);

    // Inject Navbar
    const nav = document.createElement('nav');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    nav.innerHTML = `
        <a href="index.html" class="logo">Portfolio.</a>
        <ul class="nav-links">
            <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home</a></li>
            <li><a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">About</a></li>
            <li><a href="projects.html" class="${currentPath === 'projects.html' ? 'active' : ''}">Projects</a></li>
            <li><a href="education.html" class="${currentPath === 'education.html' ? 'active' : ''}">Education</a></li>
            <li><a href="certifications.html" class="${currentPath === 'certifications.html' ? 'active' : ''}">Certifications</a></li>
            <li><a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contact</a></li>
        </ul>
    `;
    document.body.prepend(nav);

    // Apply fade-in to main elements
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('fade-in');
    }
});
