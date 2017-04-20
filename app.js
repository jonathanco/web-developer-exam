$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {




        // get the form data
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#message").val();

        //validate fields
        if (name.length < 2){
            alert("Name is too short");
            return false;
        }

        if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
            alert("Please enter a valid email");
            return false;
        }

        if (text.length < 2){
            alert("Text is too short");
            return false;
        }


        //create data string
        var dataString = 'name='+ name + '&email=' + email + '&message=' + text;

        // process the form
        $.ajax({
            type        : 'POST',
            url         : 'mailer.php',
            data        :  dataString,
            dataType    : 'json',
            encode      : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);


            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});