let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// ESTILO DE SCROW

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.hidden');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect();
      // Se o elemento estiver visível na janela de visualização
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('show');
      } else if (window.pageYOffset < 50) { // Se o usuário retornou perto do início da página
        element.classList.remove('show');
      }
    }
  });


// HEADER

window.addEventListener('scroll', function() {
  var header = document.getElementById('meuHeaderr');
  if (window.scrollY > 50) {
      header.classList.add('header-fixed');
  } else {
      header.classList.remove('header-fixed');
  }
});

// SETA QUE DIVIDE
document.addEventListener('DOMContentLoaded', function () {
  const chevron = document.querySelector('.chevron-down');

  setTimeout(() => {
      chevron.style.opacity = '1';
      chevron.style.animation = 'bounce 1.5s infinite';
  }, 1000);

  window.addEventListener('scroll', function () {

      if (window.scrollY > window.innerHeight * 0.1) {
          chevron.style.opacity = '0';
          chevron.style.animation = 'none';
      } else {
          chevron.style.opacity = '1';
          chevron.style.animation = 'bounce 2s infinite';
      }
  });
});

// APARECER FOOTER
document.addEventListener('DOMContentLoaded', function () {
  const chevron = document.querySelector('.footer');

  setTimeout(() => {
      chevron.style.opacity = '1';
      chevron.style.animation = 'flutuar';
  }, 1000);

});


// PARTICULAS

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 150,
          "density": {
              "enable": true,
              "value_area": 1050
          }
      },
      "color": {
          "value": "#fafafa"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#101010"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#fafafa",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "grab"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 140,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);




  