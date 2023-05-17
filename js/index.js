
$( "#showWork" ).on( "click", function() {

    $("html, body").animate({ scrollTop: 840 }, "10");
   
} );

$( "li" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });


  let menu = document.getElementById("toggle_menu");
    menu.addEventListener("click", function() {
    document.getElementById("menu_id").style.display = "block";
   menu.style.display="none";
   document.getElementById("menu_close").style.display = "block";
   });

   document.getElementById("menu_close").addEventListener("click", function() {
    document.getElementById("menu_id").style.display = "none";
    document.getElementById("menu_close").style.display="none";
    menu.style.display="block";
   });