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
		},
		validation: {
			options: {
				reset: grunt.option('reset') || false,
				stoponerror: false,
				remotePath: 'http://decodize.com/',
				remoteFiles: ['html/moving-from-wordpress-to-octopress/',
							  'css/site-preloading-methods/'], //or 
				remoteFiles: 'validation-files.json', // JSON file contains array of page paths. 
				relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors 
			},
			files: {
				src: ['<%= yeoman.app %>/*.html',
					  '!<%= yeoman.app %>/index.html',
					  '!<%= yeoman.app %>/modules.html',
					  '!<%= yeoman.app %>/404.html']
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
