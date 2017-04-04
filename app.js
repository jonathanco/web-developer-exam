

function validateForm() {

    // Validate Title
    var title = $("#name").val();
    if (title=="" || title==null) { } else {
        alert("Please enter only alphanumeric values for your Name");
    }

    // Validate Email
    var email = $("#email").val();
    if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
        alert("Please enter a valid email");
    }
    return false;
}


$(function() {
    $("#contact .btn").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#message").val();
        var dataString = 'name='+ name + '&email=' + email + '&message=' + text;

        $.ajax({
            type: "POST",
            url: "mailer.php",
            data: dataString,
            success: function(){
                $('.success').fadeIn(1000);
            }
        });

        return false;
    });
});