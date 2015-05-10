// Write your package code here!
SenInfos = {
    // Local (client-only) collection
    collection: new Mongo.Collection(null),

    showError: function(message) {
        SenInfos.collection.insert({message: message, seen: false, type:'error'})
    },
    showSuccess:function(message){
        SenInfos.collection.insert({message: message, seen: false, type:'success'});
    },
    showWarning:function(message){
        SenInfos.collection.insert({message: message, seen: false, type:'warning'});
    }
    //showInfo:function(message){
    //    SenInfos.collection.insert({message: message, seen: false, type:'info'});
    //}
};