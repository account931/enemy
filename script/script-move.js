$(document).ready(function(){
 




// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
//Changin   enemy  position on  windows  resize----------------------DELETE??????-
$(window).resize(function() {

      //var pos = $(".slide_circle1").position(); // returns an object with the attribute top and left   //$(selector).offset()
var posoffset = $("#ballS").offset();  //alert(posoffset.top);
//var x=pos.top;  // top offset position
//var y=pos.left; // left offset position

$(".enemy").offset({top:posoffset.top,left:posoffset.left});

});

// End  Changin   color  slide  cicrle  position------------------
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
// Reset   enemies   while  clicking  the  STOP button-------------------------------------
    $("#stop").click(function(){
                         var posoffset = $("#ballS").offset();  //alert(posoffset.top);
                         $(".enemy").offset({top:posoffset.top,left:posoffset.left});      
    });
// End Reset   enemies   while  clicking  the  STOP button--------------------------------

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
// Reload  page clicking  the  REload button-------------------------------------
    $("#reload").click(function(){
          location.reload();               
    });
// End Reload  page clicking  the  REload button- ---------------------------------

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








//end  ready
});






// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
//function  that chanes  enemy  position while target is  moved
function myfuctXXX(){
var posoffset = $("#ballS").offset();  //alert(posoffset.top);
//$(".enemy").offset({top:posoffset.top,left:posoffset.left});  alert(leftX);
$(".enemy").offset({top:topX,left:leftX});  //alert(topX+'---'+leftX);

// alert($(".enemy").length);

  //running  for  loop  for  every  .enemy  class  and  change each position
  for (i = 0; i < $(".enemy").length; i++)
  {
          topX=parseInt(topX)+(i*26); //alert(topX); //make  every  enemy  move  to  diffrent  coordinates
          leftX=parseInt(leftX)+(i*26);
  $(".enemy").eq(i).animate({  //eq(i)==[i]
          top: topX,left:leftX
       /* top: "-=30px",left:"99px;"*/
                            }, -1000/*-((i+2)*300)*/);   //setting negarive  time  forces  it  move   more  energetic

  } //  end  for 
}//end  function
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************

