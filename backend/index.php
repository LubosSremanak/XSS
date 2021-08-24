<?php
//Hack
setcookie('id', '21', time() + (86400 * 30), "./");
setcookie('name', 'Lubos', time() + (86400 * 30), "./");
////https://wt143.fei.stuba.sk/xss/backend/index.php?message=%3Cscript%20src=%22../hacker.js%22%3E%3C/script%3E
//echo '<div>' . $_GET['message'] . '</div>';

$file = fopen("stored.txt", 'rb') or die("Unable to open file!");
$fileData = fread($file, filesize("stored.txt"));
fclose($file);

foreach (explode('\n', $fileData) as $key => $file) {
  echo '<div>' . $file. '</div>';
  echo 'message' . $key;
}
