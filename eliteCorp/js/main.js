$(function (){
'use strict';
//addjust slider height نحوسو نجيبو الارتفاع تاع السلايدر  وحنا حابينها يشد كل المساحة وينحي منها مساحة الابر بار والناف بار لذالك راح نديرو لكل ارتفاع وحدة منهم متغير 
var winH =$(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH =$('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));

//featured work shuffle//
//راح ندير خاصية لما نضغط على البوتوم حطله كلاس اكتيف -يولي لونه احمر-واحذف الكلاس هذا عن سبيلينق البقية//
$('.Featured-Work ul li ').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  //اذاكان اسم  الكلاس نتاعه كما الي أال اظهرهم كل يعني نقارنو اسم كلاس بعد ما يضغط  عليه بما يساويه بالكلاسات الي عتدنا//
    if( $(this).data('class') ==='all'){
      
        $('.shuffle-images .col-md').css('opacity', 1);
    }else{
        $('.shuffle-images .col-md').css('opacity', '.08');
        $( $(this).data('class')).parent().css('opacity',1);

    }
});
});
  //hide();تخفي العنصر//
        //.css('opacity','.09');تضبب العناصر//
        //.css('opacity','1'); تظهرالعناصر بصورةواضحة//
 //.parent()لاننا دايرين الكلاس في الصورة واحنا نحوسو نظهرو الديف الي يحتوي على الصورة ملا ندير الاب يعني العنصر الاب الي فيه اداخل الصورة الابن//