<?php

class IssueController extends CController
{
	public function actionList() {
		// Get all issues
		$issues = Issue::model()->findAll();
		$this->send($issues);
	}

	public function actionAdd() {
		// Init
		$data = $this->getJsonData();
		// Store new element
		$issue = new Issue;
		$issue->setAttributes($data);
		if(!$issue->save()) {
			$errors = array();
			foreach($issue->getErrors() as $err) {
				$errors[] = implode("\n", $err);
			}
			$this->sendError(implode("\n", $errors));
		}

		// Success
		$this->send($issue);
	}

	public function actionUpdate($id) {
		// make sure we have that id
		$issue = Issue::model()->findByPk($id);
		if(!$issue) {
			$this->sendError("Sorry, That issue was not found.");
		}

		// Init
		$data = $this->getJsonData();

		$issue->setAttributes($data);
		if(!$issue->save()) {
			$errors = array();
			foreach($issue->getErrors() as $err) {
				$errors[] = implode("\n", $err);
			}
			$this->sendError(implode("\n", $errors));
		}

		// Success
		$this->send($issue);
	}

	public function actionDelete($id) {
		// make sure we have that id
		$issue = Issue::model()->findByPk($id);
		if(!$issue) {
			$this->sendError("Sorry, That issue was not found.");
		}

		$issue->delete();

		$this->send("");
		exit;
	}

	public function actionView() {
		
	}

	protected function sendError($message) {
		header('500 Internal Server Error');
		echo $message;
		exit;
	}

	protected function send($message) {
		echo CJSON::encode($message);
		exit;
	}

	protected function getJsonData() {
		return json_decode(file_get_contents('php://input'), true);
	}
}