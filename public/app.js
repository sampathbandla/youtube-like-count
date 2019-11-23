$(document).ready(function(){
    setInterval(function(){
        $.ajax({url: "/likess?a=" +$("#id").attr("dataid")  , success: function(result){
            var likes = parseInt($("#id").text())
            if(parseInt(result) != likes)
            {
                $("#id").text(result);
            }
        }});
    }, 5000);
    
});

  