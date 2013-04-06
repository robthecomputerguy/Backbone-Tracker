<?php

class IssueController extends Controller
{
	public function actionList() {
		// Get all issues
		$issues = Issue::model()->with(array('status'))->findAll();
		$list = array();
		foreach($issues as $r) {
			$list[] = array_merge($r->attributes, array('status' => $r->status->attributes));
		}
		$this->send($list);
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

		$issue = Issue::model()->with(array('status'))->findByPk($issue->id);
		$item = array_merge($issue->attributes, array('status' => $issue->status->attributes));

		// Success
		$this->send($item);
	}

	public function actionUpdate($id) {
		// make sure we have that id
		$issue = Issue::model()->with(array('status'))->findByPk($id);
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

		$issue = Issue::model()->with(array('status'))->findByPk($id);
		$item = array_merge($issue->attributes, array('status' => $issue->status->attributes));

		// Success
		$this->send($item);
	}

	public function actionDelete($id) {
		// make sure we have that id
		$issue = Issue::model()->findByPk($id);
		if(!$issue) {
			$this->sendError("Sorry, That issue was not found.");
		}

		$issue->delete();

		$this->send("");
	}
}