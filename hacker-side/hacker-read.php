<?php
$file = fopen("hack.txt", 'rb') or die("Unable to open file!");
echo fread($file,filesize("hack.txt"));
fclose($file);
