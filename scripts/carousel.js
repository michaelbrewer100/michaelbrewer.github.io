var images = Array.from(document.getElementById('slideshow').children);
images[0].classList.add('active');
setInterval(function() {
	let active = 0;
	let next;
	images.forEach(function(x, i) {
		if (x.classList.contains('active')) {
			active = i;
			if (i == images.length-1) {
				next = 0;
			} else {
				next = i + 1;
			}
		}
	});
	images[active].classList.replace('active', 'deactive');
	images[next].classList.toggle('active');
	setTimeout(function() {
		images[active].classList.remove('deactive');
	}, 1000);
}, 4000);

