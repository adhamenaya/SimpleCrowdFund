<?php
    require('includes/config.php');  
	
	$data = json_decode(file_get_contents('php://input'), true);
	$error = true;
	$email=$data['email'];  
	$subject=$data['subject'];
	$topic=$data['topic'];  
	$details=$data['details'];
	
		if($email =='' || $email ==null || $email == ' '){
			$message = 'Please enter the email.';
		}
		else if($subject =='' || $subject ==null || $subject == ' '){
			$message = 'Please enter the subject.';
		}
		else if($details =='' || $details==null || $details == ' '){
			$message = 'Please enter the details.';
		}
		else {
		
				try {

				//insert into database
				$stmt = $db->prepare('INSERT INTO contact (email,subject,details) VALUES (:email, :subject, :details)') ;
				$result = $stmt->execute(array(
					':email' => $email,
					':subject' => $subject,
 					':details' => $details
				));
				if($result){	
					$message = "You have successfully registered.";
					$error = false;
				}
				else {
					$message = "Error!";
					$error = true;
				}
				
			} catch(PDOException $e) {
				$message = $e->getMessage();
				$error = true;
			}
		}

    $response = array();
    $response["error"] = $error;
    $response["message"] = $message;
	
	header('Content-Type: application/json');
	
	echo json_encode($response);

?>

