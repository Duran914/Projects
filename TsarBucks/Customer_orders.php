<?php
session_start();
$conn = mysqli_connect("localhost", "root", "root", "Tsarbucks");
 ?>
<!doctype html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<meta charset="UTF-8">
<title>Orders</title>
</head>
<body>
<div class="topnav" id="myTopnav">
  <a>Tsarbucks</a>
  <a href="Customer_home.php">Home</a>
  <a href="Customer_menu.php">Menu</a>
  <a>My Orders</a>
  <a href="Cart.php">My Cart</a>
  <a href="logout.php">Log-Out</a>
</div>
<h1>My Orders</h1>
<table>
    <thead>
          <tr>
              <th>Product Name</th>
              <th>Oz&nbsp</th>
              <th>Price&nbsp</th>
          </tr>
    </thead>
<?php

$sql = "SELECT * FROM CustOrders";
$result = mysqli_query($conn, $sql);

  while($row = mysqli_fetch_assoc($result)){

?>
  <tr>
     <td><?php echo $row['Product_id'];?></td>
      <td><?php echo $row['Product_name'];?></td>
      <td><?php echo $row['Size'];?></td>
      <td><?php echo $row['Price'];?></td>
  </tr>

<?php
// }
}
?>
</table>
</body>
</html>
