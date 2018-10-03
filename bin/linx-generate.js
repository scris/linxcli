#!/usr/bin/env node

const program = require('commander');
const linx = require('../src/generate');


/**
 * Usage.
 */

program
.command('generate')
.description('quick generate your file')
.alias('g')
.action(function(project){
    linx.run(project);
});
program.parse(process.argv);