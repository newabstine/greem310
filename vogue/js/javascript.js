$(document).ready(function(){
// 메뉴버튼을 클릭했을때, nav와 section 이 바뀌어라.
$('#wrap em').click(function(){
$('#wrap nav').addClass('on')
$('#wrap section').addClass('on')
// 본인(this)스스로가 천천히 사라져라
$(this).fadeOut(700)

})
})