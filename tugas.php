<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tugas PHP</title>
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="exl.css">
</head>

<body class="container mt-4">

<h2 class="text-center">Tugas PHP</h2>
<hr>

<!-- ========================= -->
<!-- TUGAS 1 -->
<!-- ========================= -->
<h4>1. Belajar PHP Hari ke-1 sampai 1000</h4>

<div class="bg-primary text-white p-3" style="height:200px; overflow:auto;">
<?php
for($i=1; $i<=1000; $i++){
    echo "$i. Ini adalah hari ke-$i belajar PHP <br>";
}
?>
</div>

<hr>

<a href="beranda.html" class="btn btn-dark">Kembali ke Beranda</a>

</body>
</html>
