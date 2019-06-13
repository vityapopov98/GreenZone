<?php 
$myFile = "../txt/out-1.txt";
$fh = fopen($myFile, 'r');

$theData = fread($fh, filesize($myFile));

fclose($fh);
if  ( $theData == 'true')
{
 echo "<p class='on'>ON</p>";
}

if  ( $theData == 'false')
{
 echo "<p class='off'>OFF</p>";
}

?>