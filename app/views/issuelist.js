window.IssueListView = Backbone.View.extend({
    initialize:function () {
        this.model.bind("reset", this.render, this);
        var self = this;
        this.model.bind("add", function (issue) {
            $(self.el).append(new IssueListItemView({model:issue}).render().el);
        });
        this.model.on('change', this.render, this);
    },

    render:function (eventName) {
        this.template = _.template(tpl.get('issues-list'));
        $(this.el).html(this.template({issues: this.model.models}));
        return this;
    }
});

window.IssueListItemView = Backbone.View.extend({

    tagName:"tr",

    initialize:function () {
        this.template = _.template(tpl.get('issue-item'));
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});