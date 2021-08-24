<?php
$json = json_decode(file_get_contents('php://input'), false);
$file = fopen("stored.txt", 'ab');
fwrite($file, $json->message . '\n');
fclose($file);
