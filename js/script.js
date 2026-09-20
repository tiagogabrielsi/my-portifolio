// ==========================================================================
// i18n: translations (pt/en). Add a new language by adding a key here and
// a toggle option in applyLanguage()/the lang button.
// ==========================================================================
const TRANSLATIONS = {
  pt: {
    'meta.title': 'Tiago — Estudante de Sistemas de Informação',
    'meta.description': 'Portfólio de Tiago, estudante de Sistemas de Informação em busca de oportunidades no exterior.',
    'nav.sobre': 'Sobre',
    'nav.projetos': 'Projetos',
    'nav.formacao': 'Formação',
    'nav.contato': 'Contato',
    'nav.cta': 'Vamos conversar',
    'aria.theme': 'Alternar tema claro/escuro',
    'aria.lang': 'Mudar idioma',
    'aria.menu': 'Abrir menu',
    'aria.github': 'GitHub',
    'aria.linkedin': 'LinkedIn',
    'aria.email': 'E-mail',
    'aria.lattes': 'Currículo Lattes',
    'aria.repo': 'Repositório no GitHub',
    'aria.demo': 'Ver demo ao vivo',
    'aria.backTop': 'Voltar ao topo',
    'hero.eyebrow': 'Olá, eu sou',
    'hero.rolePrefix': 'Eu sou ',
    'hero.desc': 'Estudante de Sistemas de Informação apaixonado por transformar ideias em software — e por entender o hardware que roda por trás dele. Em busca da minha primeira oportunidade internacional em tecnologia.',
    'hero.ctaProjects': 'Ver projetos',
    'hero.ctaCv': 'Baixar CV',
    'hero.scroll': 'role para explorar',
    'hero.roles': [
      'Estudante de Sistemas de Informação',
      'Futuro(a) Desenvolvedor(a) de Software',
      'Apaixonado(a) por Hardware & Software',
      'Em busca de oportunidades no exterior',
    ],
    'code.nome': 'nome',
    'code.foco': 'foco',
    'code.focoValue': 'hardware + software',
    'code.disponivel': 'disponivel',
    'about.title': 'Sobre mim',
    'about.p1': 'Sou estudante de Sistemas de Informação, com formatura prevista para 2028. Curioso por natureza, gosto de entender como as coisas funcionam por trás dos panos — do código à própria máquina que executa ele.',
    'about.p2': 'Tenho interesse especial em hardware: gosto de montar e otimizar computadores, entender processadores, placas de vídeo e como cada peça impacta a performance. Do lado do software, venho estudando programação com foco em desenvolvimento web e boas práticas.',
    'about.p3': 'Antes da faculdade, me formei Técnico em Agronégocio (2021–2023) — uma experiência diferente que me ensinou disciplina e visão de processos. Meu objetivo é conseguir uma oportunidade para trabalhar no exterior e crescer como profissional de tecnologia.',
    'about.factLocationLabel': 'Localização',
    'about.factLocationValue': 'Sua Cidade, Brasil',
    'about.factFormacaoLabel': 'Formação',
    'about.factFormacaoValue': 'Sistemas de Informação — cursando (2023–2028)',
    'about.factDispLabel': 'Disponibilidade',
    'about.factDispValue': 'Aberto a oportunidades no exterior',
    'about.h1Label': 'formatura prevista',
    'about.h2Label': 'tecnologias estudadas',
    'about.h3Label': 'formações acadêmicas',
    'about.h4Label': '% dedicado a aprender',
    'skills.title': 'Skills & Tecnologias',
    'skills.backend': 'Back-end & Linguagens',
    'skills.data': 'Dados & BI',
    'skills.tools': 'Ferramentas & Infra',
    'skills.languages': 'Idiomas',
    'skills.bestPractices': 'Boas práticas',
    'skills.practice1': 'Testes automatizados',
    'skills.practice2': 'Metodologias ágeis',
    'skills.practice3': 'Acessibilidade',
    'skills.levelTemplate': 'Nível: {n} de 5',
    'projects.title': 'Projetos em destaque',
    'projects.name1': 'Nome do Projeto 1',
    'projects.name2': 'Nome do Projeto 2',
    'projects.name3': 'Nome do Projeto 3',
    'projects.desc1': 'Breve descrição do projeto: qual problema ele resolve, para quem é e o que faz dele interessante. Duas ou três frases já bastam.',
    'projects.desc2': 'Breve descrição do projeto: qual problema ele resolve, para quem é e o que faz dele interessante. Duas ou três frases já bastam.',
    'projects.desc3': 'Breve descrição do projeto: qual problema ele resolve, para quem é e o que faz dele interessante. Duas ou três frases já bastam.',
    'projects.moreText': 'Mais projetos no',
    'projects.moreLink': 'meu GitHub',
    'formacao.title': 'Formação',
    'formacao.item1Title': 'Sistemas de Informação',
    'formacao.item1Date': '2023 — 2028 (cursando)',
    'formacao.item1Org': 'Nome da Universidade',
    'formacao.item1B1': 'Cursando com foco em desenvolvimento de software e boas práticas de engenharia.',
    'formacao.item1B2': 'Interesse particular por hardware, infraestrutura e otimização de sistemas.',
    'formacao.item2Title': 'Técnico em Agronegócio',
    'formacao.item2Org': 'Nome da Instituição',
    'formacao.item2B1': 'Formação técnica que desenvolveu disciplina, visão de processos e trabalho em equipe.',
    'contact.title': 'Contato',
    'contact.heading': 'Vamos trabalhar juntos?',
    'contact.body': 'Estou em busca de estágio ou de uma primeira oportunidade — no Brasil ou no exterior. Me manda uma mensagem, respondo o mais rápido possível.',
    'contact.lattes': 'Currículo Lattes',
    'contact.formName': 'Nome',
    'contact.formEmail': 'E-mail',
    'contact.formMessage': 'Mensagem',
    'contact.namePlaceholder': 'Seu nome',
    'contact.messagePlaceholder': 'Sua mensagem...',
    'contact.submit': 'Enviar mensagem',
    'contact.configureNote': 'Configure o endpoint do formulário (ex: Formspree, EmailJS) em action="" no HTML para receber mensagens.',
    'contact.sending': 'Enviando...',
    'footer.made': 'Feito com',
    'footer.by': 'por',
  },
  en: {
    'meta.title': 'Tiago — Information Systems Student',
    'meta.description': "Tiago's portfolio, Information Systems student looking for opportunities abroad.",
    'nav.sobre': 'About',
    'nav.projetos': 'Projects',
    'nav.formacao': 'Education',
    'nav.contato': 'Contact',
    'nav.cta': "Let's talk",
    'aria.theme': 'Toggle light/dark theme',
    'aria.lang': 'Change language',
    'aria.menu': 'Open menu',
    'aria.github': 'GitHub',
    'aria.linkedin': 'LinkedIn',
    'aria.email': 'Email',
    'aria.lattes': 'Lattes Curriculum (Brazilian academic CV)',
    'aria.repo': 'GitHub repository',
    'aria.demo': 'View live demo',
    'aria.backTop': 'Back to top',
    'hero.eyebrow': "Hi, I'm",
    'hero.rolePrefix': "I'm ",
    'hero.desc': 'Information Systems student passionate about turning ideas into software — and about understanding the hardware running underneath it. Looking for my first international opportunity in tech.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaCv': 'Download CV',
    'hero.scroll': 'scroll to explore',
    'hero.roles': [
      'Information Systems Student',
      'Future Software Developer',
      'Passionate about Hardware & Software',
      'Seeking Opportunities Abroad',
    ],
    'code.nome': 'name',
    'code.foco': 'focus',
    'code.focoValue': 'hardware + software',
    'code.disponivel': 'available',
    'about.title': 'About me',
    'about.p1': "I'm an Information Systems student, expected to graduate in 2028. Naturally curious, I like understanding how things work under the hood — from code down to the machine that runs it.",
    'about.p2': 'I have a special interest in computer hardware: I enjoy building and optimizing computers, and understanding processors, graphics cards and how each part impacts performance. On the software side, I have been studying programming with a focus on web development and best practices.',
    'about.p3': 'Before college, I completed a technical degree in Agribusiness (2021–2023) — a different path that taught me discipline and a process-driven mindset. My goal is to find an opportunity to work abroad and grow as a technology professional.',
    'about.factLocationLabel': 'Location',
    'about.factLocationValue': 'Your City, Brazil',
    'about.factFormacaoLabel': 'Education',
    'about.factFormacaoValue': 'Information Systems — in progress (2023–2028)',
    'about.factDispLabel': 'Availability',
    'about.factDispValue': 'Open to opportunities abroad',
    'about.h1Label': 'expected graduation',
    'about.h2Label': 'technologies studied',
    'about.h3Label': 'academic backgrounds',
    'about.h4Label': '% committed to learning',
    'skills.title': 'Skills & Technologies',
    'skills.backend': 'Back-end & Languages',
    'skills.data': 'Data & BI',
    'skills.tools': 'Tools & Infra',
    'skills.languages': 'Languages',
    'skills.bestPractices': 'Best Practices',
    'skills.practice1': 'Automated testing',
    'skills.practice2': 'Agile methodologies',
    'skills.practice3': 'Accessibility',
    'skills.levelTemplate': 'Level: {n} of 5',
    'projects.title': 'Featured projects',
    'projects.name1': 'Project Name 1',
    'projects.name2': 'Project Name 2',
    'projects.name3': 'Project Name 3',
    'projects.desc1': 'Short project description: what problem it solves, who it is for, and what makes it interesting. Two or three sentences are enough.',
    'projects.desc2': 'Short project description: what problem it solves, who it is for, and what makes it interesting. Two or three sentences are enough.',
    'projects.desc3': 'Short project description: what problem it solves, who it is for, and what makes it interesting. Two or three sentences are enough.',
    'projects.moreText': 'More projects on',
    'projects.moreLink': 'my GitHub',
    'formacao.title': 'Education',
    'formacao.item1Title': 'Information Systems',
    'formacao.item1Date': '2023 — 2028 (in progress)',
    'formacao.item1Org': 'University Name',
    'formacao.item1B1': 'Studying with a focus on software development and engineering best practices.',
    'formacao.item1B2': 'Particular interest in hardware, infrastructure and systems optimization.',
    'formacao.item2Title': 'Technical Degree in Agribusiness',
    'formacao.item2Org': 'Institution Name',
    'formacao.item2B1': 'Technical education that built discipline, a process-oriented mindset and teamwork.',
    'contact.title': 'Contact',
    'contact.heading': "Let's work together?",
    'contact.body': "I'm looking for an internship or a first opportunity — in Brazil or abroad. Send me a message, I reply as fast as I can.",
    'contact.lattes': 'Lattes Curriculum',
    'contact.formName': 'Name',
    'contact.formEmail': 'Email',
    'contact.formMessage': 'Message',
    'contact.namePlaceholder': 'Your name',
    'contact.messagePlaceholder': 'Your message...',
    'contact.submit': 'Send message',
    'contact.configureNote': 'Set up the form endpoint (e.g. Formspree, EmailJS) in action="" in the HTML to receive messages.',
    'contact.sending': 'Sending...',
    'footer.made': 'Made with',
    'footer.by': 'by',
  },
};

// ==========================================================================
// Skills: technology logos + proficiency stars (1-5)
// Edit `level` (0-5) for each skill to reflect your own proficiency.
// `icon` uses a Simple Icons slug (https://simpleicons.org) and is loaded
// from a CDN; `badge` is a short text shown instead, for skills with no
// single brand logo (languages, general topics).
// ==========================================================================
const SKILLS = {
  frontend: [
    { name: 'HTML5', icon: 'html5', level: 5 },
    { name: 'CSS3', icon: 'css3', level: 5 },
    { name: 'JavaScript', icon: 'javascript', level: 4 },
    { name: 'React', icon: 'react', level: 3 },
  ],
  backend: [
    { name: 'Node.js', icon: 'nodedotjs', level: 3 },
    { name: 'Python', icon: 'python', level: 5 },
    { name: 'C', icon: 'c', level: 5 },
    { name: 'Java', icon: 'openjdk', level: 3 },
  ],
  data: [
    { name: 'PostgreSQL', icon: 'postgresql', level: 3 },
    { name: 'MongoDB', icon: 'mongodb', level: 3 },
    { name: 'MySQL', icon: 'mysql', level: 3 },
    { name: 'BI', badge: 'BI', level: 2 },
  ],
  tools: [
    { name: 'Git', icon: 'git', level: 5 },
    { name: 'GitHub', icon: 'github', level: 5 },
    { name: 'Docker', icon: 'docker', level: 1 },
    { name: 'Linux', icon: 'linux', level: 5 },
    { name: 'Redes', badge: 'NET', level: 4 },
  ],
  languages: [
    { name: 'Português', badge: 'PT', level: 5 },
    { name: 'English', badge: 'EN', level: 3 },
  ],
};

function starsMarkup(level) {
  let markup = '';
  for (let i = 1; i <= 5; i++) {
    markup += `<svg class="star${i <= level ? ' filled' : ''}"><use href="#star-icon"></use></svg>`;
  }
  return markup;
}

function skillIconMarkup(skill) {
  if (skill.badge) {
    return `<span class="skill-badge">${skill.badge}</span>`;
  }
  return `<img src="https://cdn.simpleicons.org/${skill.icon}" alt="${skill.name}" loading="lazy" onerror="this.parentElement.style.display='none'" />`;
}

function renderSkills(lang) {
  const levelTemplate = TRANSLATIONS[lang]['skills.levelTemplate'];
  Object.keys(SKILLS).forEach((group) => {
    const container = document.querySelector(`[data-skill-group="${group}"]`);
    if (!container) return;

    container.innerHTML = SKILLS[group]
      .map((skill) => {
        const label = levelTemplate.replace('{n}', skill.level);
        return `
        <div class="skill-card">
          <div class="skill-icon">${skillIconMarkup(skill)}</div>
          <span class="skill-name">${skill.name}</span>
          <div class="skill-stars" role="img" aria-label="${label}">${starsMarkup(skill.level)}</div>
        </div>`;
      })
      .join('');
  });
}

// ==========================================================================
// Typed role text in the hero (language-aware)
// ==========================================================================
const typedText = (function createTypedText() {
  const el = document.getElementById('typed');
  let roles = [];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timer = null;

  function tick() {
    if (!el || !roles.length) return;
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        timer = setTimeout(tick, 1600);
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

    timer = setTimeout(tick, deleting ? 40 : 80);
  }

  return {
    restart(lang) {
      if (!el) return;
      clearTimeout(timer);
      roles = TRANSLATIONS[lang]['hero.roles'];
      roleIndex = 0;
      charIndex = 0;
      deleting = false;
      el.textContent = '';
      tick();
    },
  };
})();

// ==========================================================================
// i18n: apply a language across the page
// ==========================================================================
let currentLang = 'pt';

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;

  document.body.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key] !== undefined) el.textContent = TRANSLATIONS[lang][key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (TRANSLATIONS[lang][key] !== undefined) el.setAttribute('aria-label', TRANSLATIONS[lang][key]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (TRANSLATIONS[lang][key] !== undefined) el.setAttribute('title', TRANSLATIONS[lang][key]);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang][key] !== undefined) el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
  });

  document.title = TRANSLATIONS[lang]['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', TRANSLATIONS[lang]['meta.description']);

  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  const cvLink = document.getElementById('cvLink');
  if (cvLink) cvLink.setAttribute('href', `assets/cv-${lang}.pdf`);

  renderSkills(lang);
  typedText.restart(lang);
}

(function initLanguage() {
  const stored = localStorage.getItem('lang');
  const browserLang = (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  const initial = stored || browserLang;

  applyLanguage(initial);

  const langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
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

  form.addEventListener('submit', (e) => {
    const action = form.getAttribute('action') || '';
    if (action.includes('your-form-id')) {
      e.preventDefault();
      note.textContent = TRANSLATIONS[currentLang]['contact.configureNote'];
      return;
    }
    note.textContent = TRANSLATIONS[currentLang]['contact.sending'];
  });
})();

// ==========================================================================
// Footer year
// ==========================================================================
document.getElementById('year').textContent = new Date().getFullYear();
