let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const totalSlides = dots.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.marginLeft = -100 * currentIndex + '%';
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index);
}

function autoSlide() {
    currentIndex++;
    showSlide(currentIndex);
}


setInterval(autoSlide, 4000);

function ClosePopupOne(id)
{
    popup = document.getElementById(id);

    if (popup.style.display == "block")
    {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

let dresses = [
    ["Clothes/1/1.png", "Clothes/1/2.png", "Clothes/1/3.png"],
    ["Clothes/2/1.jpeg", "Clothes/2/2.jpeg", "Clothes/2/3.jpeg"],
    ["Clothes/3/1.png", "Clothes/3/2.png", "Clothes/3/3.png"],
    ["Clothes/4/1.png", "Clothes/4/2.png", "Clothes/4/3.png"],
    [ "Clothes/5/1.png", "Clothes/5/2.png", "Clothes/5/3.png"],
    ["Clothes/6/1.png", "Clothes/6/2.png", "Clothes/6/3.png"],
    ["Clothes/7/1.png", "Clothes/7/2.png", "Clothes/7/3.png"],
    ["Clothes/8/1.png", "Clothes/8/2.png", "Clothes/8/3.png"],
    ["Clothes/9/1.jpeg", "Clothes/9/2.jpeg", "Clothes/9/3.jpeg", "Clothes/9/4.jpeg", "Clothes/9/5.jpeg"],
    ["Clothes/10/1.jpeg", "Clothes/10/2.jpeg", "Clothes/10/3.jpeg", "Clothes/10/4.jpeg"],
    ["Clothes/11/1.jpeg", "Clothes/11/2.jpeg", "Clothes/11/3.jpeg"]
]
let current = 0;

function ChangeDress(number, id, clicked)
{
    dress = document.getElementById(id);

    if (clicked == 0)
    {
        if (current > 0)
        {
            current--;
        }
        else 
        {
            current = dresses[number].length - 1;
        }
    }
    else if (clicked == 1)
    {
        if (current < dresses[number].length - 1)
        {
            current++;
        }
        else 
        {
            current = 0;
        }
    }
    dress.src = dresses[number][current];
}