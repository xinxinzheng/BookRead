
  module.exports = function(grunt){

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		uglify:{
			options:{
				stripBanners:true,
				banner: '/*! <%= pkg.name %>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			},
			build:{
				// src:['static/js/*.js'],
				// dest:'build/js/<%= pkg.name %>-<%= pkg.version %>.min.js',
				files:{
					'build/js/angular.min.js':'static/js/angular.js',
					'build/js/jquery-3.1.1.min.js':'static/js/jquery-3.1.1.js',
				}
			},
		},

		jshint:{
			options:{},
			build:['Gruntfile.js','static/js/*.js'],
		},

		csslint:{
			options:{},
			build:['Gruntfile.js','build/css/**/*..css'],
		},

		watch: {
            options: {
                livereload: true
            },
            build: {
                files: ['static/less/**/*.less','static/js/*.js'],
                tasks: ['less','jshint'],
                options: {
                    spawn: false,
                },
            },
        },

		less: {
            build: {
                // src: 'static/less/*.less',
                // dest: 'build/css/*.css',
                files:{
                	'build/css/test.css':'static/less/test.less'
                },
            }
        },

        concat: {
    		options: {
      			separator: ';',
      			stripBanners: true,
      			banner: '/*! hello - v1.2.3 - 2014-2-4 */'
    		},
    		build: {
      			src: ['a.js', 'b.js', 'c.js'],
      			dest: 'all.js',
    		},
  		},

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['uglify','less','jshint','concat','watch']);
  };