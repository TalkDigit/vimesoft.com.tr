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
// var   selectricOptions = {
// 	disableOnMobile: false,
//   };
//
//   $(function() {
// 	$('.spe-select select').selectric(selectricOptions);
//   });
//
//   $('.spe-select select').on('change', function() { // fires when the value changes
//
// 	 var returnvalue;
// 		  if($(this).val() !== "") {
// 			  $(this).closest(".spe-select").find(".check-select-name").addClass("active");
// 			  returnvalue=false;
// 		  } else {
// 			$(this).closest(".spe-select").find(".check-select-name").removeClass("active");
// 		  }
// 		  return returnvalue;
//
// });


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
// $(document).ready(function(){
// 	$('.tab-system .tabs .tabs-item').click(function(){
// 		var tab_id = $(this).attr('data-item');
// 		$(this).closest(".tabs").find(".tabs-item").removeClass('active');
// 		$(this).closest(".tab-system").find('.tab-content').removeClass('active');
//
// 		$(this).addClass('active');
// 		$(this).closest(".tab-system").find("#"+tab_id).addClass('active');
// 	})
// })




// Join Conference Sticky Menu dropdown
$('.sticky-opener').click(function(){
	$(this).toggleClass('active');
	$(this).next('.sticky-opened').slideToggle(300);
});
// Join Conference Sticky Menu dropdown (Mobile)
$(document).ready(function() {
	$('.mobile-menu-burger').click(function() {
	  $('.sticky-nav').slideToggle(400);
	});
});

// Personal Invite
$(document).ready(function() {
    var max_fields      = 99; //maximum input boxes allowed
    var wrapper         = $(".user-invite-items"); //Fields wrapper
    var add_button      = $(".user-invite-icon"); //Add button ID

    var x = 1; //initlal text box count


});



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


// Again Meeting Tooltip
$(function () {
    $('.again-meeting').on('click',function () {
        $('.again-meeting').toggleClass('active');
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


