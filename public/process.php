<?php

$data = array();


if(isset($_POST['name'])) {

    $email_to = "klutes90@gmail.com";
 
    $email_subject = "Wedding RSVP";

 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['attending']) || !isset($_POST['guests']) ) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
    $name = $_POST['name'];
    $attending = $_POST['attending'];
    $plusOne = $_POST['plusOne'];
 
    $email_message = "Rsvp details below.\n\n";
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
    $email_message .= "Name: ".clean_string($name)."\n";
 
    $email_message .= "Attending: ".clean_string($attending)."\n";
 
    $email_message .= "Plus One Attending: ".clean_string($plusOne)."\n";

	// create email headers
    $email = "kyle@kcwedding.us";
	 
	$headers = 'From: '.$email."\r\n" . 'Reply-To: '.$email."\r\n" . 'X-Mailer: PHP/' . phpversion();
	 
	mail($email_to, $email_subject, $email_message, $headers);

    $data['message'] = "Success";
    echo json_encode($data);   
} ?>