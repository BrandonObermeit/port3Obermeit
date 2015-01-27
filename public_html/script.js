/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//puts colors acordien movment and word change---------------------------------- 
$("document").ready(function(){

    $(".practice").css("background","purple");
    
    $("p:first").css("color", "white");
    
    $("div p:last-child").css("background-color", "cyan");
    
    $('div').bind('mouseover', mouseOverme).bind('mouseout', mouseOutme);
    
    $('#superHumans').accordion({header: "h3"});
   
  

    
});
//what the words are when  mouse hover over-------------------------------------
function mouseOverme(){
    $('h1').html("NO TOUCHY");
}

function mouseOutme(){
    $('h1').html('PUNCAKE');
}