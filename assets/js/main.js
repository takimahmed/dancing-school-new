// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => mobileMenu.classList.add('open'));
closeBtn?.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Schedule / tab toggles (visual only)
document.querySelectorAll('.sched-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const parent = tab.parentElement;
    parent.querySelectorAll('.sched-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Filter chips — each group toggles its own active state
document.querySelectorAll('.filter-group').forEach(group => {
  group.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      // Visual filter — fade out cards not matching the filter value
      const filter = chip.dataset.filter;
      const target = chip.dataset.target;
      if (!target) return;
      const cards = document.querySelectorAll(`[data-${target}]`);
      cards.forEach(card => {
        if (!filter || filter === 'all' || card.dataset[target]?.split(' ').includes(filter)) {
          card.style.display = '';
          requestAnimationFrame(() => { card.style.opacity = ''; card.style.transform = ''; });
        } else {
          card.style.opacity = '0.15';
          card.style.transform = 'scale(0.98)';
        }
      });
    });
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
