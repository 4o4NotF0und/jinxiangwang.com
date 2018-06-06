<?php
	//设置字符集
	header('content-type:text/html;charset=utf-8');
	//1.连接数据库
	$db = mysql_connect("localhost","root","root"); //第一个参数：连接数据库的url地址，第二个参数：登录数据库的用户名，第三个参数：登录数据库的密码
	//2.选择数据库
	mysql_select_db('jinxiang',$db);//第一个参数：你先操作的数据库，第二个参数，数据库所在的地方
	//3.设置数据库的字符集
	mysql_query("set names utf-8");
?>