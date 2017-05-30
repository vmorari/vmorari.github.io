<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){ //check if form was submitted
$msg = $_POST['subject']; //get input text
$email = $_POST['email'];
echo "Success! You entered: ".$msg." from ".$email;
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
//mail($email, "New Message" ,$msg, $headers);
}
?>
