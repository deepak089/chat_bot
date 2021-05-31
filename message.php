<?php 

$conn=mysqli_connect("localhost","root","","chat_bot") or die();
// getting msg form ajax
$getmsg=mysqli_real_escape_string($conn,$_POST['text']);
// checking user query to database
$check_data="SELECT replies FROM data WHERE queries LIKE '%$getmsg%'";
$result=mysqli_query($conn,$check_data);

if(mysqli_num_rows($result)>0){
$fetch_reply=mysqli_fetch_assoc($result);
    $replay=$fetch_reply['replies'];
    echo $replay;
}

else{
echo 'Sorry!! unable to understand ';
}
?>