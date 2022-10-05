import fileinclude from 'gulp-file-include'
import pkg from 'gulp';
import * as fsExtra from "fs-extra";
import webp from 'gulp-webp';
const { src, dest, watch, series, parallel } = pkg;


export function serve() {
  return watch(['src/**/*.css', 'src/**/*.html'], build);
}

export function clean(cb) {
  fsExtra.emptyDir('dist', err => {
    cb(err)
  });
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

function script() {
  return src(['src/**/*.js'])
    .pipe(dest('./dist/'));
}

function fonts() {
  return src(['src/assets/fonts/*'])
    .pipe(dest('./dist/assets/fonts/'));
}

function images() {
  return src(['src/assets/images/**'])
    .pipe(webp())
    .pipe(dest('./dist/assets/images'))
}

const build = parallel(series(clean, render, css, script, fonts), images)

export default build