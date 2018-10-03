/**
 * Create by Dominik Qiu on Oct 3, 2018
 */

const shell = require('shelljs')
const ora = require('ora')

    exports.run = function(project) {
        if (!shell.which('git')) {
            shell.echo('Error: Please first install git')
            shell.exit(1)
        }
        console.info('')
        console.info('Now with:') 
        console.info('  $ linx g myproject') 
        console.info('');
        if (project) { 
            let pwd = shell.pwd() 
            var spinner1 = ora(`1/3 It is currently being download into ${pwd}/${project}/ ...\n`).start()
            if (shell.exec(`git clone https://github.com/scrisstudio/linx.vue.git`).code !== 0) {
                spinner1.fail('Error: git clone can\'t be done.')
                shell.exit(1)
            }
            spinner1.succeed('1/3 Finished.\n')
            var spinner2 = ora('2/3 Creating Project\n').start()
            shell.mv(`${pwd}/linx.vue`, `${pwd}/${project}`)
            shell.cd(`${pwd}/${project}/`)
            shell.rm('-rf', `${pwd}/${project}/.git`)
            if (!shell.which('npm')) {
                spinner2.fail('Error：Please first install npm')
                shell.exit(1)
            }
            spinner2.succeed('2/3 Finished.\n')
            var spinner3 = ora('3/3 Starting \'npm install\'\n').start()
            shell.cd(`${pwd}/${project}/`)
            shell.exec('npm install chromedriver')
            shell.exec('npm install')
            shell.cd('app')
            shell.exec('npm install')
            spinner3.succeed('Everything is OK. For more info, go to https://scrisstudio.github.io/linx.vue')
        } else { 
            console.error('The correct form is like: $ linxcli g myproject') 
        }
    }