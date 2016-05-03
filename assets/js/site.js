$(document).ready(function(){
  
  $("#small").click(function(event){
    event.preventDefault();
    $("p").animate({"font-size":"16px"});
    $("h1").animate({"font-size":"36px"});
    $("h2").animate({"font-size":"30px"});
     $(".main-p-subsubtitle").animate({"font-size":"20px"});
     $(".main-p-subtitle").animate({"font-size":"24px"});  
    
  });
  
  $("#large").click(function(event){
    event.preventDefault();
    $("p").animate({"font-size":"20px"});
    $("h1").animate({"font-size":"38px"});
    $("h2").animate({"font-size":"34px"});
     $(".main-p-subsubtitle").animate({"font-size":"24px"});
       $(".main-p-subtitle").animate({"font-size":"28px"});  
    
    
  });
  
  $( "#controls a" ).click(function() {
   $("#controls a").removeClass("selected");
  $(this).addClass("selected");
  
 });

});