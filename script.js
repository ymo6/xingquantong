function plusSlides(n, containerId) {
            const container = document.getElementById(containerId);
            const slides = container.getElementsByClassName("mySlides");
            let activeIndex = 0;

            for (let i = 0; i < slides.length; i++) {
                if (slides[i].style.display !== "none") {
                    activeIndex = i;
                    slides[i].style.display = "none";
                    break;
                }
            }

            let nextIndex = activeIndex + n;
            if (nextIndex >= slides.length) { nextIndex = 0; }
            if (nextIndex < 0) { nextIndex = slides.length - 1; }

            slides[nextIndex].style.display = "block";
        }