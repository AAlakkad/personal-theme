module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			bs: {
				files: "bower_components/sass-bootstrap/lib/*.scss",
				tasks: ["sass:bs"],
				options: {
					livereload: true
				}
			},
			dist: {
				files: "dist/scss/*.scss",
				tasks: ["sass:dist"],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: "expanded"
				},
				files: {
					'assets/css/style.css': 'dist/scss/style.scss'
				}
			},
			bs: {
				files: {
					'assets/css/bootstrap.css': 'bower_components/sass-bootstrap/lib/bootstrap.scss'
				}
			},
			fa: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/css/font-awesome.css': 'bower_components/font-awesome/scss/font-awesome.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch:dist']);
};