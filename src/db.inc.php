<?php
    // $dbServerName = "shareddb-h.hosting.stackcp.net";
    // $dbUserName = "trainingdb-3331d1ec";
    // $dbPassword = "2znfigegap";
    // $dbName = "trainingdb-3331d1ec ";

    $dbServerName = "localhost";
    $dbUserName = "root";
    $dbPassword = "root";
    $dbName = "training_db";

    $link = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);
    if (!$link) {
        die("Connection failed ".mysqli_connect_error());
    }

