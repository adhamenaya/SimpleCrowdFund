<?php
      require('includes/config.php');  
	  	$data = array();
		try {
				$stmt = $db->prepare('SELECT id,case_id, title, cost,cost_collected,task_done_percent FROM case_to_do WHERE case_id = :caseId');
				$stmt->execute(array(':caseId' => $_GET['id']));
				$row = $stmt->fetch();
				$error = false;
				$message = "ok";				
 				    array_push($data, [
					  'id'   => $row['id'],
					  'case_id' => $row['case_id'],
					  'title' => $row['title'],
					  'cost' => $row['cost'],
					  'cost_collected' => $row['cost_collected'],
					  'cost_collected_percent' => (double)$row['cost_collected']/(double)$row['cost']*100,
					  'task_done_percent' => $row['task_done_percent']
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
