window.Issue = Backbone.Model.extend({
    urlRoot:"application/issue",
    defaults:{
        "id":null,
        "title":"",
        "description": ""
    }
});

window.IssueCollection = Backbone.Collection.extend({
    model:Issue,
    url:"application/issue"
});