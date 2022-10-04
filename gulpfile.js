import fileinclude from 'gulp-file-include'
import pkg from 'gulp';
import * as fsExtra from "fs-extra";
const { src, dest, watch, series } = pkg;


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

function script(){
  return src(['src/**/*.js'])
    .pipe(dest('./dist/'));
}

function assets(){
  return src(['src/assets/**'])
    .pipe(dest('./dist/assets/'));
}

const build = series(clean, render, css, script, assets)

export default build