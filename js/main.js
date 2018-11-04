$(document).ready(function() {
      /********************************************************************************************************************************/
  // Start Setting in chat page 
  var allmesH = $('.messages .container-messages .mess-content .col-md-8 .messages-member .all-messages').height();
  $('.messages .container-messages .mess-content .col-md-8 .messages-member .all-messages').animate({
    scrollTop : 1000000000000000000000000000000000 ,
  },1000) ;
  $(" .messages .mess-content .z-mess .online1").css('display','block'); 
  $(".messages .mess-content .online-member").on("click",function(){
      $(this).addClass("selected-member").siblings().removeClass("selected-member");
      $(".messages .mess-content .z-mess .messages-member").css('display','none');   
      $($(this).data('class')).css('display','block');
  });
  $(".messages .container-messages .mess-content .col-md-8 .writting-message .send-m ").on("click",function(){
    var valinpumess = $('.messages .container-messages .mess-content .col-md-8 .writting-message .w-text-input input').val() ;
    if(valinpumess !== '' ){
      $('<div class="message-member send"><div class="div-img"><a href="profile.html"><img src="images/user.jpg" alt="user"></a><div class="time-mess"><span>الان</span></div></div><div class="con-name"><div class=" text-mes">'+ valinpumess +'</div></div></div>').appendTo(".messages .container-messages .mess-content .col-md-8 .messages-member .all-messages").end();
      $('.messages .container-messages .mess-content .col-md-8 .messages-member .all-messages').animate({
        scrollTop : 1000000000000000000000000000000000 ,
      },1000) ;
    }
  });
  // End Setting in chat page 
  /********************************************************************************************************************************/
  $(".supp-project .me-project").css('display','block'); 
  $(".project-tabs div").on("click",function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(".pro-supp").css('display','none');   
      $($(this).data('class')).css('display','block');
  });

    $(".mobile_nav").click(function() {

        var mm = $(".mobile_menu"),
            mn = $(".mobile_nav"),
          a = "active";
        
        if (mm.hasClass(a) && mn.hasClass(a)) {
          mm.removeClass(a).fadeOut(200);
          mn.removeClass(a);
          $('.mobile_menu li').each(function(){
            $(this).removeClass('slide');
          });
        } else {
          mm.addClass(a).fadeIn(200);
          mn.addClass(a);
          $('.mobile_menu li').each(function(i){
          var t = $(this);
          setTimeout(function(){ t.addClass('slide'); }, (i+1) * 100);
        });
        }        
      });
    $(".progress-bar").each(function(){
      var width = $(this).data('width');
        $(this).animate({
          width: width
      }, 2500 );
      });
      
});
const mainwrap = document.querySelector(".main-wrap");
const openSearch = document.querySelector("#search-icon");
const closeSearch = document.querySelector("#search-close");
const formContainer = document.querySelector("#main-search-form");
const searchContainer = document.querySelector("#search-container")
const searchInput = document.querySelector(".search-input");
const welcomeMessage = document.querySelector("#welcome");


function init()
{
  searchContainer.classList.add("opacity-off");
  initEvents();
}

function open()
{
  welcomeMessage.classList.add("d-none");
  mainwrap.classList.add("move");
  formContainer.classList.add("show-search");
  searchContainer.classList.remove("opacity-off");
  searchInput.focus();
}

function close()
{
  welcomeMessage.classList.remove("d-none");
  mainwrap.classList.remove("move");
  formContainer.classList.remove("show-search");
  searchContainer.classList.add("opacity-off");
}

function initEvents()
{
  openSearch.addEventListener('click', open);
  closeSearch.addEventListener('click', close);
  document.addEventListener('keyup', function(ev) {
			if( ev.keyCode == 27 ) {
				close();
			}
	});
}


init();
