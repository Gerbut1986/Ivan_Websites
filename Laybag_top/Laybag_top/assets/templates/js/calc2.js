var old_price = 0;
var new_price_1 = 59;
var new_price_2 = 79;
var new_price_3 = 2100;
var new_price_4 = 2900;
var price_rem_b = 15;
var price_rem_r = 450;


var old_price_1 = 79;
var old_price_2 = 99;
var old_price_3 = 2400;
var old_price_4 = 2900;

var persent = false;
var disc_val_1b = 9;
var disc_val_2b = 14;
var disc_val_3b = 16.5;
var disc_val_4b = 19;
var disc_val_5b = 33;
var disc_val_1r = 290;
var disc_val_2r = 400;
var disc_val_3r = 480;
var disc_val_4r = 550;

$(document).ready(function(){
    $('.color-btn').on('click', function(){
        var parent = $(this).closest('.colors-item');
        var input = parent.find('input');
        var slide = parent.data('slide') - 1;
        var val = input.val();
        if(val === ''){
            val = 0;
        }
        if($(this).hasClass('color-plus')){
            if(input.val() < 99){
                input.val(parseInt(val) + 1);
            }
        }else{
            if(input.val() > 0){
                input.val(parseInt(val) - 1);
            }
        }

        $('.color-value').removeClass('active');
        $('.color-value', parent).addClass('active');

        $('.products-slider').slick('slickGoTo', slide);

        calc();
    });
	$('label').on('click', function(){
		//tkan = (!!$(this).find('input[name="ttype"]').val()) ? $(this).find('input[name="ttype"]').val() : tkan;
		curr = (!!$(this).find('input[name="curr"]').val()) ? $(this).find('input[name="curr"]').val() : curr;
		calc();
	});
});

function calc(){
    var order_string = "";
    var sum_old = 0;
    var sum_new = 0;
    var old_price = 0;
    var new_price = 0;
    var rez_count = 0;
	if (curr == 'byn'){
		$('.action-bottom').html('<img src="http://nabanane.by/templates/banana/images/sale_ripstop.gif" alt="" title=""><br/>Закажите 2 и более надувных дивана Banana Air Sofa<br/><span>и получите скидку - от 9 руб. до 33 руб. за шт</span>');
	}else{
		$('.action-bottom').html('Закажите 2 и более надувных дивана Banana Air Sofa<br/><span>и получите скидку - от 240 руб. до 1100 руб. за шт</span>');
	}
    $('.colors-item').each(function(){
        var val = $(this).find('input[type="text"]').val();
        if(val === ''){
            val = 0;
        }
        rez_count = rez_count + parseInt(val);
    });

    $('.colors-item').each(function(){
        var val = $(this).find('input').val();
        if(val === ''){
            val = 0;
        }
        var color = $(this).data('color');
        var count = val;
        var type = $(this).closest('.colors-block').data('type');
        switch(type){
            case 'Standart':
				if (curr == 'byn'){
					disc_val_1b = 2; /* 10% */
					disc_val_2b = 4; /* 15.294 */
					disc_val_3b = 6; /* 17.647 */
					disc_val_4b = 8; /* 20 */
					new_price = new_price_1;
					old_price = old_price_1;
				}
				if(curr == 'rub'){
					disc_val_1r = 0;
					disc_val_2r = 100;
					disc_val_3r = 200;
					disc_val_4r = 300;
					new_price = new_price_3;
					old_price = old_price_3;
				}
                break;
            case 'Premium':
				if (curr == 'byn'){
					disc_val_1b = 2; /* 10% */
					disc_val_2b = 4; /* 14,1 до 1 знака посл запятой */
					disc_val_3b = 6; /* 16.6 до 1 знака посл запятой*/
					disc_val_4b = 9; /* 19.1 до 1 знака посл запятой*/
					new_price = new_price_2;
					old_price = old_price_2;
				}
				if(curr == 'rub'){
					disc_val_1r = 290;
					disc_val_2r = 400;
					disc_val_3r = 480;
					disc_val_4r = 550;
					new_price = new_price_4;
					old_price = old_price_4;
				}
				break;
        }
        order_string += color + ": " + count + " шт. Тип: " + type + " ";
        $('[name="order_string"]').val(order_string);
        $('[name="order_count"]').val(rez_count);
        var disc_b = 0;
		var disc_r = 0;
        if(persent){
        }else{
			if(rez_count == 2){
				disc_b = disc_val_1b;
				disc_r = disc_val_1r;
			}
			if(rez_count == 3){
				disc_b = disc_val_2b;
				disc_r = disc_val_2r;
			}
			if(rez_count == 4){
				disc_b = disc_val_3b;
				disc_r = disc_val_3r;
			}
			if(rez_count > 4){
				disc_b = disc_val_4b;
				disc_r = disc_val_4r;
			}
			switch(type){
				case 'Standart':
					if (curr == 'byn'){
						$('.colors-type-item:first .colors-type-new-price span').text(new_price_1-disc_b);
					}
					if(curr == 'rub'){
						$('.colors-type-item:first .colors-type-new-price span').text(new_price_3-disc_r);
					}
					$('.colors-type-item:first .colors-type-old-price span').text(old_price);
					break;
				case 'Premium':
					if (curr == 'byn'){
						$('.colors-type-item:last .colors-type-new-price span').text(new_price_2-disc_b);
					}
					if(curr == 'rub'){
						$('.colors-type-item:last .colors-type-new-price span').text(new_price_4-disc_r);
					}
					$('.colors-type-item:last .colors-type-old-price span').text(old_price);
					break;
			}

            sum_old = sum_old + old_price * count;
			if (curr == 'byn'){
				sum_new = sum_new + (new_price - disc_b) * count;
			}
			if(curr == 'rub'){
				sum_new = sum_new + (new_price - disc_r) * count;
			}
        }
        if(sum_new === 0){
            $('[name="order_string"]').val('Не выбрано количество. Цвет: ' + $('.color-value.active').attr('title'));
            $('.price-block').removeClass('active');
        }else{
            $('.price-block').addClass('active');
        }

        if(rez_count > 1){
            $('.old-price').addClass('shown');
            $('.old-price span').text(sum_old);
        }else{
            $('.old-price').removeClass('shown');
            if(rez_count  === 0){
                $('.price-block').removeClass('active');
            }else{
                $('.price-block').addClass('active');
            }
        }
	});
	if (curr == 'byn'){
		$('.rem_price span').text(price_rem_b);
		if($('.rem_price input').prop('checked')){
			order_string += 'В стоимость включен ремкомплект';
			sum_new += price_rem_b;
		}
	}
	if(curr == 'rub'){
		$('.rem_price span').text(price_rem_r);
		if($('.rem_price input').prop('checked')){
			order_string += 'В стоимость включен ремкомплект';
			sum_new += price_rem_r;
		}
	}
	$('.new-price span').text(sum_new);
    $('[name="order_price"]').val(sum_new);
}