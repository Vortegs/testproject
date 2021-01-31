// import itemsTemplate from '../templates/galery-items.hbs';

// const markup = itemsTemplate({
//     items: ['HTML', 'CSS', 'JS', 'React']
// });

import itemsTemplate from '../templates/countries.hbs'
import countries from '../countries.json'

const markup = itemsTemplate(countries)

const templ = document.querySelector('.templates')

templ.insertAdjacentHTML('beforeend', markup)


