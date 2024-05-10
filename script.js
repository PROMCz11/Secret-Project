const animatedGridBoxes = document.querySelectorAll('.animated-grid .box');
// Animating the box grid
const minDelay = 0;
const maxDelay = 5000;
animatedGridBoxes.forEach(box => {
    box.classList.toggle('glow');
    const classAssignmentDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    box.style.animationDelay = `${classAssignmentDelay}ms`;
    const selectedColor = Math.floor(Math.random() * 16) + 1;
    setTimeout(() => {
        if(selectedColor === 1 || selectedColor === 2) {
            box.classList.add('glow-blue');
        }
        else if(selectedColor === 3 || selectedColor === 4) {
            box.classList.add('glow-green');
        }
        else if(selectedColor === 5 || selectedColor === 6) {
            box.classList.add('glow-orange');
        }
        else if(selectedColor === 7) {
            box.classList.add('glow-red');
        }
    }, classAssignmentDelay);
});