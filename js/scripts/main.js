var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            direction: 'horizontal',
        },
        1150: {
            direction: 'vertical'
        }
    }
});

const progressSlide = document.querySelector('.js-progress')

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    on: {
        init: function() {
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('animate');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionStart: function() {
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionEnd: function() {
            progressSlide.classList.add('animate');
        }
    }
});

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (e) => {
        e.preventDefault();

        allFilters.forEach(item => {
            item.classList.remove('active');
        })

       tabPane.forEach(item => {
            item.classList.remove('active');
        })

        tabPane[index].classList.add('active');

        filter.classList.add('active');
    })
})

const modal = document.querySelector('.js-open-modal');
const closeModal = document.querySelector('.js-close');

modal.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('show-modal');
    document.documentElement.classList.remove('menu-opened');
})

closeModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('show-modal');

})

const btnMenu = document.querySelectorAll('.js-btn-tab');
const MenuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        MenuSite.forEach(itemMenu => {
            itemMenu.classList.remove('active');
            itemMenu.addEventListener('mouseleave', () => { 
                itemMenu.classList.remove('active');
                btnMenu.forEach(itemBtn => {
                    itemBtn.classList.remove('active');
                })
            });
        })

        btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active');
        })

        btn.classList.add('active');

        MenuSite[index].classList.add('active');

        document.documentElement.classList.remove('menu-opened');
    })


})

const Btnmenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMenuMobile() {
  document.documentElement.classList.add('menu-opened');
}

function closeMenuMobile() {
  document.documentElement.classList.remove('menu-opened');
}







Btnmenu.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', closeMenuMobile);

const linksSection = document.querySelectorAll('.js-nav li a');

function scrollToSection(e) {
  e.preventDefault();
  
  const href = e.currentTarget.getAttribute('href');
  
  const section = document.querySelector(href);

  const initPosition = section.offsetTop;

  document.documentElement.classList.remove('menu-opened');

  window.scrollTo({
    top: initPosition - 80,
    behavior: 'smooth'
  })
}
