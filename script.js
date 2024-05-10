const animatedGridBoxes = document.querySelectorAll('.animated-grid .box');

const min = 0;
const max = 5000;
// const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

animatedGridBoxes.forEach(box => {
    box.classList.toggle('glow');
    const classAssignmentDelay = Math.floor(Math.random() * (max - min + 1)) + min;
    box.style.animationDelay = `${classAssignmentDelay}ms`;
    const selectedColor = Math.floor(Math.random() * 8) + 1;
    setTimeout(() => {
        if(selectedColor === 1) {
            box.classList.add('glow-blue');
        }
        else if(selectedColor === 2) {
            box.classList.add('glow-green');
        }
        else if(selectedColor === 3) {
            box.classList.add('glow-orange');
        }
        else {
            box.classList.add('glow-red');
        }
    }, classAssignmentDelay);
})