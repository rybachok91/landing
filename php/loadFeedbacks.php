<?php


$feedbacks["Ivanov"] = array("photo"=>"IMAGE1", "name"=>"NIF-NIF", "feedback"=>"la");
$feedbacks["Pypkin"] = array("photo"=>"IMAGE2", "name"=>"NAF-NAF", "feedback"=>"la la");
$feedbacks["Grozniy"] = array("photo"=>"IMAGE3", "name"=>"NYF-NYF", "feedback"=>"la la la");

echo json_encode($feedbacks);

//echo $feedbacks["Ivanov"]["photo"]."<br>";
//echo $feedbacks["Pypkin"]["name"]."<br>";
//echo $feedbacks["Grozniy"]["feedback"]."<br>";