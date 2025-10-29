// Sample Projects Data - Replace with your actual projects
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "fullstack",
        description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "🛒",
        demoLink: "https://example.com/demo1",
        githubLink: "https://github.com/yourusername/project1"
    },
    {
        id: 2,
        title: "Task Management App",
        category: "frontend",
        description: "A beautiful and intuitive task management application with drag-and-drop functionality and real-time updates.",
        tags: ["React", "Redux", "Firebase"],
        image: "✓",
        demoLink: "https://example.com/demo2",
        githubLink: "https://github.com/yourusername/project2"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        category: "frontend",
        description: "Real-time weather information display with interactive maps, forecasts, and location-based alerts.",
        tags: ["JavaScript", "API", "CSS3"],
        image: "🌤️",
        demoLink: "https://example.com/demo3",
        githubLink: "https://github.com/yourusername/project3"
    },
    {
        id: 4,
        title: "Social Media Analytics",
        category: "fullstack",
        description: "Comprehensive analytics dashboard for social media metrics with data visualization and insights.",
        tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
        image: "📊",
        demoLink: "https://example.com/demo4",
        githubLink: "https://github.com/yourusername/project4"
    },
    {
        id: 5,
        title: "Code Snippet Manager",
        category: "tool",
        description: "Organize and share code snippets with syntax highlighting, tagging, and search functionality.",
        tags: ["React", "Firebase", "Markdown"],
        image: "💻",
        demoLink: "https://example.com/demo5",
        githubLink: "https://github.com/yourusername/project5"
    },
    {
        id: 6,
        title: "Portfolio Generator",
        category: "tool",
        description: "Automated portfolio website generator with customizable templates and themes.",
        tags: ["JavaScript", "HTML5", "CSS3"],
        image: "🎨",
        demoLink: "https://example.com/demo6",
        githubLink: "https://github.com/yourusername/project6"
    }
];

// Render projects
function renderProjects(projectsToRender) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    projectsToRender.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.dataset.category = project.category;
        
        projectCard.innerHTML = `
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category}</span>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" target="_blank" class="project-link">Live Demo</a>
                    <a href="${project.githubLink}" target="_blank" class="project-link secondary">GitHub</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            if (filter === 'all') {
                renderProjects(projects);
            } else {
                const filteredProjects = projects.filter(project => project.category === filter);
                renderProjects(filteredProjects);
            }
        });
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
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
}

// Navbar background on scroll
function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
}

// Intersection Observer for fade-in animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.section-title, .about-content, .contact-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
    setupFilters();
    setupSmoothScroll();
    setupNavbar();
    setupAnimations();
    
    console.log('Portfolio loaded successfully! 🚀');
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or overlays
        // Add your modal close logic here if needed
    }
});
