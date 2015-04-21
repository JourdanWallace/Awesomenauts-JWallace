<?php
    require_once(__DIR__ . "/../model/config.php");
    //this is the file being accessed
    function authenticateUser() {
        //the user can go through and create posts
        if(!isset($_SESSION["authenticated"])) {
            return false;
        }
        else {
            //if the user cannot go through
            if($_SESSION["authenticated"] != true) {
               return false; 
            }
            else{
               return true;
            }
        }
    }
