module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['*'],
                        dest: 'app/',
                        filter: 'isFile'
                    }, {
                        expand: true,
                        cwd: 'src/js',
                        src: ['main.js'],
                        dest: 'app/js',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'src/assets/img',
                        src: ['*'],
                        dest: 'app/assets//img',
                        filter: 'isFile'
                    }
                ]

            }
        },

        concat: {
            dist: {
                src: [
                  'bower_components/jquery/dist/jquery.min.js',
                  'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
                ],
                dest: 'app/js/complete.js'
            }
        },


        uglify: {
            my_target: {
                files: {
                    'app/js/complete.js': ['app/js/complete.js']
                }
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded',
                    'sourcemap': 'none',
                    'style': 'compressed'

                },
                files: { // Dictionary of files
                    'app/css/main.css': 'src/scss/main.scss'

                }

            }
        },



        watch: {

            css: {
                files: ['src/scss/main.scss'],
                tasks: ['sass'],
            },

            html: {
                files: ['src/*'],
                tasks: ['copy'],
            },

            js: {
                files: ['src/js/main.js'],
                tasks: ['copy'],
            },

            img: {
                files: ['src/assets/img/*'],
                tasks: ['copy'],
            }

        }
    });



    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['copy', 'concat', 'uglify', 'sass' ]);
};
