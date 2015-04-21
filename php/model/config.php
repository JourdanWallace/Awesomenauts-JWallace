<?php
    //this is the file being accessed
    require_once(__DIR__ ."/database.php");
    //you can begin your session
    session_start();
    session_regenerate_id(true);
    //go to wallacej's blog
    $path = "/Awesomenauts-JWallace/php/";
    //the info needed to get into php my admin
    $host = "localhost";
    $username = "root";
    $password = "root";
    $database = "awesomenuats_db";
    
    if(!isset($_SESSION["connection"])) {
        $connection = new Database($host, $username, $password, $database);
        $_SESSION["connection"] = $connection;
    }