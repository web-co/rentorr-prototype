 $(document).ready(function() {
	 //TABS
	 $('#tabs_block .hide:not(:first)').hide();
	$('#nav_tabs div').click(function(event) {
    event.preventDefault();
    $('#tabs_block .hide').hide();
    $('#nav_tabs .current').removeClass("current");
    $(this).addClass('current');
    
    var clicked = $(this).find('a:first').attr('href');
    $('#tabs_block ' + clicked).fadeIn('1500');
  }).eq(0).addClass('current');
  
  //TOGGLE MENU TOP
  $(".tcon-menu--xcross").on('click', function(){
	  $(".main_menu_top").toggleClass('visible');
	  $('body').toggleClass('fixed');
  });
  
  $(document).mouseup(function (e){ 
        var div = $('.main_menu_top_w'); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            $(".main_menu_top").removeClass('visible');
			$(".tcon-menu--xcross").removeClass('tcon-transform');
			$('body').removeClass('fixed');
        }
    });
	//////////////////////
	//TOGGLE FOOTER MENU
	$('.tcon-menu--arrow').on('click', function(){
		$('.footer_menu').slideToggle();
	});
	
	//POPAP WINDOW
	
	$( function() {//SING UP
		$( "#popap_sign_up" ).dialog({
			draggable: false,
			title: "register",
			modal: true,
			autoOpen: false,
			  show: {
				effect: "fadeIn",
				duration: 600
			  },
			  hide: {
				effect: "explode",
				duration: 600
			  },
			resizable: false,
			classes: {
				"ui-dialog-titlebar" : "title_popap"
			}
		});
		$( "#sign_up_open" ).on( "click", function() {
		  $( "#popap_sign_up" ).dialog( "open" );
		});
  });
  
  $( function() {//SING IN
		$( "#popap_sign_in" ).dialog({
			draggable: false,
			title: "Sign In",
			modal: true,
			autoOpen: false,
			  show: {
				effect: "fadeIn",
				duration: 600
			  },
			  hide: {
				effect: "explode",
				duration: 600
			  },
			resizable: false,
			classes: {
				"ui-dialog-titlebar" : "title_popap"
			}
		});
 
		$( "#sign_in_open" ).on( "click", function() {
		  $( "#popap_sign_in" ).dialog( "open" );
		});
  });
  
});

/* $(window).load(function(){
  $('.cover').liCover({
    parent: $(".banner_img"),
    position:'absolute',
    veticalAlign:'middle',
    align:'center',
	width: '100%'
  })
}) */