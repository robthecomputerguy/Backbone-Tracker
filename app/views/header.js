window.HeaderView = Backbone.View.extend({

    initialize:function () {
        this.template = _.template(tpl.get('header'));
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "click .new": "addIssue",
        "click .list": "viewIssues",
    },

    addIssue:function (event) {
        app.navigate("issue/add", true);
        return false;
    },
    viewIssues:function (event) {
        app.navigate("/", true);
        return false;
    }

});