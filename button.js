			var Body = {
				setBodycolor : function(target, bodycolor) {
					target.style.color = bodycolor;
				},
				setBodyBGcolor : function(target, BGcolor) {
					target.style.backgroundColor = BGcolor;
				}
			}
			var BG_image = {
				day_image : function(target, image) {
					target.style.backgroundImage = "url("+image+")";
					target.style.backgroundSize = "cover"; 
					target.style.backgroundRepeat = "no-repeat";
				},
				night_image : function(target, image) {
					target.style.backgroundImage = "url("+image+")";
					target.style.backgroundSize = "cover"; 
					target.style.backgroundRepeat = "no-repeat";
				}
			}
			var Links = {
				setLinkcolor : function(color) {
					var links = document.querySelectorAll('a');
					var i = 0;
					while(i < links.length) {
					links[i].style.color = color;
					i = i+1;
					//$('a').css('color', color);
					}
				}
			}
			function NightDayControler(self) {
				var target = document.querySelector('body');
				if(self.value == 'day') {
					//Body.setBodyBGcolor(target, 'white');
					BG_image.day_image(target, '4.jpg');
					Body.setBodycolor(target, 'black');
					document.getElementById('h3_tag').style.borderColor = 'black';
					document.getElementById('hr_tag').color = 'black';
					self.value = 'night';
					
					
					Links.setLinkcolor('purple');
				}
				else {
					//Body.setBodyBGcolor(target, 'black');
					BG_image.night_image(target, 'night.jpg');
					Body.setBodycolor(target, 'white');
					document.getElementById('h3_tag').style.borderColor = 'white';
					document.getElementById('hr_tag').color = 'white';
					self.value = 'day';
				
					Links.setLinkcolor('powderblue');
				}
			}