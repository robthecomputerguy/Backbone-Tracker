window.Issue = Backbone.RelationalModel.extend({
    urlRoot:"application/issue",
    defaults:{
        "id":null,
        "title":"",
        "description": "",
        "issue_id": 0,
        "status":null
    },
    relations: [{
        type: Backbone.HasOne,
        key: 'status',
        relatedModel: 'window.Status',
        reverseRelation: {
            key: 'issue',
            includeInJSON: 'id',
        },
    }]
});

window.IssueCollection = Backbone.Collection.extend({
    model:Issue,
    url:"application/issue"
});

IssueCollection.bind('add', function() {
	console.log('Issue Collection Add');
});

IssueCollection.bind('remove', function() {
	console.log('Issue Collection Remove');
});

IssueCollection.bind('refresh', function() {
	console.log('Issue Collection Refresh');
});