{
  // mobile menu
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav.menu');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // label stacked table cells on phones
  for (const t of document.querySelectorAll('table.stack')) {
    const heads = [...t.querySelectorAll('thead th')].map(th => th.textContent);
    for (const tr of t.querySelectorAll('tbody tr')) {
      [...tr.children].forEach((td, i) => td.dataset.l = heads[i] || '');
    }
  }

  // construction cost calculator
  const calc = document.getElementById('calc');
  if (calc) {
    const rates = { basic: 1700, standard: 2400, premium: 3200 };
    const fmt = n => {
      if (n >= 1e7) return '₹' + (n / 1e7).toFixed(2) + ' Cr';
      if (n >= 1e5) return '₹' + (n / 1e5).toFixed(1) + ' lakh';
      return '₹' + n.toLocaleString('en-IN');
    };
    const area = calc.querySelector('#area');
    const floors = calc.querySelector('#floors');
    const run = () => {
      const a = Math.max(0, Number(area.value) || 0);
      const f = Math.max(1, Number(floors.value) || 1);
      const total = a * f;
      calc.querySelector('#built').textContent = total.toLocaleString('en-IN');
      for (const k in rates) calc.querySelector('#c-' + k).textContent = fmt(total * rates[k]);
    };
    area.addEventListener('input', run);
    floors.addEventListener('change', run);
    run();
  }

  // contact form -> WhatsApp message
  const form = document.getElementById('wa-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const text = [
        'Namaste Trimahi,',
        'Name: ' + (d.get('name') || ''),
        'Phone: ' + (d.get('phone') || ''),
        'City: ' + (d.get('city') || ''),
        'Service: ' + (d.get('service') || ''),
        'Details: ' + (d.get('msg') || '')
      ].join('\n');
      const url = 'https://wa.me/919102632666?text=' + encodeURIComponent(text);
      const link = document.getElementById('wa-go');
      link.href = url;
      link.hidden = false;
      try { window.location.href = url; } catch (err) { /* link shown instead */ }
    });
  }
}
