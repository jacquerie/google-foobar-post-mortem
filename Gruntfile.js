module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      dist: {
        files: {
          'dist/css/application.min.css': ['dist/css/application.min.css']
        }
      }
    },

    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/application.min.js': ['src/js/*.js']
        }
      }
    },

    uncss: {
      dist: {
        files: {
          'dist/css/application.min.css': ['src/index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', [
    'uglify',
    'uncss',
    'cssmin',
    'processhtml',
  ]);
};
