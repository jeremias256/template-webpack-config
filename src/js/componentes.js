import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {
    console.log("Hola Jeremías!!!");

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!!$$$/223312`;
    document.body.append(h1);

    //img
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}
