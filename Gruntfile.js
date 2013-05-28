var appDir  = ['server.js',
                'app.js',
                'app/{,*/}*.js'],
    testDir = ['test/*.js'],
    allDir  = appDir.concat(testDir);

module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            app : {
                src : appDir
            },
            test : {
                src : ['test/*.js']
            }
        },
        watch: {
            test: {
                files: ['test/*.js'],
                tasks: ['jshint:test', 'mochacli']
            },
            app: {
                files: appDir,
                tasks: ['jshint:app', 'mochacli']
            },
            all: {
                files: allDir,
                tasks: ['jshint:app', 'jshint:test', 'mochacli']
            },
            stylus: {
                files: ['app/assets/stylesheets/{,*/}*.styl'],
                tasks: ['stylus']
            }
        },
        mochacli: {
            options: {
                require: ['test/connection_test','should'],
                bail: true,
                debug: true,
                reporter: 'spec'
            },
            all: ['test/*.js']
        },
        stylus: {
            compile: {
                options: {
                    compress: true,
                    use: [require('fluidity')]
                },
                files: {
                    'public/css/main.css': 'app/assets/stylesheets/main.styl'
                }
            }
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'public/app/scripts',
                    dir: 'public/dist',
                    mainConfigFile: 'public/app/scripts/main.js',
                    name: 'main',
                    optimize: 'uglify'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['public/dist']
                }]
            },
            rjs: {
                files: [{
                    dot: true,
                    src: ['public/dist/vendor',
                          'public/dist/views',
                          'public/dist/build.txt',
                          'public/dist/collections',
                          'public/dist/model',
                          'public/dist/templates']
                }]
            }
        }
    });

    grunt.registerTask('test', ['jshint:test', 'mochacli']);
    grunt.registerTask('build', ['requirejs', 'clean:rjs']);
};