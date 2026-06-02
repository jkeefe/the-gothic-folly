// The Gothic Folly — site script

function handleSubmit(event, type) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));

  const modal = document.getElementById('success-modal');
  const title = document.getElementById('modal-title');
  const message = document.getElementById('modal-message');

  if (type === 'donate') {
    const amount = data.amount === 'custom' ? `$${data.custom_amount}` : `$${data.amount}`;
    title.textContent = 'Thank you, ' + (data.name.split(' ')[0] || 'friend') + '!';
    message.textContent = `We've noted your interest in donating ${amount}. We'll be in touch with payment details soon. Your support means the world to this project.`;
  } else {
    title.textContent = 'Welcome to the crew, ' + (data.name.split(' ')[0] || 'friend') + '!';
    message.textContent = "We've got your info and we'll be in touch. Get ready to build something incredible.";
  }

  modal.style.display = 'flex';
  form.reset();
}

function closeModal() {
  document.getElementById('success-modal').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('success-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Lightbox zoom for gallery images
function openLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = alt;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.gallery-img.zoomable').forEach(function(img) {
    img.addEventListener('click', function() {
      openLightbox(this.src, this.alt);
    });
  });

  const lb = document.getElementById('lightbox');
  lb.addEventListener('click', function(e) {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
});

// Smooth scroll for anchor buttons that go to forms
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
