<?php

return array(
	'name'=>'Issue Tracker',
	'defaultController'=>'issue',
	'import'=>array(
	      'application.models.*',
	  ),
	'components'=>array(
		'urlManager'=>array(
			'urlFormat'=>'path',
			'rules'=>array(
				array('issue/add', 'pattern'=>'issue', 'verb' => 'POST'),
				array('issue/update', 'pattern'=>'issue/<id:\d+>', 'verb' => 'PUT'),
				array('issue/list', 'pattern'=>'issue', 'verb' => 'GET'),
				array('issue/delete', 'pattern'=>'issue/<id:\d+>', 'verb' => 'DELETE'),
			),
		),
		'db'=>array(
            'class'=>'CDbConnection',
            'connectionString'=>'mysql:host=localhost;dbname=tracker',
            'username'=>'root',
            'password'=>'',
        ),
	),
);