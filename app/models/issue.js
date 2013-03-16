window.Issue = Backbone.Model.extend({
    urlRoot:"/tracker/application/issue",
    defaults:{
        "id":null,
        "title":"",
        "description": ""
    }
});

window.IssueCollection = Backbone.Collection.extend({
    model:Issue,
    url:"/tracker/application/issue"
});