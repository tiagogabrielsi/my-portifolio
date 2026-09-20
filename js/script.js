// ==========================================================================
// Skills: technology logos + proficiency stars (1-5)
// Edit `level` (0-5) for each skill to reflect your own proficiency.
// Icons come from the Simple Icons CDN (https://simpleicons.org).
// ==========================================================================
(function initSkillCards() {
  const SKILLS = {
    frontend: [
      { name: 'HTML5', icon: 'html5', level: 5 },
      { name: 'CSS3', icon: 'css3', level: 5 },
      { name: 'JavaScript', icon: 'javascript', level: 5 },
      { name: 'TypeScript', icon: 'typescript', level: 4 },
      { name: 'React', icon: 'react', level: 4 },
      { name: 'Next.js', icon: 'nextdotjs', level: 3 },
      { name: 'Tailwind CSS', icon: 'tailwindcss', level: 4 },
    ],
    backend: [
      { name: 'Node.js', icon: 'nodedotjs', level: 4 },
      { name: 'Express', icon: 'express', level: 4 },
      { name: 'Python', icon: 'python', level: 3 },
      { name: 'PostgreSQL', icon: 'postgresql', level: 3 },
      { name: 'MongoDB', icon: 'mongodb', level: 3 },
    ],
    tools: [
      { name: 'Git', icon: 'git', level: 5 },
      { name: 'GitHub', icon: 'github', level: 5 },
      { name: 'Docker', icon: 'docker', level: 3 },
      { name: 'Vercel', icon: 'vercel', level: 4 },
      { name: 'Linux', icon: 'linux', level: 3 },
    ],
  };

  function starsMarkup(level) {
    let markup = '';
    for (let i = 1; i <= 5; i++) {
      markup += `<svg class="star${i <= level ? ' filled' : ''}"><use href="#star-icon"></use></svg>`;
    }
    return markup;
  }

  Object.keys(SKILLS).forEach((group) => {
    const container = document.querySelector(`[data-skill-group="${group}"]`);
    if (!container) return;

    container.innerHTML = SKILLS[group]
      .map(
        (skill) => `
        <div class="skill-card">
          <div class="skill-icon">
            <img src="https://cdn.simpleicons.org/${skill.icon}" alt="${skill.name}" loading="lazy" onerror="this.parentElement.style.display='none'" />
          </div>
          <span class="skill-name">${skill.name}</span>
          <div class="skill-stars" role="img" aria-label="Nível: ${skill.level} de 5">${starsMarkup(skill.level)}</div>
        </div>`
      )
      .join('');
  });
})();

// ==========================================================================
// Theme toggle (dark/light) with localStorage persistence
// ==========================================================================
(function initTheme() {
  const root = document.body;
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || (prefersLight ? 'light' : 'dark');
  root.setAttribute('data-theme', initial);

  const toggleBtn = document.getElementById('themeToggle');
  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// ==========================================================================
// Mobile menu toggle
// ==========================================================================
(function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
})();

// ==========================================================================
// Header scroll state + scroll progress bar + active nav link
// ==========================================================================
(function initScrollEffects() {
  const header = document.getElementById('siteHeader');
  const progressBar = document.getElementById('progressBar');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';

    let currentId = '';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        currentId = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ==========================================================================
// Scroll reveal animations
// ==========================================================================
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
})();

// ==========================================================================
// Typing effect for hero role text
// ==========================================================================
(function initTypedText() {
  const el = document.getElementById('typed');
  if (!el) return;

  const roles = [
    'Desenvolvedor(a) Full Stack',
    'Engenheiro(a) de Software',
    'Especialista em React & Node.js',
    'Apaixonado(a) por código limpo',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 40 : 80);
  }

  tick();
})();

// ==========================================================================
// Animated counters for "about" highlights
// ==========================================================================
(function initCounters() {
  const counters = document.querySelectorAll('.highlight-number');
  if (!counters.length) return;

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((counter) => observer.observe(counter));
})();

// ==========================================================================
// Contact form (client-side feedback only — wire `action` up to your backend
// or a service like Formspree/EmailJS to actually receive messages)
// ==========================================================================
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    const action = form.getAttribute('action') || '';
    if (action.includes('your-form-id')) {
      e.preventDefault();
      note.textContent = 'Configure o endpoint do formulário (ex: Formspree, EmailJS) em action="" no HTML para receber mensagens.';
      return;
    }
    note.textContent = 'Enviando...';
  });
})();

// ==========================================================================
// Footer year
// ==========================================================================
document.getElementById('year').textContent = new Date().getFullYear();
