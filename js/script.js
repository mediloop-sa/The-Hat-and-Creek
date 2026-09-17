const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  const field = document.getElementById('lightsField');
  const count = window.innerWidth < 700 ? 26 : 46;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    dot.style.left = (Math.random() * 100) + '%';
    dot.style.top = (8 + Math.random() * 48) + '%';
    dot.style.animationDelay = (Math.random() * 3.6).toFixed(2) + 's';
    dot.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
    field.appendChild(dot);
  }

  const words = ["Good food", "Good friends", "Great times", "Escape the ordinary", "Est. 15 years", "Hoedspruit"];
  const track = document.getElementById('marqueeTrack');
  let html = "";
  for (let r = 0; r < 2; r++) { words.forEach(w => { html += '<span>' + w + '<span class="dot"></span></span>'; }); }
  track.innerHTML = html;

  document.getElementById('reserveForm').addEventListener('submit', function(e){
    e.preventDefault();
    const first = document.getElementById('rFirst').value;
    const last = document.getElementById('rLast').value;
    const phone = document.getElementById('rPhone').value;
    const email = document.getElementById('rEmail').value;
    const notes = document.getElementById('rNotes').value;
    const subject = encodeURIComponent('Table Reservation Request — ' + first + ' ' + last);
    const body = encodeURIComponent('Name: ' + first + ' ' + last + '\n' + 'Phone: ' + phone + '\n' + 'Email: ' + email + '\n' + 'Notes: ' + notes);
    window.location.href = 'mailto:cheryl@thehatandcreek.co.za?subject=' + subject + '&body=' + body;
  });

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
