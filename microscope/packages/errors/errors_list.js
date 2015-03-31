Template.itrydoErrors.helpers({
    errors: function() {
        return ItrydoErrors.collection.find();
    }
});

Template.itrydoError.rendered = function() {
    var error = this.data;
    Meteor.setTimeout(function () {
        ItrydoErrors.collection.remove(error._id);
    }, 3000);
};