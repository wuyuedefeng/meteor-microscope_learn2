// Write your tests here!
// Here is an example.
Tinytest.add("Errors - collection", function(test) {
    test.equal(SenInfos.collection.find({}).count(), 0);

    SenInfos.showError('A new error!');
    test.equal(SenInfos.collection.find({}).count(), 1);

    SenInfos.collection.remove({});
});

Tinytest.addAsync("Errors - template", function(test, done) {
    SenInfos.showError('A new error!');
    test.equal(SenInfos.collection.find({}).count(), 1);

    // render the template
    UI.insert(UI.render(Template.senInfos), document.body);

    Meteor.setTimeout(function() {
        test.equal(SenInfos.collection.find({}).count(), 0);
        done();
    }, 3500);
});