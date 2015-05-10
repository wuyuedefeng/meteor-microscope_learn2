Package.describe({
  name: 'wuyuedefeng:seninfos',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '为应用显示应用程序信息(alert-error,alert-success,alert-warning)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wuyuedefeng/meteor-microscope_learn2/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.5');
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
    api.addFiles(['sen_infos.js', 'sen_infos_list.html', 'sen_infos_list.js', 'sen_infos_list.css'], 'client');

    if (api.export)
        api.export('SenInfos');
});

//Package.onTest(function(api) {
//  api.use(['tinytest', 'test-helpers'], 'client');
//  api.use('seninfos', 'client');
//  api.addFiles('sen_infos-tests.js', 'client');
//});
