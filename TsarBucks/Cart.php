<?php
session_start();
$conn = mysqli_connect("localhost", "root", "root", "Tsarbucks");
?>

<!doctype html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<meta charset="UTF-8">
<title>Cart</title>
</head>
<body>
<div class="topnav" id="myTopnav">
  <a>Tsarbucks</a>
  <a href="Customer_home.php">Home</a>
  <a href="Customer_menu.php">Menu</a>
  <a href="Customer_orders.php">My Orders</a>
  <a>My Cart</a>
  <a href="logout.php">Log-Out</a>
</div>
<h1>My Cart</h1>
<table>

          <tr>
              <th>Product Name</th>
              <th>Oz&nbsp</th>
              <th>Price&nbsp</th>
          </tr>


 <?php
 $items = $_SESSION['cart'];
 $cartitems = explode(",", $items);
 	$total = '';
  $oz='';
 	foreach ($cartitems as $key=>$product_id) {
 	$sql = "SELECT * FROM products WHERE product_id = $product_id";
 	$result = mysqli_query($conn, $sql);
 	$row = mysqli_fetch_assoc($result);
 	?>
    <tr>
        <td><?php echo $row['display_name']; ?></td>
        <td><?php echo $row['size']; ?></td>
				<td><?php echo $row['price']; ?></td>
 	 	<td><a href="deletecart.php?remove=<?php echo $key; ?>">Remove</a></td>
 	 	</tr>
 	<?php
 	$total = $total + $row['price'];
  $oz = $oz + $row['size'];

 	}
 	?>
 	<tr>
 	<td><strong>Total Price</strong></td>
 	<td><strong>$<?php echo $total; ?></strong></td>
  </tr>

  <tr>
  <td><strong>Total Oz</strong></td>
  <td><strong><?php echo $oz; ?>oz</strong></td>
</tr>
</table>

<a href="Submit_order.php">SUBMIT</a>

</body>
</html>
