const particleContainer = document.getElementById('particles');
const inkContainer = document.getElementById('ink');
const dirtContainer = document.getElementById('dirt');
const creaseContainer = document.getElementById('creases');

// colors for watercolor stains
const colors = [
  'rgba(255,224,130,0.4)',
  'rgba(210,180,120,0.4)',
  'rgba(255,180,100,0.2)',  // soft orange instead of brick
  'rgba(120, 71, 30, 0)'
];

// create dynamic watercolor particles
for (let i = 0; i < 70; i++) {
  const p = document.createElement('div');
  const size = Math.random() * 60 + 70;
  p.classList.add('particle');
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  const color = colors[Math.floor(Math.random() * colors.length)];
  p.style.background = `radial-gradient(circle, ${color} 0%, transparent 50%)`;
  p.style.top = `${Math.random() * 100}%`;
  p.style.left = `${Math.random() * 100}%`;
  p.style.mixBlendMode = 'multiply';
  particleContainer.appendChild(p);

  // animate
  gsap.to(p, {
    x: "+=" + (Math.random() * 90 - 15),
    y: "+=" + (Math.random() * 30 - 15),
    repeat: -1,
    yoyo: true,
    duration: 5 + Math.random() * 5,
    ease: "sine.inOut"
  });
  gsap.to(p, {
    opacity: 0.1 + Math.random() * 0.5,
    repeat: -1,
    yoyo: true,
    duration: 3 + Math.random() * 3
  });
}

// create ink splatters
for (let i = 0; i < 2; i++) {
  const ink = document.createElement('div');
  ink.classList.add('ink-particle');
  const size = Math.random() * 15 + 0;
  ink.style.width = size + 'px';
  ink.style.height = size + 'px';
  ink.style.background = `radial-gradient(circle, rgba(241, 239, 235, 0.35) 0%, transparent 80%)`;
  ink.style.top = Math.random() * 100 + '%';
  ink.style.left = Math.random() * 100 + '%';
  inkContainer.appendChild(ink);

  gsap.to(ink, {
    x: "+=" + (Math.random() * 10 - 5),
    y: "+=" + (Math.random() * 10 - 5),
    repeat: -1,
    yoyo: true,
    duration: 2 + Math.random() * 2
  });
}

// dirt particles bahuta jayada chote hai
for (let i = 0; i < 1000; i++) {
  const dirt = document.createElement('div');
  dirt.classList.add('dirt-particle');
  const size = Math.random() * 5 + 2;
  dirt.style.width = size + 'px';
  dirt.style.height = size + 'px';
  dirt.style.background = 'hsla(0, 0%, 99%, 0.98)';
  dirt.style.top = Math.random() * -10 + '%';
  dirt.style.left = Math.random() * 100 + '%';
  dirt.style.borderRadius = '50%';
  dirtContainer.appendChild(dirt);

  gsap.to(dirt, {
    opacity: 0.1 + Math.random() * 0.3,
    repeat: -1,
    yoyo: true,
    duration: 3 + Math.random() * 3
  });
}

// create subtle crease lines
for (let i = 0; i < 1000; i++) {
  const line = document.createElement('div');
  line.classList.add('crease-line');
  line.style.top = '0';
  line.style.left = Math.random() * 100 + '%';
  line.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
  creaseContainer.appendChild(line);

  gsap.to(line, {
    opacity: 0.9 + Math.random() * 0.1,
    repeat: -1,
    yoyo: true,
    duration:  + Math.random() * 3 // insanely long duration
  });
}




// Video Data
const videos = [
  {src: 'videos/video1.mp4', title: 'People of this country', description: 'Hi I am Rahul Kumar Singh, I am studying in NIT Calicut.'},
  {src: 'videos/video2.mp4', title: 'Truth and Reality', description: 'Nobody cares about you until you care about yourself.'},
  {src: 'videos/video3.mp4', title: 'Everybody watches you', description: 'I try to watch myself but still do what I want.'}
];

const slider = document.getElementById('video-slider');
let currentIndex = 0;
let slides = [];

// Create slides dynamically
videos.forEach(video => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('video-slide-wrapper');

  const videoEl = document.createElement('video');
  videoEl.src = video.src;
  videoEl.classList.add('video-slide');
  videoEl.autoplay = true;
  videoEl.loop = true;
  videoEl.muted = true;

  const info = document.createElement('div');
  info.classList.add('video-info');
  info.innerHTML = `<h3>${video.title}</h3><p>${video.description}</p>`;

  // Append as siblings inside wrapper
  wrapper.appendChild(videoEl);
  wrapper.appendChild(info);

  slider.appendChild(wrapper);
  slides.push(wrapper);
});

// Show slide function
function showSlide(index) {
  slides.forEach((slide, i) => {
    if(i === index){
      slide.classList.add('active');
      gsap.to(slide, {opacity: 1, scale: 1, duration: 0.8});
      slide.querySelector('video').play();
    } else {
      gsap.to(slide, {opacity: 0, scale: 0.95, duration: 0.8, onComplete: () => {
        slide.querySelector('video').pause();
      }});
      slide.classList.remove('active');
    }
  });
}

// Initial slide
showSlide(currentIndex);

// Auto-slide every 8 sec
let slideInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 8000);

// Arrow buttons
document.getElementById('prevBtn').addEventListener('click', () => {
  clearInterval(slideInterval);
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  restartInterval();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  clearInterval(slideInterval);
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  restartInterval();
});

function restartInterval() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 8000);
}






const members = document.querySelectorAll(".member");
  const total = members.length;
  const orbit = document.getElementById("orbit-container");
  const centerImg = document.getElementById("center-img");
  const nameEl = document.getElementById("member-name");
  const posEl = document.getElementById("member-position");
  const infoBox = document.getElementById("member-info");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  let current = 0;

  // Arrange members in circle
  const radius = 60;
  members.forEach((m, i) => {
    const angle = (i / total) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    gsap.set(m, { x, y });
  });

  // Auto rotation animation
  gsap.to(orbit, {
    rotation: 45,
    duration: 15,
    repeat: -1,
    ease: "none",
    transformOrigin: "50% 50%"
  });

  // Function to update center photo (excluding Ayush)
    // Function to show member with name & position
  function showMember(index) {
    if (index === 0) return; // skip Ayush as static center
    const member = members[index];

    gsap.to(centerImg, { opacity: 0, scale: 0.8, duration: 0.3 });
    gsap.to(infoBox, { opacity: 0, y: -10, duration: 0.3 });

    setTimeout(() => {
      centerImg.src = member.src;
      nameEl.textContent = member.dataset.name;
      posEl.textContent = member.dataset.position;

      gsap.to(centerImg, { opacity: 1, scale: 1, duration: 0.5 });
      gsap.to(infoBox, { opacity: 1, y: 0, duration: 0.6 });
    }, 400);
    current = index;
  }

  // Auto change every 4 seconds
  let autoSlide = setInterval(() => {
    let next = (current + 1) % total;
    showMember(next);
  }, 4000);

  nextBtn.addEventListener("click", () => {
    clearInterval(autoSlide);
    let next = (current + 1) % total;
    showMember(next);
    autoSlide = setInterval(() => {
      let nextAuto = (current + 1) % total;
      showMember(nextAuto);
    }, 4000);
  });

  nextBtn.addEventListener("click", () => {
    clearInterval(autoSlide);
    let next = (current + 1) % total;
    if(next === 0) next = 1;
    showMember(next);
    autoSlide = setInterval(() => {
      let nextAuto = (current + 1) % total;
      if(nextAuto === 0) nextAuto = 1;
      showMember(nextAuto);
    }, 3000);
  });

  prevBtn.addEventListener("click", () => {
    clearInterval(autoSlide);
    let prev = (current - 1 + total) % total;
    if(prev === 0) prev = total - 1;
    showMember(prev);
    autoSlide = setInterval(() => {
      let nextAuto = (current + 1) % total;
      if(nextAuto === 0) nextAuto = 1;
      showMember(nextAuto);
    }, 3000);
  });









