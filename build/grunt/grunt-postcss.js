module.exports = function(grunt) {

	var paths = grunt.config.get('paths');

	grunt.config.set(
		'postcss',
		{
			options: {
				map: false, // inline sourcemaps
				processors: [
					require('postcss-preset-env')({
						browsers: 'last 2 versions',
					})
				]
			},
			dist: {
				src: paths.dest + '/style.css'
			}
		}
	);
	grunt.loadNpmTasks('grunt-postcss');
};
