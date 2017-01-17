<?php
  require_once('config.php');

  $token  = $_POST['stripeToken'];
  
  if (isset($_POST['item1']) ) {

    $email = $stripeinfo->email;

    $customer = \Stripe\Customer::create(array(
        'email' => customer,
        'source'  => $token
    ));

    $charge = \Stripe\Charge::create(array(
        'customer' => $customer->id,
        'amount'   => 999,
        'currency' => 'usd'
    ));
  }

  if (isset($_POST['item2']) ) {

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
  }

  header('location: /');
?>