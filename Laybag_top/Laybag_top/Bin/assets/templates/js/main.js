$(document).ready(function(){
	
         $('div#cart_block').on('click',function(){
        
        console.log('click');
          var tog = $(this).closest('#cart').find('.info-vis');
          if(tog.hasClass('vis')){
              tog.removeClass('vis');
          }
          else {
              tog.addClass('vis'); 
          }
            })
    var country = ($('body').hasClass('Russia')) ? 'Russia' : 'Belarus';
	switch (country) {
		case 'Belarus': 		$('.header .phone').html('<a href="tel:+380685811198" class="footer-phone"><span>+380 (68)</span> 58 111 98</a>');
								$('.footer-phone_wrap').html('<a href="tel:+380685811198" class="footer-phone"><span>+380 (68)</span> 58 111 98</a>');
								$('#how-item-2 .how-item-title').html('<span>Доставка курьером</span> по Украине<br/>Львов - в течении 2 часов;<br/>др. города - 48 часов');
								$('.order .order-form-subtitle').html('получите скидку до 30% <br/>и не платите за доставку');
								$('.action-bottom').html('<img src="http://nabanane.by/templates/banana/images/sale_ripstop.gif" alt="" title=""><br/>Закажите 2 и более надувных дивана Banana Air Sofa<br/><span>- получите скидку от 9 руб. до 33 руб. за шт<br/>и бесплатную доставку</span>');
								$('.footer-address').html('ул. Научная 7д');
								$('#byn').prop("checked", true);
								curr = 'byn'
								break;
		case 'Russia': 			$('.header .phone').html('<a href="tel:+78003501758" class="footer-phone"><span>+7 (800)</span> 350 17 58</a>');
								$('.footer-phone_wrap').html('<a href="tel:+78003501758" class="footer-phone"><span>+7 (800)</span> 350 17 58</a>');
								$('#how-item-2 .how-item-title').html('<span>Доставка курьером</span> по Украине<br/>Львов - в течении 2 часов;<br/>др. города - 48 часов');
								$('.order .order-form-subtitle').html('получите скидку до 30%!<br/>и не платите за доставку*');
								$('.action-bottom').html('Закажите 2 и более надувных дивана Banana Air Sofa<br/><span> - получите скидку от 240 руб. до 1100 руб. за шт<br/>и бесплатную доставку</span>');
								$('.footer-address').html('ул. Научная 7д');
								$('#rub').prop("checked", true);
								curr = 'rub';
								break;
		default: 				$('.header .phone').html('<a href="tel:+380685811198" class="footer-phone"><span>+380 (68)</span> 58 111 98</a>');
								$('#how-item-2 .how-item-title').html('<span>Доставка курьером</span> по Украине<br/>Львов - в течении 2 часов;<br/>др. города - 48 часов');
								$('.order .order-form-subtitle').html('получите скидку до 30% <br/>и не платите за доставку');
								$('.action-bottom').html('<img src="http://nabanane.by/templates/banana/images/sale_ripstop.gif" alt="" title=""><br/>Закажите 2 и более надувных дивана Banana Air Sofa<br/><span>- получите скидку от 9 руб. до 33 руб. за шт<br/>и бесплатную доставку</span>');
								curr = 'byn';
								$('.footer-address').html('ул. Научная 7д');
								$('#byn').prop("checked", true);
								break;
	}
	var new_price = (curr == 'byn') ? 79 : 2400;
	$('.old-price span').text(old_price);
	$('.new-price span').text(new_price);
	if ( $('body').hasClass('bonus') ){
		$('#bonus-modal').fancybox({
			autoSize: true,
			type: 'inline',
			closeBtn: true,
			padding: 0,
			scrolling: 'visible',
			fixed: false,
			autoCenter: false,
			beforeShow: function() {
				$('body').addClass('order-popup');
				$(".fancybox-skin").css("background-color", "transparent");

			},
			afterClose: function() {
				$('body').removeClass('order-popup');
			}
		}).trigger('click');
	}
    $('.scroll').on('click', function(){
        var anchor = $(this).data('scroll');
        var anchor_link = $(anchor).offset().top;
        $('html, body').stop().animate({
            scrollTop : anchor_link +  "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $('.faq-item-header a').on('click', function(){
        var parent = $(this).closest('.faq-item');
        if(parent.hasClass('active')){
            parent.find('.faq-item-answer').slideUp();
            parent.removeClass('active');
        }else{
            $('.faq-item').removeClass('active');
            $('.faq-item-answer').slideUp();
            parent.find('.faq-item-answer').slideDown();
            parent.addClass('active');
        }
    });
    $('.where-slider').slick({
        dots: false,
		autoplay: true,
        prevArrow: '.where-slider-navs .prev-slide',
        nextArrow: '.where-slider-navs .next-slide',
        infinite: true,
        speed: 700,
        draggable: true
    });
    $('.products-slider').slick({
        dots: false,
        prevArrow: '.products-slider-navs .prev-slide',
        nextArrow: '.products-slider-navs .next-slide',
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        draggable: true
    });
    $('.products-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.color-value').removeClass('active');
        $('.colors-item[data-slide="' + (nextSlide + 1) +'"]').find('.color-value').addClass('active');		
    });
    $('.where-slider-links a').on('click', function(){
        if(!$(this).hasClass('active')){
            $('.where-slider-links a').removeClass('active');
            $(this).addClass('active');
            $('.where-slider').slick('slickGoTo', $(this).data('slide'));
        }
    });
    $('.where-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.where-slider-links a').removeClass('active');
        $('.where-slider-links a[data-slide="' + nextSlide + '"]').addClass('active');
    });
    $('.photo-slider').slick({
        dots: false,
        prevArrow: '.photo-slider-navs .prev-slide',
        nextArrow: '.photo-slider-navs .next-slide',
        infinite: true,
        speed: 700,
        draggable: true
    });
    $('.color-value').on('click', function(){
        if(!$(this).hasClass('active')){
            $('.color-value').removeClass('active');
            $(this).addClass('active');
            var parent = $(this).closest('.colors-item');
            var slide = parent.data('slide') - 1;
            $('.products-slider').slick('slickGoTo', slide);
			
			var prod_id = $(this).attr('alt');
			convead('event', 'view_product', {
				product_id: prod_id,
				product_name: 'BANANA air sofa',
				product_url: 'http://promo.nabanane.by/'
			});			
            calc();
        }

    });
    $('.video-link').on('click', function(){
        var video_link = $(this).data('video');
        $('.video-container').html('<iframe width="640" height="479" src="' + video_link + '" frameborder="0" allowfullscreen></iframe>').addClass('shown');
    });
   /* $('.modal-open').fancybox({
        autoSize: true,
        type: 'inline',
        closeBtn: true,
        padding: 0,
        scrolling: 'visible',
        fixed: false,
        autoCenter: false,
        beforeShow: function() {
            $('#order-modal input').removeClass('incorrect');
            $('#order-modal input[type="text"]').val('');
            $('textarea').val('');

            if(this.element.hasClass('order-link')){
                $('#order-modal input[name="from"]').val(this.element.data('from'));
                $('#order-modal .send').text(this.element.data('btn'));
                $('#order-modal .order-form-title').html(this.element.data('title'));
                $('#order-modal .order-form-subtitle').val(this.element.data('subtitle'));

                $('#order-modal form').data('thanks', this.element.data('thanks'));

                $('body').addClass('order-popup');
            }

            if(this.element.hasClass('video-link')){
                var video_link = this.element.data('video');
                $('#video-modal').html('<iframe width="854" height="480" src="' + video_link + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
            }

            $(".fancybox-skin").css("background-color", "transparent");

        },
        afterShow: function(){

        },
        beforeClose: function(){

        },
        afterClose: function() {
            $('#order-modal input[type="text"]').val('');
            $('#video-modal').html("");
            $('body').removeClass('order-popup');
        }
    }).click(function() {
        if (typeof($(this).data('from')) !== 'undefined') {

        }
    });*/
    $('.modal-close, .close-modal').click(function() {
        $.fancybox.close();
        return false;
    });
    $('.send').on('click', function(){
        $(this).parents('form').submit();
    });
    $('form').submit(function() {
        $(this).isCorrectRequest();
        return false;
    });
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
        niceScrollInit();

        $('*[data-appear="fade-in"]').each(function () {

            var appearDelay = $(this).data('appear-delay') || 0;
            var appearDirection = $(this).data('appear-direction') || 'none';

            $(this).css({ opacity: '0', 'visibility': 'hidden' });
            if ($(this).css('position') == 'absolute') {
                switch (appearDirection) {
                    case 'top': $(this).css({ top: -$(this).height() / 2 + 'px' }); break;
                    case 'right': $(this).css({ right: -$(this).width() / 2 + 'px' }); break;
                    case 'bottom': $(this).css({ bottom: -$(this).height() / 2 + 'px' }); break;
                    case 'left': $(this).css({ left: -$(this).width() / 2 + 'px' }); break;
                }
            } else {
                switch(appearDirection) {
                    case 'top': $(this).css({ position: 'relative', top: -$(this).height() / 2 + 'px' }); break;
                    case 'right': $(this).css({ position: 'relative', right: -$(this).width() / 2 + 'px' }); break;
                    case 'bottom': $(this).css({ position: 'relative', bottom: -$(this).height() / 2 + 'px' }); break;
                    case 'left': $(this).css({ position: 'relative', left: -$(this).width() / 2 + 'px' }); break;
                }
            }

            $(this).waypoint(function (direction) {
                $(this).css({ 'visibility': 'visible' });

                if (direction == 'down') {
                    switch (appearDirection) {
                        case 'top': $(this).delay(appearDelay).animate({ 'opacity': 1, 'top': 0 }, 800); break;
                        case 'right': $(this).delay(appearDelay).animate({ 'opacity': 1, 'right': 0 }, 800); break;
                        case 'bottom': $(this).delay(appearDelay).animate({ 'opacity': 1, 'bottom': 0 }, 800); break;
                        case 'left': $(this).delay(appearDelay).animate({ 'opacity': 1, 'left': 0 }, 800); break;
                        default: $(this).delay(appearDelay).animate({ 'opacity': 1 }, 800);
                    }
                    $(this).waypoint('destroy');
                }
            }, {
                offset: function () {
                    switch (appearDirection) {
                        case 'top': return $.waypoints('viewportHeight') - $(this).height(); break;
                        case 'bottom': return $.waypoints('viewportHeight'); break;
                        default: return $.waypoints('viewportHeight') - Math.min($(this).height() / 2, 150); break;
                    }
                }
            });
        });

    }else{
        $('body').addClass('mobile');
    }
    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        },
        openEffect	: 'none',
        closeEffect	: 'none',
        padding: 0
    });
    $(".colors-item input[type='text']").keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
    $(".colors-item input[type='text']").keyup(function (e) {
        $(this).change();
        calc();

    });
    $(".colors-item input[type='text']").change(function () {
        calc();
    });
});
(function($) {
    $.fn.isCorrectRequest = function() {
        this.find('input[type=text]').removeClass('correct incorrect shake');

        var nameInput = $(this).find('[name = name]');
        var telephoneInput = $(this).find('[name = phone]');
        var emailInput = $(this).find('[name = email]');

        nameInput.val($.trim(nameInput.val()));
        telephoneInput.val($.trim(telephoneInput.val()));


        if(telephoneInput.val() != undefined){
            if(telephoneInput.val().length === 0)
            {
                telephoneInput.addClass('incorrect');
                telephoneInput.focus();
                return false;
            }
        }

        var form = $(this);
        var formData = new FormData($(this)[0]);
        var url = String(window.location)+'application2.php';
		
        $.ajax({
            type: "POST",
            url: url,
            data: "name="+nameInput.val()+"&phone="+telephoneInput.val()+"&email="+emailInput.val(),
            cache: false,
            success: function(data)
            {
				console.log(data);
                if(data == 1){
					
					$('#thanks-modal').fancybox({
						autoSize: true,
						type: 'inline',
						closeBtn: true,
						padding: 0,
						scrolling: 'visible',
						fixed: false,
						autoCenter: false,
						beforeShow: function() {
							$('body').addClass('order-popup');
							$(".fancybox-skin").css("background-color", "transparent");

						},
						afterClose: function() {
							$('body').removeClass('order-popup');
						}
					}).trigger('click');
					yaCounter36935950.reachGoal('new_order', {order_price: old_byr,currency: "BYR"}, goalCallback);
					fbq('track', 'Purchase');
				}
            },
            error: function(answer)
            {
                alert('Ошибка отправки данных. Попробуйте еще раз.');
            }
        });
    };
})(jQuery);
function niceScrollInit(){
    $("html").niceScroll({
        scrollspeed: 80,
        mousescrollstep: 65,
        cursorwidth: 10,
        cursorborder: 0,
        cursorcolor: 'rgb(255, 106, 0)',
        cursorborderradius: 2,
        autohidemode: false,
        horizrailenabled: false
    });

    $('html').addClass('no-overflow-y');
}