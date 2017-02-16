<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
echo '<response>';
     $food= $_REQUEST['food'];
     $foodstore = array('meat','fish','egg','paneer');
     if(in_array($food,$foodstore))
      echo 'we have'.$food.'!';
      elseif($food=='')
      echo 'type your order';
     else
      echo 'sorry,we do not have it';
     
echo '</response>';
?>