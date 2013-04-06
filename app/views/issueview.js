window.IssueView = Backbone.View.extend({
    initialize:function () {
        this.template = _.template(tpl.get('issue-view'));
        this.model.bind("change", this.render, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template({issue: this.model, statuses: app.statusList }));
        return this;
    },

    events:{
        "click .delete":"deleteIssue"
    },

    deleteIssue:function () {
        this.model.destroy({
            success:function () {
                alert('Issue deleted successfully');
                app.navigate('/', true);
            },
            error: function(model, response) {
                alert(response.responseText);
                return false;
            }
        });
        return false;
    }

});