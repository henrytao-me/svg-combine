module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-svg-combine');

  // Project configuration.
  grunt.initConfig({
    svgcombine: {
      files: {
        'svg-cache.html': ['input/*.svg'],
      },
    },
  });

  // Default task(s).
  grunt.registerTask('default', ['svgcombine']);

};