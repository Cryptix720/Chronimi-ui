var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'chronimi:ui-css',
  summary : 'chronimi- CSS Release of Chronimi',
  version : '1.0.0',
  git     : 'git://github.com/chronimi.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  api.addFiles([
    // icons
    'subject/assets/fonts/icons.eot',
    'subject/assets/fonts/icons.svg',
    'subject/assets/fonts/icons.ttf',
    'subject/assets/fonts/icons.woff',
    'subject/assets/fonts/icons.woff2',

    // flags
    'subject/assets/images/flags.png',

    // release
    'chronimi.css',
	'chronimi.min.css',
	'chronimi.min.js',
    'chronimi.js'
  ],

  'client');

});
