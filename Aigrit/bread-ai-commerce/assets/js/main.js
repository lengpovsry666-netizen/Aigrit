// ==================== 3D EARTH GLOBE WITH ORTHOGRAPHIC PROJECTION ====================
function initEarthGlobe() {
    const canvases = document.querySelectorAll('[id^="earthGlobe"]');
    if (canvases.length === 0) return;
    
    canvases.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        const size = canvas.width;
        const radius = size / 2.2;
        const centerX = size / 2;
        const centerY = size / 2;
        let rotationY = 0;
        
        // Define 3D landmass coordinates (lon, lat, type)
        const landmasses = [
            // North America
            { vertices: [[-100, 45], [-95, 50], [-85, 45], [-90, 35]], color: '#00CC44', depth: 0 },
            // South America
            { vertices: [[-70, 0], [-60, -5], [-50, -20], [-65, -25]], color: '#00DD33', depth: 0 },
            // Greenland
            { vertices: [[-45, 75], [-25, 80], [-20, 75], [-40, 70]], color: '#88FF99', depth: 0 },
            // Europe
            { vertices: [[-10, 55], [15, 60], [20, 50], [0, 45]], color: '#00BB22', depth: 0 },
            // Africa
            { vertices: [[15, 20], [40, 30], [45, 0], [20, -10]], color: '#00CC44', depth: 0 },
            // Asia
            { vertices: [[70, 60], [120, 55], [130, 30], [80, 25]], color: '#00BB22', depth: 0 },
            // Australia
            { vertices: [[130, -15], [150, -10], [155, -35], [135, -40]], color: '#00DD33', depth: 0 },
            // Antarctica hints
            { vertices: [[0, -80], [60, -75], [120, -80], [60, -85]], color: '#88FF99', depth: 0 }
        ];
        
        // Convert spherical to 3D Cartesian coordinates
        function sphericalTo3D(lon, lat, rad) {
            const phi = (lon * Math.PI) / 180;
            const theta = (lat * Math.PI) / 180;
            return [
                rad * Math.cos(theta) * Math.cos(phi),
                rad * Math.sin(theta),
                rad * Math.cos(theta) * Math.sin(phi)
            ];
        }
        
        // Rotate point around Y axis
        function rotateY(point, angle) {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            return [
                point[0] * cos + point[2] * sin,
                point[1],
                -point[0] * sin + point[2] * cos
            ];
        }
        
        // Orthographic projection
        function project(point3D) {
            const scale = 1 / (2 - point3D[2] / radius);
            return [
                centerX + point3D[0] * scale,
                centerY - point3D[1] * scale,
                point3D[2]
            ];
        }
        
        // Check if point is visible (front of sphere)
        function isVisible(point3D) {
            return point3D[2] > 0;
        }
        
        function drawEarth() {
            // Clear canvas
            ctx.fillStyle = 'rgba(0, 0, 0, 0)';
            ctx.clearRect(0, 0, size, size);
            
            // Draw shadow
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.beginPath();
            ctx.ellipse(centerX, centerY + 2, radius - 1, radius * 0.3, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw ocean base sphere
            const oceanGrad = ctx.createRadialGradient(centerX - radius * 0.3, centerY - radius * 0.3, 0, centerX, centerY, radius);
            oceanGrad.addColorStop(0, '#00D4FF');
            oceanGrad.addColorStop(0.5, '#0088FF');
            oceanGrad.addColorStop(1, '#003D99');
            
            ctx.fillStyle = oceanGrad;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Process and sort landmasses by depth
            const visibleLandmasses = [];
            
            landmasses.forEach(land => {
                const projectedVertices = [];
                let avgDepth = 0;
                let allVisible = true;
                
                land.vertices.forEach(([lon, lat]) => {
                    const point3D = sphericalTo3D(lon, lat, radius);
                    const rotated = rotateY(point3D, rotationY);
                    
                    if (!isVisible(rotated)) {
                        allVisible = false;
                        return;
                    }
                    
                    const projected = project(rotated);
                    projectedVertices.push([projected[0], projected[1]]);
                    avgDepth += rotated[2];
                });
                
                if (allVisible && projectedVertices.length > 0) {
                    avgDepth /= projectedVertices.length;
                    visibleLandmasses.push({
                        vertices: projectedVertices,
                        color: land.color,
                        depth: avgDepth
                    });
                }
            });
            
            // Sort by depth (painter's algorithm)
            visibleLandmasses.sort((a, b) => a.depth - b.depth);
            
            // Draw landmasses
            visibleLandmasses.forEach(land => {
                if (land.vertices.length < 2) return;
                
                ctx.fillStyle = land.color;
                ctx.globalAlpha = 0.85;
                ctx.beginPath();
                ctx.moveTo(land.vertices[0][0], land.vertices[0][1]);
                for (let i = 1; i < land.vertices.length; i++) {
                    ctx.lineTo(land.vertices[i][0], land.vertices[i][1]);
                }
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1;
            });
            
            // Draw specular highlight
            const highlight = ctx.createRadialGradient(centerX - radius * 0.35, centerY - radius * 0.35, 0, centerX, centerY, radius);
            highlight.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
            highlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
            highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.fillStyle = highlight;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw atmosphere
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius + 1, 0, Math.PI * 2);
            ctx.stroke();
            
            // Update rotation
            rotationY += 0.015;
        }
        
        function animate() {
            drawEarth();
            requestAnimationFrame(animate);
        }
        
        animate();
    });
}

// ==================== MOBILE NAVIGATION ==================== 
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// ==================== FORM SUBMISSION ==================== 
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value
    };

    // Log form data (in production, this would be sent to a server)
    console.log('Form submitted:', formData);

    // Show success message
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    form.style.display = 'none';
    successMessage.style.display = 'block';

    // Reset form after 3 seconds
    setTimeout(() => {
        form.style.display = 'block';
        successMessage.style.display = 'none';
        form.reset();
    }, 3000);
}

// ==================== SCROLL ANIMATIONS ==================== 
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

// Observe all feature cards and other elements
document.querySelectorAll('.feature-card, .team-card, .pricing-card, .value-card, .tech-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==================== SMOOTH SCROLL BEHAVIOR ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== NAVBAR SCROLL EFFECT ==================== 
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== COUNTER ANIMATION ==================== 
function animateCounters() {
    const stats = document.querySelectorAll('.stat-card h3');
    
    stats.forEach(stat => {
        const finalValue = parseFloat(stat.textContent);
        const isPercentage = stat.textContent.includes('%');
        const isCurrency = stat.textContent.includes('€');
        
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(counter);
            }
            
            let displayValue = currentValue.toFixed(1);
            if (isPercentage) {
                stat.textContent = displayValue + '%';
            } else if (isCurrency) {
                stat.textContent = '€' + displayValue + 'M';
            } else {
                stat.textContent = displayValue;
            }
        }, 30);
    });
}

// Trigger counter animation when stats section is visible
if (document.querySelector('.statistics')) {
    const statsSection = document.querySelector('.statistics');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    statsObserver.observe(statsSection);
}

// ==================== ACTIVE NAV LINK ==================== 
function setActiveNavLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

// ==================== DARK MODE TOGGLE (Optional) ==================== 
function initDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        // Optional: Add dark mode support
        // document.body.classList.add('dark-mode');
    }
}

initDarkMode();

// ==================== PERFORMANCE MONITORING ==================== 
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    });
}

// ==================== UTILITY FUNCTIONS ==================== 

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get current year for footer
function updateFooterYear() {
    const yearElements = document.querySelectorAll('.footer-bottom');
    yearElements.forEach(el => {
        const text = el.textContent;
        el.textContent = text.replace('2026', new Date().getFullYear());
    });
}

updateFooterYear();

// ==================== ANALYTICS (OPTIONAL) ==================== 
function trackPageView() {
    const pageData = {
        page: document.title,
        timestamp: new Date().toISOString(),
        referrer: document.referrer
    };
    console.log('Page view tracked:', pageData);
}

trackPageView();

// ==================== KEYBOARD NAVIGATION ==================== 
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==================== ACCESSIBILITY ==================== 
// Add focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ==================== LAZY LOADING IMAGES (Optional) ==================== 
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize Earth globe
initEarthGlobe();

console.log('Aigrit website loaded successfully!');
