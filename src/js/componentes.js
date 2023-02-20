import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {

    console.log('🚀 - file: componentes.js:6 - template webpack');

    const h1 = document.createElement('h1');
    h1.innerText += `Hola ${nombre}`;
    h1.innerText += ` template webpack 20/02/23.`;
    document.body.append(h1);

    /* ----------------------------------- img ---------------------------------- */
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}
    
