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
<<<<<<< HEAD

  grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
=======
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Default task(s).
>>>>>>> f9fc8cab9947458f9323738e4a3569d33924301e
  grunt.registerTask('default', ['jshint', 'uglify']);
  //grunt.registerTask('dist', ['buildhtml:dist']);
  //grunt.registerTask('default', ['htmlbuild']);

};
