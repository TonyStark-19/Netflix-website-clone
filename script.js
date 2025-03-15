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