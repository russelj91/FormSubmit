				var lastScrollTop;
						navbar = document.getElementById('navbar');
						window.addEventListener('scroll',function(){
						var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
						if(scrollTop > lastScrollTop){
						navbar.style.top='-80px';
						}
						else{
						navbar.style.top='0';

						}
						lastScrollTop = scrollTop;
				});


				var welcome = document.getElementById('welcome');

				function fadeOutOnScroll(element) {
					if (!element) {
						return;
						}
						
							var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
							var elementHeight = element.offsetHeight;
							var scrollTop = document.documentElement.scrollTop;
							
							var opacity = 1;
							
							if (scrollTop > distanceToTop) {
								opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
							}
							
							if (opacity >= 0) {
								element.style.opacity = opacity;
						}
				}

				function scrollHandler() {
					fadeOutOnScroll(welcome);
				}

				window.addEventListener('scroll', scrollHandler);




				window.addEventListener('scroll', reveal);

				function reveal(){
					var reveals = document.querySelectorAll('.reveal');

						for(var i = 0; i < reveals.length; i++){

							var windowheight = window.innerHeight;
							var revealtop = reveals[i].getBoundingClientRect().top;
							var revealpoint = 150;

							if(revealtop < windowheight - revealpoint){
								reveals[i].classList.add('active');
							}
						
						}
				}




        

       

