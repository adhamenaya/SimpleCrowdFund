<?php
      require('includes/config.php');  
	  	$data = array();
		
		try {
				$stmt = $db->query('SELECT id, title, details, image_url,add_date FROM case0');
				$error = false;
				$message = "ok";
				$i=0;
 				while($row = $stmt->fetch()){
				
 			
				    array_push($data, [
					  'id'   => $row['id'],
					  'title' => $row['title'] ,
					  'details' => $row['details'] ,
					  'image_url' => $row['image_url'] ,
					  'add_date' => $row['add_date'] 
					]);
					
				}
			} catch(PDOException $e) {
				$message = $e->getMessage();
				$error = true;
			}
    $response = array();
    $response["data"] = $data;
    $response["error"] = $error;
    $response["message"] = $message;
	
	header('Content-Type: application/json');
	
	echo json_encode($response);
 ?>
