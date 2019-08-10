const { readFile, writeFile } = require('fs');

const paths = [
    'node_modules/vueify/lib/compiler.js',
    'node_modules/vueify/lib/compilers/babel.js'
];

const search = 'babel-core';
const replacement = '@babel/core';

for(const path of paths) {
    readFile(path, (error, buffer) => {
        if (error) {
            throw error;
        }

        writeFile(path, buffer.toString().replace(search, replacement), (error) => {
            if (error) {
                throw error;
            }
        });
    });
}