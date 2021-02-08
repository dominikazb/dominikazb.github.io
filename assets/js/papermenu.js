var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


var paperMenu = {
	$window: $('#paper-window'),
	$paperFront: $('#paper-front'),
	$hamburger: $('.hamburger'),
	offset: 1800,
	pageHeight: $('#paper-front').outerHeight(),

	open: function() {
		this.$window.addClass('tilt');
		this.$hamburger.off('click');
		$('#container, .hamburger').on('click', this.close.bind(this));
		this.hamburgerFix(true);
		console.log('opening...');
	},
	close: function() {
		this.$window.removeClass('tilt');
		$('#container, .hamburger').off('click');
		this.$hamburger.on('click', this.open.bind(this));
		this.hamburgerFix(false);
		console.log('closing...');
	},
	updateTransformOrigin: function() {
		scrollTop = this.$window.scrollTop();
		equation = (scrollTop + this.offset) / this.pageHeight * 100;
		this.$paperFront.css('transform-origin', 'center ' + equation + '%');
	},
	//hamburger icon fix to keep its position
	hamburgerFix: function(opening) {
			if(opening) {
				$('.hamburger').css({
					position: 'absolute',
					top: this.$window.scrollTop() + 30 + 'px'
				});
			} else {
				setTimeout(function() {
					$('.hamburger').css({
						position: 'fixed',
						top: '30px'
					});
				}, 300);
			}
		},
	bindEvents: function() {
		this.$hamburger.on('click', this.open.bind(this));
		$('.close').on('click', this.close.bind(this));
		this.$window.on('scroll', this.updateTransformOrigin.bind(this));
	},
	init: function() {
		this.bindEvents();
		this.updateTransformOrigin();
	},
};

paperMenu.init();
