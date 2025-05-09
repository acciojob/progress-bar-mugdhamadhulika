//your JS code here. If required.
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;
	if(currentActive > circles.length){
		currentActive = circles.length;
	}
	update();
});

prev.addEventListener('click', () => {
	currentActive--;
	if(currentActive<1){
		currentActive = 1;
	}
	update();
});

function update() {
	circles.forEach((circle, index) => {
		if(index < currentActive){
			circle.classList.add('active');
		}else{
			circle.classList.remove('active');
		}
	});
	const activeCircles = document.querySelectorAll('.circle.active');
	progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';

	prev.disabled = currentActive === 1;
	next.disabled = currentActive === circles.length;
}