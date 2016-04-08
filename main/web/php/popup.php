<?php
    $file_path = '../../resources/test.xml';
    $name = $_REQUEST['name'];
    if (file_exists($file_path)) {
        $xml = simplexml_load_file($file_path);
        foreach ($xml->good as $good) {
            if ($good->name == $name) {
                echo (json_encode($good));
            }
        }
    } 
?>