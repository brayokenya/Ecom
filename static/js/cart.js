$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/cart-counter/",
        success: function(data){
            $('#cart-counter').html(data.total)
        },
        error: function(){
            console.log('error')
        }
    })

});