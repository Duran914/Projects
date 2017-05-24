<?php
session_start();

$conn = mysqli_connect("localhost", "root", "root", "Tsarbucks");
$sql1 = 'INSERT INTO CustOrders (Product_id, Product_name, Size, Price) VALUES ("'.$row['product_id'].'","'.$row['display_name'].'","'.$row['size'].'","'.$row['price'].'")';
mysqli_query($conn, $sql1);
header('location: Cart.php');
unset($_SESSION['cart']);
 ?>
