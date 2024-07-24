
    let counts = setInterval(updated,12);
    let upto = 0;
    function updated() {
        let count = document.getElementById("counter");
        count.innerHTML = ++upto;
        if (upto === 200) {
            clearInterval(counts);
        }
    }

    let counts2 = setInterval(updated2,9);
    let upto2 = 0;
    function updated2() {
        let count = document.getElementById("counter2");
        count.innerHTML = ++upto2;
        if (upto2 === 300) {
            clearInterval(counts2);
        }
    }
    

    
        function toggleMenu() {
            var navList = document.querySelector('.nav-list');
            navList.classList.toggle('nav-list-active');
        }
    
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.slider-prev');
        const nextButton = document.querySelector('.slider-next');
        let currentIndex = 0;
        const totalSlides = slides.length;
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }
    
        prevButton.addEventListener('click', () => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            slides[currentIndex].classList.add('active');
        });
    
        nextButton.addEventListener('click', () => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalSlides;
            slides[currentIndex].classList.add('active');
        });
    
        
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalSlides;
            slides[currentIndex].classList.add('active');
        }, 3000);
     

