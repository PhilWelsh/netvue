<?php 
echo '<div>
      <strong style="text-align:center;">Thank you! Your details have been submitted succesfully. We will get back to you as soon as possible!</strong>
</div>';
require('PHPMailer/PHPMailerAutoload.php');
require('PHPMailer/class.PHPMailer.php');

$mail=new PHPMailer();
$mail->CharSet = 'UTF-8';

$firstname = $_POST['name'];
$email = $_POST['email'];
$website = $_POST['website'];
$job = $_POST['job'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//TO INNOTRIK
// THE LAYOUT OF THE EMAIL. DONT TOUCH ANYTHING BEGINNING WITH A $
$body = ("New user signup: <br>
name = $name <br> 
email = $email <br>
website = $website <br> 
job = $job <br>
phone = $phone <br>
message = $message");

//TO INNOTRIK
//SMTP MAIL SERVER INFORMATION
$mail->IsSMTP();
$mail->Host = "smtp.gmail.com";

$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->SMTPAuth = true;

$mail->Username   = 'philwelsh3d@gmail.com';
$mail->Password   = 'ucc27fGQ';

//SetFrom = Sent From which email and name
$mail->SetFrom('philwelsh3d@gmail.com', "PhilWelsh");
//$mail->AddReplyTo('no-reply@mycomp.com','no-reply');
$mail->Subject    = 'Netvue';
$mail->MsgHTML($body);

//TO INNOTRIK
//ENTER YOUR OWN EMAIL AND NAME BELOW BETWEEN QUOTES
// SUCH AS THIS ->('RECEIVING EMAIL ADDRESS', 'NAME')
$mail->AddAddress('philwelsh3d@gmail.com', 'Phil');

$mail->send();

?>