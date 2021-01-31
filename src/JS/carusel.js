import siema from 'siema';
import galeryItems from '../images/galery-items'

const refs = {
   siemaSelector: document.querySelector('.siema'),
}

function getImage(arr) {
    const list = 
        arr.map(({ preview}) => `
    <div class = 'gallery__item'><img class 'gallery__image' src= ${preview} width="200px" ></div>`).join('')
    return list;
}

refs.siemaSelector.insertAdjacentHTML('afterbegin', getImage(galeryItems));

// const mySiema = new Siema({
//   perPage: 3,
// });
new siema();
