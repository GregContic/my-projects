// My Projects
const projects = [
    {
        id: 1,
        title: "Higher Education Platform",
        category: "frontend",
        description: "An educational platform designed to provide comprehensive learning resources and interactive content for students.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "🎓",
        demoLink: "https://gregcontic.github.io/higher/",
        githubLink: "https://github.com/GregContic/higher"
    },
    {
        id: 2,
        title: "NextHireAI",
        category: "fullstack",
        description: "AI-powered recruitment platform that streamlines the hiring process with intelligent candidate matching and automated workflows.",
        tags: ["Next.js", "AI", "Vercel", "TypeScript"],
        image: "🤖",
        demoLink: "https://next-hire-ai-sandy.vercel.app/",
        githubLink: "https://github.com/GregContic/NextHireAI"
    },
    {
        id: 3,
        title: "ConvoHive",
        category: "fullstack",
        description: "A collaborative communication platform that brings teams together with real-time messaging and project management features.",
        tags: ["React", "Next.js", "Vercel", "Real-time"],
        image: "💬",
        demoLink: "https://convohive.vercel.app",
        githubLink: "https://github.com/GregContic/convohive"
    },
    {
        id: 4,
        title: "Documentor V3",
        category: "tool",
        description: "Advanced documentation tool that helps developers create, manage, and share project documentation efficiently.",
        tags: ["React", "Vercel", "Markdown", "Documentation"],
        image: "�",
        demoLink: "https://documentor-v3-1.vercel.app",
        githubLink: "https://github.com/GregContic"
    },
    {
        id: 5,
        title: "Evict Fire Design",
        category: "frontend",
        description: "Modern UI/UX design project showcasing innovative interface designs and user experience patterns.",
        tags: ["Figma", "UI/UX", "Design", "Prototyping"],
        image: "�",
        demoLink: "https://evict-fire-15824630.figma.site/",
        githubLink: "https://github.com/GregContic"
    },
    {
        id: 6,
        title: "Rose Lurch Project",
        category: "frontend",
        description: "Creative design project featuring elegant layouts and modern visual aesthetics with interactive elements.",
        tags: ["Figma", "UI/UX", "Design", "Web Design"],
        image: "�",
        demoLink: "https://rose-lurch-25131992.figma.site/",
        githubLink: "https://github.com/GregContic"
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
