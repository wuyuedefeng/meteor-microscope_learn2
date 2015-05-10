Template.senInfos.helpers({
    errors: function() {
        return SenInfos.collection.find();
    }
});

Template.senInfo.rendered = function() {
    var error = this.data;
    Meteor.setTimeout(function () {
        SenInfos.collection.remove(error._id);
    }, 3000);
};

Template.senInfo.helpers({
    senInfoAlertClass: function(){
        if(this.type === 'error'){
            return 'seninfo-alert alert-danger alert';
        }else if(this.type === 'warning'){
            return 'seninfo-alert alert-warning alert';
        }else if(this.type === 'success'){
            return 'seninfo-alert alert-success alert'
        }
    }}
);