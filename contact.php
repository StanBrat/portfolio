<?php

// set email address
$email = $_POST['email'];
$adminemail = "admin@stanbratuszewski.com";

// set mail headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0 \r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1";

// set email subject
$subject = "Stan Bratuszewski Web Design";

// set visitor email message
$body = "<p>Thank you for contacting me!<br>";
$body .= "Your message has been delivered to my inbox and it will be read soon.</p>";

// set email message
$adminbody = "<strong>Name: </strong>" . $_POST['name'] . "<br>";
$adminbody .= "<strong>Email: </strong>" . $_POST['email'] . "<br>";
$adminbody .= "<strong>Subject: </strong>" . "Web design query" . "<br>";
$adminbody .= "<strong>Message: </strong>" . $_POST['message'] . "<br>";

// mail visitor
mail($email, $subject, $body, $headers);
mail($adminemail, $subject, $adminbody, $headers);

// redirect user
header("location: index.html");
exit;
