<?php
include ("B_log.php");
?>
<!doctype html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<meta charset="UTF-8">
<title>Login</title>
</head>
<body>
<div class="topnav" id="myTopnav">
  <a>Tsarbucks</a>
  <a>Home</a>
</div>
<div class="login">
<h1> Barista Login</h1>
<form action="" method="post">
<input type="text" placeholder="Username" id="username" name="username"><br/><br/>
<input type="password" placeholder="Password" id="password" name="password"><br/><br/>
<input type="submit" value="Login" name="submit">
</form>
</div>
<span><?php echo $error; ?></span>
</body>
</html>
