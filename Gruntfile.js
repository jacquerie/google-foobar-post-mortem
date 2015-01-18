module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        files: {
          'dist/favicon.ico': ['src/favicon.ico'],
          'dist/apple-touch-icon.png': ['src/apple-touch-icon.png']
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'dist/css/application.min.css': ['src/css/*.css']
        }
      }
    },

    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('default', [
    'copy',
    'cssmin',
    'processhtml',
  ]);
};
