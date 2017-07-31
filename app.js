let menu = document.getElementsByClassName('lero-menu');
let header = document.getElementById('lero-header');

for (let i=0; i<menu.length; i++) {
	menu[i].addEventListener('click', function(e) {
		if (!header.classList.contains('menu-active')) {
			this.classList.add("active");
			header.classList.add('menu-active');
		} else {
			this.classList.remove('active');
			header.classList.remove('menu-active');
		}
	})
}

$( window ).resize(function() {
  if ($(window).width() > 992) {
  	$('#lero-header').removeClass('menu-active');
  }
});