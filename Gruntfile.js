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
		htmlmin: {
			options: {
			removeComments: true,
			collapseWhitespace: true
			},
			compile: {
				files: {
				'**/*.html': '**/fixtures/*.html'
				}
			},
			empty: {
				files: {
				'tmp/idontexist.html': 'test/fixtures/idontexist.html'
				}
			}
		},
		watch: {
			files: ['/src/js/*.js'],
			tasks: ['uglify']
		},
		uglify: {
			dist: {
			  	options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			  	},
			  	build: {
					src: 'comverse/src/js/<%= pkg.name %>.js',
					dest: 'build/<%= pkg.name %>.min.js'
				} 
			}
		}
	})

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);
  //grunt.registerTask('dist', ['buildhtml:dist']);
  //grunt.registerTask('default', ['htmlbuild']);

};
