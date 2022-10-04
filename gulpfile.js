import fileinclude from 'gulp-file-include'
import pkg from 'gulp';
const { src, dest, watch, series } = pkg;

import fs from 'fs'

export function clean(cb) {
  fs.mkdir('dist', err => {
    fs.rm('dist', { recursive: true }, err => {
      cb(err);
    })
  })
}

export function render() {
  return src(['src/**/*.html', '!src/_partial/**'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./dist/'));
};

function css() {
  return src(['src/**/*.css'])
    .pipe(dest('./dist/'));
}

function script(){
  return src(['src/**/*.js'])
    .pipe(dest('./dist/'));
}

function assets(){
  return src(['src/assets/**'])
    .pipe(dest('./dist/assets/'));
}

export default series(clean, render, css, script, assets)