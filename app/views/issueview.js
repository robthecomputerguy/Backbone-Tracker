window.IssueView = Backbone.View.extend({
    initialize:function () {
        this.template = _.template(tpl.get('issue-view'));
        this.model.bind("change", this.render, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    events:{
        "click .delete":"deleteIssue"
    },

    deleteIssue:function () {
        this.model.destroy({
            success:function () {
                alert('Issue deleted successfully');
                window.history.back();
            },
            error: function(model, response) {
                alert(response.responseText);
                return false;
            }
        });
        return false;
    }

});