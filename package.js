Package.describe({
  name: 'comerc:autoform-selectize',
  summary: 'Custom "selectize" input type for AutoForm',
  version: '2.2.2',
  git: 'https://github.com/comerc/meteor-autoform-selectize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'templating',
    'blaze',
    'aldeed:autoform'
  ]);

  api.addFiles([
    'autoform-selectize.html',
    'autoform-selectize.js',
    'autoform-selectize-input.html',
    'autoform-selectize-input.js',
    'themes/bootstrap3.css',
  ], 'client');
});
