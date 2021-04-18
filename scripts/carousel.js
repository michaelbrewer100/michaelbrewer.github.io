var project = Array.from(document.getElementById('slideshow').children);
project[0].classList.add('active');
setInterval(function() {
	let active = 0;
	let next;
	project.forEach(function(x, i) {
		if (x.classList.contains('active')) {
			active = i;
			if (i == project.length-1) {
				next = 0;
			} else {
				next = i + 1;
			}
		}
	});
	project[active].classList.replace('active', 'deactive');
	project[next].classList.toggle('active');
	setTimeout(function() {
		project[active].classList.remove('deactive');
	}, 1000);
}, 4000);
console.log('hello')
