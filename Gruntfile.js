module.exports = function(grunt) {

  // Project configuration.
  
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			dist: {
				option: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				build: {
					src: 'src/<%= pkg.name %>.js',
					dest: 'build/<%= pkg.name %>.min.js'
				} 
			}
		},
		buildhtml: {
			dist: {

			},
			build: {

			}
		},
		watch: {
			files: ['**/*.js'],
			tasks: ['uglify']
		},
		uglify: {
			dist: {
			  	options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			  	},
			  	build: {
					src: 'src/js/<%= pkg.name %>.js',
					dest: 'build/<%= pkg.name %>.min.js'
				} 
			}
		}
	})

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);
  //grunt.registerTask('dist', ['buildhtml:dist']);
  //grunt.registerTask('default', ['htmlbuild']);

};