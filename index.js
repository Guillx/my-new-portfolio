// TYPE HEADER
new TypeIt('#type1', {
	speed: 120,
	loop: true,
	waitUntilVisible: true,
})
	.type('cocinero', { delay: 300 })
	.pause(350)
	.delete(9)
	.type('programador web', { delay: 300 })
	.pause(350)
	.delete(16)
	.type('diseñador web', { delay: 300 })
	.pause(350)
	.delete(14)
	.type('junior Full Stack', { delay: 300 })
	.pause(350)
	.delete(18)

	.go();

// ANIMACIÓN HEADER CON GSAP
gsap.from('.nav-links', {
	opacity: 0,
	duration: 1,
	delay: 1,
	y: 0,
});

gsap.from('.header-left-side h3', {
	opacity: 0,
	duration: 1,
	delay: 0.5,
	y: -150,
});

gsap.from('.header-left-side h1', {
	opacity: 0,
	duration: 1,
	delay: 0.9,
	y: 80,
});

gsap.from('.header-left-side h4', {
	opacity: 0,
	duration: 1,
	delay: 1.2,
	y: -50,
});

gsap.from('.header-left-side a', {
	opacity: 0,
	duration: 1,
	delay: 1.2,
	x: -300,
});

gsap.from('.img-moji', {
	opacity: 0,
	duration: 1,
	delay: 0.6,
	y: 150,
});

gsap.from('.circle-bg', {
	opacity: 0,
	duration: 1,
	delay: 1.2,
	y: 350,
});

// ANIMACIONES HABILIDADES
gsap.from('.bar-uno', {
	opacity: 0,
	duration: 1,
	delay: 0.1,
	x: 0,
});

gsap.from('.bar-dos', {
	opacity: 0,
	duration: 1,
	delay: 0.17,
	x: 0,
});

gsap.from('.bar-tres', {
	opacity: 0,
	duration: 1,
	delay: 0.24,
	x: 0,
});

gsap.from('.bar-cuatro', {
	opacity: 0,
	duration: 1,
	delay: 0.31,
	x: 0,
});

gsap.from('.bar-cinco', {
	opacity: 0,
	duration: 0.25,
	delay: 0.38,
	x: 0,
});

gsap.from('.bar-seis', {
	opacity: 0,
	duration: 1,
	delay: 0.45,
	x: 0,
});

gsap.from('.habilidad-right', {
	opacity: 0,
	duration: 1,
	delay: 0.3,
	x: 450,
});

// ANIMACIÓN BARRAS HABILIDADES
$('.habilidad-per').each(function () {
	var $this = $(this);
	var per = $this.attr('per');
	$this.css('width', per + '%');
	$({ animatedValue: 0 }).animate(
		{ animatedValue: per },
		{
			duration: 1000,
			step: function () {
				$this.attr(
					'per',
					Math.floor(this.animatedValue) + '%'
				);
			},
			complete: function () {
				$this.attr(
					'per',
					Math.floor(this.animatedValue) + '%'
				);
			},
		}
	);
});

// ANIMACIÓN CÍRCULOS HABILIDADES
$('svg.radial-progress', 'habilidad-per').each(function (
	index,
	value
) {
	$(this).find($('circle.complete')).removeAttr('style');
});

$(window)
	.scroll(function () {
		$('svg.radial-progress').each(function (index, value) {
			// If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
			if (
				$(window).scrollTop() >
					$(this).offset().top -
						$(window).height() * 0.75 &&
				$(window).scrollTop() <
					$(this).offset().top +
						$(this).height() -
						$(window).height() * 0.25
			) {
				// Get percentage of progress
				percent = $(value).data('percentage');
				// Get radius of the svg's circle.complete
				radius = $(this)
					.find($('circle.complete'))
					.attr('r');
				// Get circumference (2πr)
				circumference = 2 * Math.PI * radius;
				// Get stroke-dashoffset value based on the percentage of the circumference
				strokeDashOffset =
					circumference - (percent * circumference) / 100;
				// Transition progress for 1.25 seconds
				$(this)
					.find($('circle.complete'))
					.animate(
						{ 'stroke-dashoffset': strokeDashOffset },
						1250
					);
			}
		});
	})
	.trigger('scroll');
