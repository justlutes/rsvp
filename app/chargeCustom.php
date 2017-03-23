<?php
  require_once('config.php');

  $token  = $_POST['stripeToken'];
  $amount = ($_POST['amount']) * 100;
  $stripeinfo = \Stripe\Token::retrieve($token);

    $email = $stripeinfo->email;

    $customer = \Stripe\Customer::create(array(
        'email' => $email,
        'source'  => $token
    ));

    $charge = \Stripe\Charge::create(array(
        'customer' => $customer->id,
        'amount'   => $amount,
        'currency' => 'usd'
    ));

  header('location: /registry');
?>