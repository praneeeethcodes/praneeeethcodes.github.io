// Basic dynamic data for projects & skills. Edit to match real content.
const projects = [
  {
    title: 'AI Chatbot',
    description: 'Conversational AI bot built with NLP and transformers.',
  code: 'https://github.com/praneeeethcodes/ai-chatbot',
  demo: 'https://praneeeethcodes.github.io/ai-chatbot/'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio hosted on GitHub Pages with semantic HTML & CSS.',
  code: 'https://github.com/praneeeethcodes/portfolio',
  demo: 'https://praneeeethcodes.github.io/portfolio/'
  },
  {
    title: 'Data Viz Dashboard',
    description: 'Interactive dashboard with charts & REST API backend.',
  code: 'https://github.com/praneeeethcodes/data-viz-dashboard',
  demo: 'https://praneeeethcodes.github.io/data-viz-dashboard/'
  }
];

const skills = [
  'Python','TensorFlow','PyTorch','Scikit-Learn','Pandas','NumPy','Data Viz','REST APIs','Node.js','React','Git','CI/CD','Docker','Linux','SQL'
];

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML = projects.map(p => `
    <article class="project-card" tabindex="0">
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-links">
        <a class="btn primary" href="${p.demo}" target="_blank" rel="noopener">Live</a>
        <a class="btn" href="${p.code}" target="_blank" rel="noopener">Code</a>
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const list = document.getElementById('skillsList');
  if(!list) return;
  list.innerHTML = skills.map(s => `<li>${s}</li>`).join('');
}

function updateYear() {
  const y = document.getElementById('footerYear');
  if(!y) return;
  y.textContent = `© ${new Date().getFullYear()} Praneeth. Built with ❤️.`; 
}

function init() {
  renderProjects();
  renderSkills();
  updateYear();
  // Basic entrance animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', init);
