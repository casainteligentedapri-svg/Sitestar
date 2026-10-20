document.addEventListener('DOMContentLoaded', () => {

  // Ano no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Header com fundo ao rolar
  const header = document.getElementById('header');
  const backTop = document.getElementById('backTop');

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    if (window.scrollY > 500) {
      backTop.classList.add('show');
    } else {
      backTop.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Menu mobile
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });

  // Botão flutuante do WhatsApp
  const waBtn = document.getElementById('waBtn');
  const waMenu = document.getElementById('waMenu');

  waBtn.addEventListener('click', () => {
    waMenu.classList.toggle('open');
  });

  // Seletores de WhatsApp (header e hero)
  const waPickers = document.querySelectorAll('.wa-picker');

  waPickers.forEach(picker => {
    const trigger = picker.querySelector('.wa-picker__trigger');
    const menu = picker.querySelector('.wa-picker__menu');
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('open');
      document.querySelectorAll('.wa-picker__menu.open').forEach(m => m.classList.remove('open'));
      if (!isOpen) menu.classList.add('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!document.getElementById('waFloat').contains(e.target)) {
      waMenu.classList.remove('open');
    }
    waPickers.forEach(picker => {
      if (!picker.contains(e.target)) {
        picker.querySelector('.wa-picker__menu').classList.remove('open');
      }
    });
  });

  // Animação de revelação ao rolar
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

});
