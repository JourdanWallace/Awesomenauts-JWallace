<?php
    //this is the file being accessed
    require_once(__DIR__ . "/../model/config.php");
    //the session is not real
    unset($_SESSION["authenticated"]);
    //the user cannot go through, if they try to go to posts, send them back to the index
    session_destroy();
    header("Location: " . $path . "index.php");
