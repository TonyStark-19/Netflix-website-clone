// js logic for FAQs
document.addEventListener("DOMContentLoaded", function () {
    const questionBoxes = document.querySelectorAll(".question-wrap");

    questionBoxes.forEach(questionBox => {
        const plusIcon = questionBox.querySelector("#plus-icon");
        const answer = questionBox.querySelector(".answer");

        questionBox.addEventListener("click", () => {
            answer.classList.toggle("hidden");
            plusIcon.classList.toggle("active");
        });
    })
})

// js logic for top 10 movies
const imageWrap = document.querySelector('.image-wrap');
const scrollRightBtn = document.querySelector('.scroll-icon:last-of-type');
const scrollLeftBtn = document.getElementById('small-icon-left');

// Scroll amount (you can tweak this as needed)
const scrollAmount = 1200;

// Scroll to the right
scrollRightBtn.addEventListener('click', () => {
    imageWrap.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Scroll to the left
scrollLeftBtn.addEventListener('click', () => {
    imageWrap.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Show/hide scroll buttons based on scroll position
imageWrap.addEventListener('scroll', () => {
    const maxScrollLeft = imageWrap.scrollWidth - imageWrap.clientWidth;

    // Show left button if not at the beginning
    if (imageWrap.scrollLeft > 0) {
        scrollLeftBtn.classList.remove('hidden');
    } else {
        scrollLeftBtn.classList.add('hidden');
    }

    // Hide right button if reached the end
    if (imageWrap.scrollLeft >= maxScrollLeft - 1) {
        scrollRightBtn.classList.add('hidden');
    } else {
        scrollRightBtn.classList.remove('hidden');
    }
});

// Initial check (in case the user loads the page halfway scrolled)
window.addEventListener('load', () => {
    const event = new Event('scroll');
    imageWrap.dispatchEvent(event);
});