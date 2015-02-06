Package.describe({
  name: 'comerc:autoform-selectize',
  summary: 'Custom "selectize" input type for AutoForm',
  version: '2.2.0',
  git: 'https://github.com/comerc/meteor-autoform-selectize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0');
  api.addFiles([
    'autoform-selectize.html',
    'autoform-selectize.js',
    'autoform-selectize-input.html',
    'autoform-selectize-input.js',
    'themes/bootstrap3.css',
  ], 'client');
});
