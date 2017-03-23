<?php 
require_once('./assets/components/stripe-php-4.3.0/init.php');

$stripe = array(
  "secret_key"      => "sk_test_NPJB78aqY1wxqFZHMJCtxluB",
  "publishable_key" => "pk_test_sa0wFaYe9Qvra5z0uTIdHUKk"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>