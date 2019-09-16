
var wybrano_oferte = false;
var online = 7412;
var contentPanelId;
var nick;
var v =1;

function harabasz(){
 for(;;){
   v = v + 1;
    console.log("KAHA PACHA"+v);
}

}

//right click
document.addEventListener('contextmenu', event => event.preventDefault());

jQuery(".gem-list").click(function() {

  if(wybrano_oferte ==true){
     document.getElementById(contentPanelId).style.border="0px";

  }
    contentPanelId = jQuery(this).attr("id");
     document.getElementById(contentPanelId).style.border="5px solid gold";
     wybrano_oferte = true;

});




jQuery("#button-dalej").click(function() {
  if ($('input:text').val().length != 0 && wybrano_oferte == true) {
 //KLIKNIECIE KONTYNUUJ

  nick = $('#nick_form').val();

  $(".nick").text(nick);

  $("#step1").css("display", "none");
  $( "#ladowanie-screen" ).slideUp( 500 ).fadeIn( 500 );




  setTimeout(
    function()
    {
      $("#tekst-ladowanie").text("Weryfikacja twojej tożsamości...")


      setTimeout(
        function()
        {
   //SMS SCREEN
          $("#ladowanie-screen").css("display", "none");
          $( "#step2" ).slideUp( 500 ).fadeIn( 500 );
        $( "#sms" ).slideUp( 2000 ).fadeIn( 2000 );
         
         setTimeout(
         function()
         { 
         alert("Klikając DALEJ oświadczasz, że akceptujesz regulamin strony.");
         }, 440);


      }, 4500);
      
    }, 3000);

}else{
  alert("Wypełnij wszystkie informacje");
}
});


function online_users(){
var zmiana = Math.floor((Math.random() * 21)- 10);

online = online + zmiana;

$('#liczba_online').text(online);
}
window.setInterval(function(){
  online_users();
}, 2000);


$("#regulamin").click(function(){
  $( "#tresc" ).slideUp( 500 ).fadeIn( 500 );
});

$("#polityka").click(function(){
  $( "#tresc2" ).slideUp( 500 ).fadeIn( 500 );
});




///


$( "#button-sms" ).click(function() {

 //lafowanie screen
 $("#content1").css("display", "none");
 $( "#ladowanie2" ).slideUp( 800 ).fadeIn( 800 );
$("#gif2").css("display", "none");



//SCREEN PO LADOWANIU
  setTimeout(
    function()
    {


      window.open("https://tipanddonation.com/fabrykagemow_", '_blank', 'location=yes,height=720,width=1080,scrollbars=yes,status=yes');


  }, 3000);



});
