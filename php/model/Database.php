<?php

class Database {
    //All the private functions that can only be called by certain variables
    private $connection;
    private $host;
    private $username;
    private $password;
    private $database;
    //the function that can be called by any variable
    public $error;
    //Put your username and password in the localhost and this will be stored in the database
    public function __construct($host, $username, $password, $database) {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;

        $this->connection = new mysqli($host, $username, $password);
        //Tells what the error is
        if ($this->connection->connect_error) {
            die("<p>Error: " . $this->connection->connect_error . "</p>");
        }
        //the database exists
        $exists = $this->connection->select_db($database);
        //the database already exists so this links to it
        if (!$exists) {
            $query = $this->connection->query("CREATE DATABASE $database");
            //Tells the user the database was successfully created
            if ($query) {
                echo "<p>Successfully created database: " . $database . "</p>";
            }
            //Tell the person the database exists so you don;t have to create a new one
        } else {
            echo "<p>Database already exists.</p>";
        }
    }
    //
    public function openConnection() {
        $this->connection = new mysqli($this->host, $this->username, $this->password, $this->database);
        //there is an error so the session is now closed
        if ($this->connection->connect_error) {
            die("<p>Error: " . $this->connection->connect_error . "</p>");
        }
    }
    public function closeConnection() {
        if (isset($this->connection)) {
            $this->connection->close();
        }
    }
    //the connection is open and if there is no error let the session run
    public function query($string) {
        $this->openConnection();

        $query = $this->connection->query($string);
        
        if(!$query) {
            $this->error = $this->connection->error;
        }
        //tell the program the connection is closed
        $this->closeConnection();

        return $query;
    }

}
