<?php
    //this is the file being accessed
    require_once(__DIR__ . "/../model/config.php");
        //creates a new table called posts
$query = $_SESSION["connection"]->query("CREATE TABLE posts ("
        //there absolutely has to be an id
        . "id int(11) NOT NULL AUTO_INCREMENT,"
        //there has to be an title
        . "title varchar(255) NOT NULL,"
        . "post text NOT NULL,"
        . "PRIMARY KEY (id))");

if ($query) {
    //Telling the user that the table called posts was successfully created  
    echo "<p>Successfully created table: posts</p>";
 }  
 else {
     //If there is something wrong with the blog, tell the user where
    echo "<p>" . $_SESSION["connection"]->error ."</p>";
}
        //Creating a new table called users
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
        . "PRIMARY KEY(id))");

if ($query) {
    //Letting the user know the new table users was successfully created
    echo "<p>Successfully created table: users</p>";
 }  
 else {
    echo "<p>" . $_SESSION["connection"]->error ."</p>";
}
