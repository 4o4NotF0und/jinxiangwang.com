<?php
include 'public.php';
//接收客户端传递的数据
$uname = $_POST['uname'];
$pwd = $_POST['pwd'];
$tel = $_POST['tel'];

//4.编写sql语句
$sql = "INSERT INTO `sign`( `uname`, `pwd`, `tel`) VALUES ('$uname',$pwd,$tel)";
//5.执行sql语句
$row = mysql_query($sql);

echo "$row";