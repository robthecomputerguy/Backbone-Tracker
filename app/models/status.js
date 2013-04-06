window.Status = Backbone.RelationalModel.extend({
    urlRoot:"application/status",
    defaults:{
        "id":null,
        "title":"",
        "class": "",
        "style": ""
    }
});

window.StatusCollection = Backbone.Collection.extend({
    model:Status,
    url:"application/status"
});