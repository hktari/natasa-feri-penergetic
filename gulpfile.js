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


export default series(clean, render)