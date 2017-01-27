<?php
  require_once('config.php');

  $token  = $_POST['stripeToken'];
  $stripeinfo = \Stripe\Token::retrieve($token);

    $email = $stripeinfo->email;

    $customer = \Stripe\Customer::create(array(
        'email' => $email,
        'source'  => $token
    ));

    $charge = \Stripe\Charge::create(array(
        'customer' => $customer->id,
        'amount'   => 5000,
        'currency' => 'usd'
    ));

  header('location: /');
?>