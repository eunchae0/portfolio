$(document).ready(function(){

   /** 메인 배너 슬라이드 **/
$('.bxslider').bxSlider({
  pager:true,
  controls:true,
  auto:true,
  pause:3000,
  });

   /** 컨텐츠 배너 슬라이드 **/
   $('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true, 
    autoplaySpeed: 2000,
  });

  /** 버튼 호버 **/
  //  $('ul.tabs li').click(function(){
  //    var tab_id = $(this).attr('data-tab');
  //    $('ul.tabs li').removeClass('color');
  //    $('.tab-con').removeClass('show');
  //    $(this).addClass('color');
  //    $("#"+tab_id).addClass('show');
  //  });

    /**오른쪽 퀵메뉴**/
    var box = $('.wrap');
    $('#q_mn li').click(function(){
      var nn = $(this).index(); //버튼의 번호를 찾는거
      //console.log(nn);
      var tt = box.eq(nn); //버튼번호와 동일 box
      var tg = tt.offset().top; //위치를 이동할때 기준이 될 box 기준점을 설정
      $('html,body').stop().animate({scrollTop:tg});
    });
    $(window).scroll(function(){
        var sct = $(window).scrollTop() + 200;
        $('#q_mn').stop().animate({top:sct + "px"},500);
    });
    /**오른쪽 퀵메뉴 끝**/




});