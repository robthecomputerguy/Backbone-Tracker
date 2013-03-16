<?php

class Issue extends CActiveRecord {
    public static function model($className=__CLASS__) {
        return parent::model($className);
    }
 
    public function tableName() {
        return 'issue';
    }

    public function rules() {
	    return array(
	        array('title', 'required'),
	        array('title', 'length', 'min' => 3, 'max' => 55),
	        array('description', 'safe')
	    );
	}
}