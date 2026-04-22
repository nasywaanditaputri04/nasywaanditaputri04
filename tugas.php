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
    
<!-- ========================= -->
<!-- TUGAS 2 -->
<!-- ========================= -->
<h4>2. Kalkulator</h4>

<form method="POST">
<input type="number" name="a" class="form-control mb-2" placeholder="Bilangan 1">
<input type="number" name="b" class="form-control mb-2" placeholder="Bilangan 2">

<select name="op" class="form-control mb-2">
    <option value="+">Tambah</option>
    <option value="-">Kurang</option>
    <option value="*">Kali</option>
    <option value="/">Bagi</option>
</select>

<button class="btn btn-success">Hitung</button>
</form>

<?php
if(isset($_POST['a'])){
    $a = $_POST['a'];
    $b = $_POST['b'];
    $op = $_POST['op'];

    if($op == "+") $hasil = $a + $b;
    elseif($op == "-") $hasil = $a - $b;
    elseif($op == "*") $hasil = $a * $b;
    elseif($op == "/") $hasil = ($b!=0)? $a/$b : "Tidak bisa dibagi nol";

    echo "<p class='mt-2'><b>Hasil: $hasil</b></p>";
}
?>

<hr>

<!-- ========================= -->
<!-- TUGAS 3 -->
<!-- ========================= -->
<h4>3. Login</h4>

<form method="POST">
<input type="text" name="user" class="form-control mb-2" placeholder="Username">
<input type="password" name="pass" class="form-control mb-2" placeholder="Password">

<button class="btn btn-primary">Login</button>
</form>

<?php
if(isset($_POST['user'])){
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    if(empty($user) || empty($pass)){
        echo "<p class='text-warning'>Input tidak lengkap</p>";
    }
    elseif($user == "admin" && $pass == "123"){
        echo "<p class='text-success'>Login sukses</p>";
    }
    else{
        echo "<p class='text-danger'>Login gagal</p>";
    }
}
?>

<hr>

<!-- ========================= -->
<!-- TUGAS 4 -->
<!-- ========================= -->
<h4>4. Data Mahasiswa (Simulasi Database)</h4>

<?php
$data = [
    ["nama"=>"Andi","nim"=>"001","jurusan"=>"TI","email"=>"andi@gmail.com"],
    ["nama"=>"Budi","nim"=>"002","jurusan"=>"SI","email"=>"budi@gmail.com"],
    ["nama"=>"Citra","nim"=>"003","jurusan"=>"MI","email"=>"citra@gmail.com"]
];
?>

<table class="table table-bordered">
<tr>
    <th>No</th>
    <th>Nama</th>
    <th>NIM</th>
    <th>Jurusan</th>
    <th>Email</th>
</tr>

<?php
$no=1;
foreach($data as $d){
    echo "<tr>
    <td>$no</td>
    <td>{$d['nama']}</td>
    <td>{$d['nim']}</td>
    <td>{$d['jurusan']}</td>
    <td>{$d['email']}</td>
    </tr>";
    $no++;
}
?>
</table>

<hr>

<a href="beranda.php" class="btn btn-dark">Kembali ke Beranda</a>

</body>
</html>

