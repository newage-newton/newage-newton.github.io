document.addEventListener('DOMContentLoaded', init(), false);

function init() {
	setInterval(changeTextColor, 750);
	setTimeout(moveIntroUp, 3000);
}

function moveIntroUp() {
	document.getElementsByClassName('intro')[0].style.top = '10%'
}

function changeTextColor() {
	document.getElementById('my-name').style.color = randomColor();
}

function randomColor() {
	color = '#';
	letter = '0123456789ABCDEF';
	for(i = 0; i < 6; i++) {
		color += letter[Math.floor(Math.random() * 16)];
	}
	return color;
}