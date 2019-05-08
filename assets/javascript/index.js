$(document).ready(function () {

    $("#modalTrigger").click(function(){
        $(".reveal").fadeIn();
      });

    $("#closeBtn").click(function(){
        $(".reveal").fadeOut();
      });

    $(document).foundation();

});