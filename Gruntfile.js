
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
            }
        },
        mochacli: {
            options: {
                require: ['should'],
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
        }
    });

    grunt.registerTask('test', ['jshint:test', 'mochacli']);
};