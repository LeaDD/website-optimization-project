module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        //LINT JAVASCRIPT
        jshint: {
            all: [
            'Gruntfile.js',
            'src/**/*.js']
        },
        //MINIFY JAVASCRIPT
        uglify: {
            dist: {
                files: [{
                    'dist/js/perfmatters.js': 'src/js/perfmatters.js',
                    'dist/views/js/main.js' : 'src/views/js/main.js'
                }]
            }
        },
        //MINIFY CSS
        cssmin: {
            dist: {
                files: {
                    'dist/css/style.css': 'src/css/style.css',
                    'dist/css/print.css': 'src/css/print.css',
                    'dist/views/css/bootstrap-grid.css': 'src/views/css/bootstrap-grid.css',
                    'dist/views/css/style.css': 'src/views/css/style.css'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html',
                    'dist/project-2048.html': 'src/project-2048.html',
                    'dist/project-mobile.html': 'src/project-mobile.html',
                    'dist/project-webperf.html': 'src/project-webperf.html',
                    'dist/views/pizza.html': 'src/views/pizza.html'
                }
            }
        },
        //CLEAR IMAGES FROM THE IMAGE DIRECTORIES
        clean: {
            dist: {
                src: ['dist/img/*.{gif,jpg,png}','dist/views/images/*.{gif,jpg,png}']
            }
        },
        //RESIZE IMAGES
        responsive_images: {
            dist: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 100,
                        quality: 25},
                        {
                        width: 500,
                        quality: 25}]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'src/img',
                    dest: 'dist/img'
                },{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'src/views/images',
                    dest: 'dist/views/images'
                }]
            }
        }
    });


    grunt.registerTask('default',
        ['jshint',
        'uglify',
        'cssmin',
        'htmlmin',
        'clean',
        'responsive_images']);
};