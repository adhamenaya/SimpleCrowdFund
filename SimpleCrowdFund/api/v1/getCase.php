<?php
      require('includes/config.php');  
	  	$data = array();
		try {
				$stmt = $db->prepare('SELECT id, title, details, image_url,add_date FROM case0 WHERE id = :caseId');
				$stmt->execute(array(':caseId' => $_GET['id']));
				$row = $stmt->fetch();
				$error = false;
				$message = "ok";
				    $i=0;
				/*	$tags = explode(",",$row['tags']);	
					$finalTags = array();			
					foreach($tags as $item) {
						if($item != '' && $item != ' '){
							array_push($finalTags,strtolower(trim($item)));
						}
					}	*/
					
 				    array_push($data, [
					  'id'   => $row['id'],
					  'title' => $row['title'],
					  'details' => $row['details'],
					  'image_url' => $row['image_url'],
					  'add_date' => $row['add_date']
					]);
			 
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
