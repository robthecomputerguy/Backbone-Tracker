window.IssueEdit = Backbone.View.extend({
    initialize:function () {
        _.bindAll(this, 'change', 'saveIssue');
        this.template = _.template(tpl.get('issue-details'));
        this.model.bind("change", this.render, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    events:{
        "change input":"change",
        "click .save":"saveIssue"
    },

    change:function (event) {
        var target = event.target;
        console.log('changing ' + target.id + ' from: ' + target.defaultValue + ' to: ' + target.value);
        // You could change your model on the spot, like this:
        // var change = {};
        // change[target.name] = target.value;
        // this.model.set(change);
    },

    saveIssue:function () {
        this.model.set({
            title: $('#title').val(),
            description: $('#description').val()
        });
        if (this.model.isNew()) {
            var self = this;
            app.issueList.create(this.model, {
                success:function (model, response) {
                    console.log('Issue Saved');
                    app.navigate('/issue/' + self.model.id, true);
                }, 
                error: function(model, response) {
                    alert(response.responseText);
                    return false;
                }
            });
        } else {
            this.model.save();
            console.log('Issue Saved');
            app.navigate('/issue/' + this.model.id, true);
        }
        console.log('SaveIssue');
        return false;
    }

});