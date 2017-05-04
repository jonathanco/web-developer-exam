<?php

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

//send email
    mail("jon88h@gmail.com", "from" .$email, $message,"From:" .$email);
}