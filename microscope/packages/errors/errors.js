// Write your package code here!
ItrydoErrors = {
    // Local (client-only) collection
    collection: new Mongo.Collection(null),

    throw: function(message) {
        ItrydoErrors.collection.insert({message: message, seen: false})
    }
};