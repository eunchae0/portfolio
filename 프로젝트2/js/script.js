$(document).ready(function(){
  //나타나기 소스
  AOS.init();

  //컨텐츠 1 슬라이드 효과
  $('.bxslider').bxSlider({
    pager:true,
    // touchEnabled:false,
    controls:true,
    auto:true,
    pause:4500,
    });

  //컨텐츠 2 슬라이드 효과
  (function() {
    document.documentElement.className = 'js';
    var slideshow = new CircleSlideshow(document.getElementById('slideshow'));
  })();

    //컨텐츠 3 슬라이드 효과
    $('.bxslider03').bxSlider({
      pager:true,
      // touchEnabled:false,
      controls:true,
      // auto:true,
      pause:4500,
      });

});