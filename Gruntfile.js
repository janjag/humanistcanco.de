module.exports = function(grunt) {
    grunt.initConfig({
        
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 4 versions','> 5%']
                    })
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'css/partials/main.scss'
                }
            }
        },
        watch: {
            files: 'css/**/*.scss',
            tasks: ['sass', 'postcss:dist']
        }
    });
    
    
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
 
    grunt.registerTask('default', ['browserSync', 'watch']);
    
}; 