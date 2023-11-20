$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	


function show_all_projects(){
	let show_all = document.getElementById('hidden-projects')
	show_all.style.display = "block";
	show_all.classList.add("isotope")
	document.getElementById("show_all").style.display = "none";
	document.getElementById("hide_all").style.display = "block";
}

function hide_all_projects() {
	let hide_all = document.getElementsByClassName("hide-projects")[0]
	hide_all.style.display = "none";
	hide_all.classList.remove("isotope")
	document.getElementById("show_all").style.display = "block";
	document.getElementById("hide_all").style.display = "none";
}

function check_fields() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("comment").value;

	let error_msg = document.getElementById("error-msg")
	let submit_button = document.getElementsByClassName("contact-btn")[0]

	if(name === "" || name === null) {
		error_msg.style.display = "block";
		error_msg.innerText = "Name is Required."
	}

	else if(email === "" || email === null) {
		error_msg.style.display = "block";
		error_msg.innerText = "Email is Required."
	}

	else if(message === "" || message === null) {
		error_msg.style.display = "block";
		error_msg.innerText = "Message is Required."
	}

	else if ((name !== "" || name !== null) && (email !== "" || email !== null) && (message !== "" || message !== null)) {
		error_msg.innerText = "Successfully submitted."
		error_msg.style.display = "block";
	}

	else {
		error_msg.style.display = "none";
	}
}