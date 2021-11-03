$(function(){
    let video= $(".video-button")
    let modal= $(".modal")
    video.click(function(){
        if(modal.css("display") === "none"){
            modal.css("display", "block");
        }else{
            modal.css("display", "none");
        }
    $(".modal-close").click(function(){
        modal.css("display", "none");
    })
        
    });
});