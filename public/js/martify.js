$(document).ready(function(){

    $("#form").submit(function(){

      ga('send', 'event', 'MVP', 'Submit Form Data', $(this).serializeArray(), 1);

      console.log("form submit ok")
      console.log("serialize array" + $(this).serializeArray())
      $.ajax({
       type: "POST",
       cache: false,
       url: "https://martify.herokuapp.com/api/leads",
       data: $(this).serializeArray(),
       }).done(function( msg ) {
         console.log("Response" + msg)
         alert("Obrigado pelo seu interesse, em breve vamos entrar em contato");
       });

      return false;
    });
    
})
