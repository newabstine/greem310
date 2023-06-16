$(document).ready(function(){
    let ht = $(window).height();
    $('section').height(ht)
    $(window).resize(function(){
        let ht = $(window).height();
        $('section').height(ht)
    });
// 메뉴를 클릭 할 때 마다 scrollTop이 움직여라 
// nav li 를 클릭할때 마다 scrollTop의 위치를 바꾸어라.
$(window).scroll(function(){
    let sc = $(window).scrollTop()
    $('h1').text(sc)
    let ht = $(window).height();

    // if(sc>=ht*0 && sc<ht){
    //     $('nav li').removeClass('on')
    //     $('nav li').eq(0).addClass('on')
    // }
    // if(sc>=ht*1 && sc<ht*2){
    //     $('nav li').removeClass('on')
    //     $('nav li').eq(1).addClass('on')
    // }
    // if(sc>=ht*2 && sc<ht*3){
    //     $('nav li').removeClass('on')
    //     $('nav li').eq(2).addClass('on')
    // }
    // if(sc>=ht*3 && sc<ht*4){
    //     $('nav li').removeClass('on')
    //     $('nav li').eq(3).addClass('on')
    // }

    // 반복문을 활용한 축약설정

    for(var a = 0; a < 4; a++){
        if(sc>=ht*a && sc<ht*a+1){
        $('nav li').removeClass('on')
        $('nav li').eq(a).addClass('on')
        console.log(a)
        }
    }

});

$('nav li').click(function(e){
    e.preventDefault()
    let i = $(this).index()
    console.log(i);
    let ht = $(window).height();
    $('html,body').stop().animate({scrollTop:ht*i},1400)
    $('nav li').removeClass('on')
    $(this).addClass('on')
});

// 섹션 위에서 마우스를 올릴때 , 내릴때 이벤트가 발생한다.

$('section').mousewheel(function(event,delta){
    if(delta>0){
        let prev = $(this).prev().offset().top
        $('html,body').stop().animate({scrollTop:prev},2000,"easeInOutQuart")
    }
    else if (delta<0){
        let next = $(this).next().offset().top
        $('html,body').stop().animate({scrollTop:next},2000,"easeInOutQuart")
    }

})



// 예제 윈도우에서 마우스를 올렸을때, 마우스 올림 글씨 출력
// 예제 윈도우에서 마우스를 내렸을때, 마우스 내림 글씨 출력
// $(window).mousewheel(function(event,delta){
//     event.preventDefault()
//     // 마우스를 올렸을때 
//     if(delta>0){
//         $('h1').text('홀리몰리')
//     }
//     else if (delta<0){
//         $('h1').text('과카몰리')
//     }


// .p11 {
//     bottom: 20px; right: 20px;
// }
// .p12 {
//     bottom: 40px;
//     right: 130px;
// }
// .p13 {
//     top: 180px;
//     right: 60px;
// }

// .p21{
//     bottom: 20px;
//     right: 20px;
// }
// .p22{
//     bottom: 40px;
//     right: 130px;
// }

// .p31{
//     bottom: 20px;
//     right: 20px;
// }
// .p32{
//     bottom: 40px;
//     right: 130px;
// }
// .p33{
//     top: 180px;
//     right: 60px;
// }


$('section').mousemove(function(e){
let x = e.pageX;
let y = e.pageY;
console.log(x,y)

$(this).find('.p11').css({'bottom': 20-(y/30), 'right': 20-(x/30)})
$(this).find('.p12').css({'bottom': 40+(y/30), 'right': 130+(x/30)})
$(this).find('.p13').css({'top': 180-(y/60), 'right': 60-(x/60)})


$(this).find('.p21').css({'bottom': 20-(y/60), 'right': 20-(x/60)})
$(this).find('.p22').css({'bottom': 40-(y/60), 'right': 130-(x/60)})

$(this).find('.p31').css({'bottom': 20-(y/30), 'right': 20-(x/30)})
$(this).find('.p32').css({'bottom': 40+(y/30), 'right': 130+(x/30)})
$(this).find('.p33').css({'top': 180-(y/60), 'right': 60-(x/60)})

$(this).find('.p41').css({'bottom': 20-(y/60), 'right': 20-(x/60)})
$(this).find('.p42').css({'bottom': 40-(y/60), 'right': 130-(x/60)})

})









})
