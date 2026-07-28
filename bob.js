#!/usr/bin/env node
// bob.js - prompt simples sem dependências externas
const { spawn } = require('child_process');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask() {
    console.log('\nSelecione o projeto:');
    console.log('1) Brasil (BR)');
    console.log('2) Colômbia (CO)');
    rl.question('Digite 1 ou 2 e tecle Enter: ', (answer) => {
        let country;
        if (answer.trim() === '1') country = 'BR';
        else if (answer.trim() === '2') country = 'CO';
        else {
            console.log('Opção inválida. Tente novamente.');
            return ask(); // re-prompt
        }

        console.log(`\nSelecionado: ${country}\n`);

        // Define variável de ambiente COUNTRY e chama gulp build-production
        const env = Object.assign({}, process.env, { COUNTRY: country });

        // Em Windows, o executável pode ser gulp.cmd
        const gulpCmd = process.platform === 'win32' ? 'gulp.cmd' : 'gulp';
        const child = spawn(gulpCmd, ['build-production'], {
            stdio: 'inherit',
            env
        });

        child.on('close', (code) => {
            rl.close();
            process.exit(code);
        });

        child.on('error', (err) => {
            console.error('Erro ao executar Gulp:', err.message);
            rl.close();
            process.exit(1);
        });
    });
}

ask();