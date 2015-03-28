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
			tasks: ['validation']
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
		},
		validation: {
			options: {
					reset:true
					},
			files: {
				src: ['*.html']
			}
		}
	})

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'validation']);
  //grunt.registerTask('dist', ['buildhtml:dist']);
  //grunt.registerTask('default', ['htmlbuild']);

};
