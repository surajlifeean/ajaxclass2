<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
echo '<response>';
     $food= $_REQUEST['food'];
     $foodArray = array('meat','fish','egg','paneer');
     if(in_array($food,$foodArray))
      echo 'we have '.$food.'!';
      elseif($food=='')
      echo 'type your order';
     else
      echo 'sorry,we do not have '.$food.'!';
     
echo '</response>';
?>