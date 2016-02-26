//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

///////////////////////////////////////////////////////////////////


  $("button").click(function() {
    $('#titleWord').show().siblings().hide();
    $("#titleWord").append("<h5>HOW DO YOU FEEL?</h5>");
    var block = "<div class ='rightBlock'><p>Are you in visual mood?</p><button id='videoMood'>Video Section</button></div><div class ='leftBlock'><p>Are you in auditory mood?</p><button id='musicMood'>Music Section</button></div>"
    $("#choiceBlocks").show('slow').append(block);
    $("button").click(function(){
      console.log(this.id);
       if(this.id === 'videoMood'){
         window.location.href = 'video.html';
       }
       if(this.id === 'musicMood'){
         window.location.href = 'soundcloud.html';
       }
     });
   });
