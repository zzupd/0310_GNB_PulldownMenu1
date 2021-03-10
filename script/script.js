 $(function () {

     $("#gnb>ul#mainMenu>li").mouseover(function () {
         $(this).children("ul").stop().fadeIn(1000);
         // $(this).children("ul").stop().slideDown(800);
         // 개별 서브메뉴 슬라이드

         // 전체 서브메뉴 슬라이드
         //$("ul.subMenu").stop().slideDown(800);
     });

     $("#gnb>ul#mainMenu>li").mouseout(function () {
         $(this).children("ul").stop().fadeOut(400);
         // $(this).children("ul").stop().slideUp(800);
     });

 });
