module.exports = function(grunt) {
    grunt.initConfig({
        
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/compiled.css': 'css/main.scss'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-sass');
 
    grunt.registerTask('default', ['sass']);
    
}; 