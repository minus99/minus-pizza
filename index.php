<?php include_once('header.php'); ?>

<?php

  $page = (isset($_GET['p'])) ? $_GET['p'] : 'home';
  
  include($page.'.php');
  
?>

<?php include_once('footer.php'); ?>