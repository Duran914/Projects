<?php
session_start();

$conn = mysqli_connect("localhost", "root", "root", "Tsarbucks");

$error=''; //variable to Store error message;
if(isset($_POST['submit'])){
 if(isset($_POST['username']) && isset($_POST['password'])){
 //Define username password
 $username=$_POST['username'];
 $password=$_POST['password'];
 //select db
 $db = mysqli_select_db($conn, "Tsarbucks");
 //sql info
 $query = mysqli_query($conn, "SELECT * FROM baristas WHERE password='$password' AND username='$username' LIMIT 1");

 $rows = mysqli_num_rows($query);
 if($rows == 1){
 header("Location: Barista_home.php");
 }
 else
 {
 $error = "Username or Password is Invalid";
 }
 mysqli_close($conn);
 }
}

?>
