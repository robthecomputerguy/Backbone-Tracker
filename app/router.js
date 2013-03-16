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
            "issue/:id":"viewIssue",
            "":"list",
        },

        list:function () {
            this.before(function () {
                this.issueList = new IssueCollection();
                this.issueListView = new IssueListView({model:this.issueList});
                this.issueList.fetch();
                app.showView('#content', new IssueListView({model:this.issueList}));
            });
        },

        viewIssue:function (id) {
            this.before(function () {
                var issue = app.issueList.get(id);
                app.showView('#content', new IssueView({model:issue}));
            });
        },

        addIssue:function () {
            this.before(function () {
                app.showView('#content', new IssueView({model:new Issue()}));
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
            if (this.issueList) {
                if (callback) callback();
            } else {
                this.issueList = new IssueCollection();
                this.issueListView = new IssueListView({model:this.issueList});
                this.issueList.fetch();
                $('#content').html(this.issueListView.render().el);
            }
        }

    });

    tpl.loadTemplates(['header', 'issue-details', 'issue-item', 'issues-list'], function () {
        app = new AppRouter();
        Backbone.history.start();
    });
