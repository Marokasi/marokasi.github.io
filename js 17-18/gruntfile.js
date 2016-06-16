module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'css/style.css': 'sass/style.scss',
                    'css/reset.css': 'sass/reset.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/style.min.css': ['css/reset.css', 'css/style.css']
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.js'
            }

        },
        uglify: {
            dist: {
                src: ['js/dist/script.main.js'],
                dest: 'js/dist/script.main.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default', ['sass','cssmin', 'concat', 'uglify']);

};
