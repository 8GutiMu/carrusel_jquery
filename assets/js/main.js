jQuery(document).ready(function ($) {
    //
    //  $(document).ready(function(){
    //    setInterval(function () {
    //        moveRight();
    //    }, 3000);
    //  });
    //  
    //	var slideCount = $('#slider ul li').length;
    //    var slideWidth = 500;
    //	var slideHeight = 300;
    //	var sliderUlWidth = slideCount * slideWidth;
    //    console.log(slideCount,slideHeight,slideWidth,sliderUlWidth)
    //
    //    
    //	$('#slider').css({ width: slideWidth, height: slideHeight });
    //	
    //	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    //	
    //    $('#slider ul li:last-child').prependTo('#slider ul');
    //    
    //
    //
    //    function moveLeft() {
    //        $('#slider ul').animate({
    //            left: + slideWidth
    //        }, 200, function () {
    //            $('#slider ul li:last-child').prependTo('#slider ul');
    //            $('#slider ul').css('left', '');
    //            
    //        });
    //    };
    //
    //    function moveRight() {
    //        $('#slider ul').animate({
    //            left: - slideWidth
    //        }, 200, function () {
    //            $('#slider ul li:first-child').appendTo('#slider ul');
    //            $('#slider ul').css('left', '');
    //        });
    //    };
    //
    //    $('a.control_prev').click(function () {
    //        moveLeft();
    //    });
    //
    //    $('a.control_next').click(function () {
    //        moveRight();
    //    });



    $('#slider ul li:gt(0)').hide();

    $('#button1').click(function () {
        $(".imgCarrusel").hide();
        $("#img1").show();
    });

    $('#button2').click(function () {
        $(".imgCarrusel").hide();
        $("#img2").show();
    });
    $('#button3').click(function () {
        $(".imgCarrusel").hide();
        $("#img3").show();
    });
    $('#button4').click(function () {
        $(".imgCarrusel").hide();
        $("#img4").fadeIn(200);
    });
});