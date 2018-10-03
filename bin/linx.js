#!/usr/bin/env node

process.title = 'linx'

require('commander')
.version(require('../package').version)
.usage('<command> [options]')
.command('generate', 'generate file from a template')
.parse(process.argv)

require('./linx-generate')