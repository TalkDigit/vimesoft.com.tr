// Main menu mobile
$(function(){
    $('.mobile-menu-icon').click(function(){
        $(".mobile-menu").slideToggle(400);
    });
    $('.mobile-menu-close').click(function(){
        $(".mobile-menu").slideToggle(400);
    });
});


$(".account-edit-text-button").click(function(){
	$(".editable").val("");
	$(this).hide();
	$(".account-edit-completed").show();
})
$(".account-edit-complete").click(function(){
	$(".account-edit-text-button").show();
	$(".account-edit-completed").hide();
})



// SSS content toggle
$(".sss-content-box-title").click(function(){
	$(this).toggleClass("active");
})

$('.sss-content-box-title').click(function(e) {
	e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
	  $this.next().removeClass('show');
	  $this.next().slideUp(350);
  } else {
	  $this.parent().parent().find('.sss-content-box-text').removeClass('show');
	  $this.parent().parent().find('.sss-content-box-text').slideUp(350);
	  $this.next().toggleClass('show');
	  $this.next().slideToggle(350);
  }
});


// Plans Table 
$(".plans-title").click(function(){
	
	$(this).toggleClass("active");
})

$('.plans-title').click(function(e) {
	e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
	  $this.next().removeClass('show');
	  $this.next().slideUp(350);
  } else {
	$this.parent().parent().find('.sss-content-box-text').removeClass('show');
	$this.parent().parent().find('.sss-content-box-text').slideUp(350);
	$this.next().toggleClass('show');
	$this.next().slideToggle(350);
} 
});


// Select Box Special
var   selectricOptions = {
	disableOnMobile: false,
  };
  
  $(function() {
	$('.spe-select select').selectric(selectricOptions);
  });
  
  $('.spe-select select').on('change', function() { // fires when the value changes
	
	 var returnvalue;
		  if($(this).val() !== "") {
			  $(this).closest(".spe-select").find(".check-select-name").addClass("active");
			  returnvalue=false;   
		  } else {
			$(this).closest(".spe-select").find(".check-select-name").removeClass("active");
		  }
		  return returnvalue;
  
});


// Forgot Password Input Change 

$(document).ready(function(){
	$('.forgot-tabs a').click(function(){
		var tab_idx = $(this).attr('data-tabx');

		$('.forgot-tabs a').removeClass('active');
		$('.forgot-box').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_idx).addClass('active');
	})
})


// Tab System all
$(document).ready(function(){
	$('.tab-system .tabs .tabs-item').click(function(){
		var tab_id = $(this).attr('data-item');
		$(this).closest(".tabs").find(".tabs-item").removeClass('active');
		$(this).closest(".tab-system").find('.tab-content').removeClass('active');

		$(this).addClass('active');
		$(this).closest(".tab-system").find("#"+tab_id).addClass('active');
	})
})

// Tab System all
$(document).ready(function(){
	$('.select-tab').change(function(){
		var tab_option = $(this).val();
		

		$(this).closest(".select-tab-system").find('.select-tab-content').removeClass('active');

		$(this).closest(".select-tab-system").find("#"+tab_option).addClass('active');
	})
})

$('.sticky-opener').click(function(e) {
	e.preventDefault();

  var $this = $(this);

  $this.parent().parent().find(".sticky-opener").removeClass("active");

  $this.addClass("active");

  if ($this.next().hasClass('active')) {
	  $this.next().removeClass('active');
	  $this.next().slideUp(350);
	  $this.removeClass('active');
  } else {
	  $this.parent().parent().find('.sticky-opened').removeClass('active');
	  $this.parent().parent().find('.sticky-opened').slideUp(350);
	  $this.next().toggleClass('active');
	  $this.next().slideToggle(350);
  }

});


$(document).ready(function() {
	$('.mobile-menu-burger').click(function() {
	  $('.sticky-menu').toggleClass("show");
	});
});

// Personal Invite
$(document).ready(function() {
    var max_fields      = 99; //maximum input boxes allowed
    var wrapper         = $(".user-invite-items"); //Fields wrapper
    var add_button      = $(".user-invite-icon"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment

			if (x < 3) {

            	$(wrapper).append('<div class="col-lg-6 user-invite-more" id="user-invite-item' + x + '"><div class="user-invite-box d-flex align-items-center"><div class="contact-input-box"> <input type="email" class="form-input"  id="email" name="email[' + x + ']" autocomplete="off" required="required"/> <label for="email">E-posta Adresiniz</label><span class="contact-blue"></span></div><div class="user-remove-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M20.429,10.893H13.357V3.821A1.572,1.572,0,0,0,11.786,2.25H10.214A1.572,1.572,0,0,0,8.643,3.821v7.071H1.571A1.572,1.572,0,0,0,0,12.464v1.571a1.572,1.572,0,0,0,1.571,1.571H8.643v7.071a1.572,1.572,0,0,0,1.571,1.571h1.571a1.572,1.572,0,0,0,1.571-1.571V15.607h7.071A1.572,1.572,0,0,0,22,14.036V12.464A1.572,1.572,0,0,0,20.429,10.893Z" transform="translate(0 -2.25)" fill="#007bff"/></svg></div></div></div>'); // add input boxes.

			} else if (x == 3) {

            	$(wrapper).append('<div class="col-lg-6 user-invite-more" id="user-invite-item' + x + '"><div class="user-invite-box d-flex align-items-center"><div class="contact-input-box"> <input type="email" class="form-input"  id="email" name="email[' + x + ']" autocomplete="off" required="required"/> <label for="email">E-posta Adresiniz</label><span class="contact-blue"></span></div><div class="user-remove-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M20.429,10.893H13.357V3.821A1.572,1.572,0,0,0,11.786,2.25H10.214A1.572,1.572,0,0,0,8.643,3.821v7.071H1.571A1.572,1.572,0,0,0,0,12.464v1.571a1.572,1.572,0,0,0,1.571,1.571H8.643v7.071a1.572,1.572,0,0,0,1.571,1.571h1.571a1.572,1.572,0,0,0,1.571-1.571V15.607h7.071A1.572,1.572,0,0,0,22,14.036V12.464A1.572,1.572,0,0,0,20.429,10.893Z" transform="translate(0 -2.25)" fill="#007bff"/></svg></div></div></div><div class="col-lg-6 user-invite-more4"><button id="myBtn" class="btn-buy2">Kullanıcı Ekle</button></div>'); // add input boxes.

			}

        }
    });
    
    $(wrapper).on("click",".user-remove-icon", function(e){ //user click on remove text
        e.preventDefault(); 
		
		$(this).parent('.user-invite-box').parent(".user-invite-more").remove(); x--;

		 if ( x == 2 ) {
			$(this).closest(".user-invite-items").find(".user-invite-more4").remove();
			console.log("x eşit");
		}
    })

});

// My Meeting Tab Content 
$(document).ready(function() {
    
    //alert('here');
	
  $('.my-meeting-head-left a').click(function(){
  
     $('.tabf').hide();
     $('.my-meeting-head-left a.active').removeClass('active');
     $(this).addClass('active');
	 $('.gecmis.active')
	 if ($('.gecmis').hasClass("active")) {
		$(".my-head-right-item1").addClass("active");
	 }
	 else if (!$('.gecmis').hasClass("active")) 
	{
		$(".my-head-right-item1").removeClass("active");
	}
     var panel = $(this).attr('href');
     $(panel).fadeIn(200);
     
     return false;  // prevents link action
    
  });  // end click 

    
}); // end ready



// Password Guard CheckBox 
$('.switch_btn').click(function() {
	$('.password-input').fadeToggle(10);
});

$(document).ready(function(){
	$('.moderator-management button').click(function(){
		var tab_idx = $(this).attr('data-tabx');

		$('.btn-buy2').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_idx).addClass('active');
	})
})

$(function () {
	$('.switch_x').click(function(){
		$(this).closest('.label-x').toggleClass('active');
    });
});

$(function () {
    $('.switch_y').click(function(){
        $(this).closest('.label-xc').toggleClass('current');
    });
});




//Date 
$(document).ready(function () {
    $('#datepicker').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d'
    });
});

$(function () {
    $('.my-head-right-item1').on('click',function () {
        $(this).closest(".meeting-plans-tabs").find(".tabf").hide();
		
		$("#calendarx").fadeIn(200);
    });
});

// Again Meeting Tooltip 
$(function () {
    $('.again-meeting').on('click',function () {
        $('.again-meeting').toggleClass('active');
    });
});

$(function () {
    $('.tpx-cc').on('click',function () {
        $(this).find(".tooltipx").closest('.tooltipx').toggleClass('active');
    });
});


$(function () {
    $('.again-meetingx').on('click',function () {
        $('.again-meetingx').toggleClass('active');
    });
});

$(function () {
    $('.sp-ac').on('click',function () {
        $('.sp-ac').toggleClass('top');
    });
});

// By Date 
$(function () {
    $('.by-date').on('click',function () {
        $('.by-date-pop').toggleClass('active');
    });
});


// Gsm +90 mask
var phoneInput = document.querySelector('#gsm') 
 

phoneInput.addEventListener('keydown', function(event) { 
 

   if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() } 
 

    var mask = '+90 (111) 111-11-11';   
 

    if (/[0-9\+\ \-\(\)]/.test(event.key)) { 

        var currentString = this.value; 
        var currentLength = currentString.length; 

        if (/[0-9]/.test(event.key)) { 
            if (mask[currentLength] == '1') { 
                this.value = currentString + event.key; 
            } else { 
                for (var i=currentLength; i<mask.length; i++) { 
                if (mask[i] == '1') { 
                    this.value = currentString + event.key; 
                    break; 
                } 
                currentString += mask[i]; 
                } 
            } 
        } 
    }  
}); 





$('.s-detail, .share-calendar-link').on('click', function(e) {
	e.preventDefault();
	$('.detail-popup').toggleClass('is-visible');
});
$('.calendar-popup').on('click', function(e) {
	e.preventDefault();
	$('.detail-popup').removeClass('is-visible');
});

$('.path-share').on('click', function(e) {
	e.preventDefault();
	$('.path-pp2').toggleClass('active');
});
$('.calendar-popup').on('click', function(e) {
	e.preventDefault();
	$('.path-pp2').removeClass('active');
});


//Scroll to fixed menu
var $navBar = $('.step-fix');
var navmar = $('.account-content');
var navPos = $navBar.offset().top;
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    if (scrollPos >= navPos) {
        $navBar.addClass('fixed-header');
		navmar.addClass('mt-top-fix');
    } else {
      $navBar.removeClass('fixed-header');
	  navmar.removeClass('mt-top-fix');
    }
});





// Password hide show
$(".password-icon").click(function() {
    $(this).toggleClass("icon-change");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});



// Personal Popup
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


