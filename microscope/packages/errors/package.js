Package.describe({
  name: 'itrydo:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A pattern to display application errors to the user',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.5');
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
    api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js', 'errors_list.css'], 'client');

    if (api.export)
        api.export('ItrydoErrors');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], 'client');
  api.use('itrydo:errors', 'client');
  api.addFiles('errors-tests.js', 'client');
});
