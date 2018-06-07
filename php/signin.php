<?php
include 'public.php';
//接收客户端传递的数据
$uname = $_POST['uname'];
$pwd = $_POST['pwd'];
// $sql ="SELECT * WHERE name = $uname";
$sql ="SELECT `pwd`FROM `sign` WHERE uname = $uname";
$row = mysql_query($sql);
// $arr=mysql_fetch_array($row)
if($row){
    echo "1";
}else{
    echo "0";
}
