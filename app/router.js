// Destroy Views
Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

// Backbone Router
var AppRouter = Backbone.Router.extend({
    initialize:function () {
        $('#header').html(new HeaderView().render().el);
    },

    routes:{
        "issue/add":"addIssue",
        "issue/edit/:id":"editIssue",
        "issue/:id":"viewIssue",
        "":"list",
    },

    list:function () {
        console.log('List Route');
        this.before(function () {
            this.issueList = new IssueCollection();
            this.issueListView = new IssueListView({model:this.issueList});
            this.issueList.fetch();
            app.showView('#content', new IssueListView({model:this.issueList}));
        });
    },

    editIssue:function (id) {
        console.log('Edit Issue Route ' + id);
        this.before(function () {
            var issue = app.issueList.get(id);
            app.showView('#content', new IssueEdit({model:issue}));
        });
    },

    viewIssue:function (id) {
        console.log('View Issue Route ' + id);
        this.before(function () {
            var issue = app.issueList.get(id);
            app.showView('#content', new IssueView({model:issue}));
        });
    },

    addIssue:function () {
        console.log('Add Issue Route');
        this.before(function () {
            app.showView('#content', new IssueEdit({model:new Issue()}));
        });
    },

    showView:function (selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },

    before:function (callback) {
        if(!this.issueList) {
            this.issueList = new IssueCollection();
            this.issueListView = new IssueListView({model:this.issueList});
            this.issueList.fetch({
                success: function(coll, resp) {
                  if(callback) {
                    callback();
                  }
                }});
        } else {
            if(callback) {
                callback();
            }
        }
    }

});

tpl.loadTemplates(['header', 'issue-details', 'issue-item', 'issues-list', 'issue-view'], function () {
    app = new AppRouter();
    Backbone.history.start();
});