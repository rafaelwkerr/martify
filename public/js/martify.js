$(document).ready(function(){

    $("#form").submit(function(){
      console.log("form submit ok")
      console.log("serialize array" + $(this).serializeArray())
      $.ajax({
       type: "POST",
       url: "https://dry-badlands-48403.herokuapp.com/api/leads",
       data: $(this).serializeArray(),
       }).done(function( msg ) {
         console.log("Response" + msg)
         alert("Obrigado pelo seu interesse, em breve vamos entrar em contato");
       });

      return false;
    });

})
