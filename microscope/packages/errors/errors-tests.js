// Write your tests here!
// Here is an example.
Tinytest.add("Errors - collection", function(test) {
    test.equal(ItrydoErrors.collection.find({}).count(), 0);

    ItrydoErrors.throw('A new error!');
    test.equal(ItrydoErrors.collection.find({}).count(), 1);

    ItrydoErrors.collection.remove({});
});

Tinytest.addAsync("Errors - template", function(test, done) {
    ItrydoErrors.throw('A new error!');
    test.equal(ItrydoErrors.collection.find({}).count(), 1);

    // render the template
    UI.insert(UI.render(Template.itrydoErrors), document.body);

    Meteor.setTimeout(function() {
        test.equal(ItrydoErrors.collection.find({}).count(), 0);
        done();
    }, 3500);
});