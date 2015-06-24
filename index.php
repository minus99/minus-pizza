<?php include_once('header.php'); ?>

<?php

  $page = (isset($_GET['p'])) ? $_GET['p'] : 'home';
  
  if(file_exists($page.'.php'))
    include($page.'.php');
  else
    include('404.php');
  
?>

<?php include_once('footer.php'); ?>