import { src, dest, watch } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function css ( done ) {
  src('src/scss/app.scss')
    //Aplicamos la funcion de sass en el primer pipe
    .pipe( sass().on('error', sass.logError) )
    //El destino donde queremos almacenar el archivo
    .pipe( dest('build/css') )


  done()
}

export function dev() {
  watch('src/scss/app.scss', css)
}