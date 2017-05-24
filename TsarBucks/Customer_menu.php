<?php
session_start();
$conn = mysqli_connect("localhost", "root", "root", "Tsarbucks");
 ?>
<!doctype html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<meta charset="UTF-8">
<title>menu</title>
</head>
<body>
<div class="topnav" id="myTopnav">
  <a>Tsarbucks</a>
  <a href="Customer_home.php">Home</a>
  <a>Menu</a>
  <a href="Customer_orders.php">My Orders</a>
  <a href="Cart.php">My Cart</a>
  <a href="logout.php">Log-Out</a>
</div>
  <h1>Menu

  </h1>
  <table>
      <thead>
            <tr>
                <th>Product Name</th>
                <th>Oz&nbsp</th>
                <th>Price&nbsp</th>
            </tr>
      </thead>
<?php

$sql = "SELECT * FROM products ORDER BY product_id ASC";
$result = mysqli_query($conn, $sql);

    while($row = mysqli_fetch_assoc($result)){

?>
    <tr>
        <td><?php echo $row['display_name'];?></td>
        <td><?php echo $row['size'];?></td>
        <td><?php echo $row['price'];?></td>
        <td><a href="addtocart.php?product_id=<?php echo $row['product_id']; ?>">Add to cart</a></td>
    </tr>

<?php
// }
}
  ?>
  </table>

    </body>
    </html>
