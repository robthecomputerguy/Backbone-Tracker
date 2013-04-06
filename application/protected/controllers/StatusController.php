<?php

class StatusController extends Controller {
	public function actionList() {
		$rows = Status::model()->findAll();
		$this->send($rows);
	}
}