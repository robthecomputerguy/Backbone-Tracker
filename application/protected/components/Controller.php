<?php

class Controller extends CController {
	public function sendError($message) {
		header('500 Internal Server Error');
		echo $message;
		exit;
	}

	public function send($message) {
		echo CJSON::encode($message);
		exit;
	}

	public function getJsonData() {
		return json_decode(file_get_contents('php://input'), true);
	}
}