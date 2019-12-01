const gulp = require('gulp');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('@rollup/plugin-json');
const exec = require('child_process').exec;

gulp.task('build', () => {
    return rollup.rollup({
        input: './src/main.js',
        plugins: [
            babel({
                presets: [
                    [
                        '@babel/preset-env', {
                        'modules': false
                    }
                    ]
                ],
                babelrc: false,
                exclude: ['node_modules/**', 'src/test/{,**/}*']
            }),
            json()
        ]
    })
    .then(function (bundle) {
        return bundle.write({
            format: 'iife',
            file: './dist/main.js',
            sourceMap: true
        });
    })
});
