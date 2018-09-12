/**
 * Created by win7 on 2018/9/7.
 */
$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    var items = $(".item");
        $(window).on("resize",function(){
            var width = $(window).width();
            if(width<768){
                $.each(items,function(index,value){
                    var imgSrc = $(this).data("smallImage");
                   $(this).html('<a href="javascript:;" class="mobileImg "> <img src="'+imgSrc+'" alt=""/> </a>')
                })
            }else{
                $.each(items,function(index,value){
                    var imgSrc = $(this).data("pcimg");
                    $(this).append($('<a href="javascript:;" class="pcImg></a>').css("backgroundImage","url("+imgSrc+")"))
                })
            }
        }).trigger("resize")



    //$(window).on("resize",function(){
    //    var width = $(window).width();
    //    if(width<768){
    //       $(items).each(function(index,value){
    //           var imgSrc = $(this).data("smallImage");
    //           $(this).html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'"/></a>')
    //       })
    //    }else{
    //        $(items).each(function(index,value){
    //            var imgSrc = $(this).data("pcimg");
    //            $(this).html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"))
    //        })
    //    }
    //}).trigger("resize");



    var wjs_banner = $(".wjs_banner")[0];
    var startX,endX,distanceX;
    wjs_banner.addEventListener("touchstart",function(e){

        startX = e.targetTouches[0].clientX;
    })
    wjs_banner.addEventListener("touchend",function(e){
        endX = e.changedTouches[0].clientX;
        distanceX = endX-startX;
        if(distanceX>0){
            $('.carousel').carousel('prev')
        }else{
            $('.carousel').carousel('next')
        }
    })
})