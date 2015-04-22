<?php
    //this is the file being accessed
    require_once(__DIR__ . "/../model/config.php");

$query = $_SESSION["connection"]->query("CREATE TABLE users ("
        . "id int(11) NOT NULL AUTO_INCREMENT,"
        //stating the username max is thirty characters
        . "username varchar(30) NOT NULL,"
        //stating the email max is fifty characters 
        . "email varchar(50) NOT NULL,"
        //stating the password max is one-hundred twenty-eight characters
        . "password char(128) NOT NULL,"
        //the encrypted password is one-hundred twenty-eight characters as well 
        . "salt char(128) NOT NULL,"
        . "exp int(4),"
        . "exp1 int(4),"
        . "exp2 int(4),"
        . "exp3 int(4),"
        . "exp4 int(4),"
        . "PRIMARY KEY(id))");

