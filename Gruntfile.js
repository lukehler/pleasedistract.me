module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//	paths is just a variable for common storage during the build and templating process
		paths: {
			src: 'src',		// source directory for content
			dest: 'dest',	// final document root, symlink this into htdocs
			build: 'build',	// build directory for all the tooling to build the content
			tmp: 'tmp',		// tmp folder for generated content
			url: '/',		// if the site is in a subdirectory, put the server-relative path here (ie: '/subdir/') with a trailing slash.
		},

		// dataExport is a placeholder for dynamic data
		dataExport: './src/data/db.json'
	});

	// Load Grunt plugins.
	grunt.loadTasks( 'build/grunt' );

	// CSS task does the less preprocessing, adds any .css files, adds vendor prefixes, minifies (leaving a copy) and cleans up.
	grunt.registerTask(
		'css',
		[
			'less',
			'concat:css',
			'postcss',
			'cssmin',
			'clean:tmp'
		]
	);
	// JS task just concats and uglifies (leaving a copy)
	grunt.registerTask(
		'js',
		[
			'concat:js',
			'uglify'
		]
	);
	// HTML task reads markdown, copies assets, and cleans up.
	grunt.registerTask(
		'html',
		[
			'slice_front',
			'copy', // copying assets as a part of this step, too. Could be made a separate step of prod task
			'clean:tmp',
		]
	);

	// prod task could do some additional processing - like assembling libraries
	// For now, it just wipes out /dest/ completely and then does the same thing as default
	grunt.registerTask(
		'prod',
		[
			'clean:prod',
			'css',
			'js',
			'html',
		]
	);

	grunt.registerTask(
		'default',
		[
			'css',
			'js',
			'html',
		]
	)

//  watch not needed here, it is already adequately defined in its own file in the build folder.
// 	grunt.registerTask(
// 		'watch',
// 		[
// 			'watch'
// 		]
//  )


};
