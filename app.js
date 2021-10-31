window.onload = $(function() {
      var name = $('.search').val();
      if(name == ""){
        $(".result").html("");
      }
      else{
        $.ajax({
          type:"POST",
          url: "superheroes.php",

          data:{
            search:name
          },

          success: function(html){
            $(".result").html(html).show();
          }
        });
      }
    });