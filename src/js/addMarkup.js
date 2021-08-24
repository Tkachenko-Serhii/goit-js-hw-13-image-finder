import formTpl from '../templates/form.hbs';
import imageTpl from '../templates/image.hbs';
import getRefs from './get-refs';
const refs = getRefs();

function appendFormMarkup() {
  refs.searchForm.insertAdjacentHTML('beforeend', formTpl());
}

function appendImagesMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', imageTpl(hits));
}

function clearImagesContainer() {
  refs.gallery.innerHTML = '';
}

export { appendImagesMarkup, appendFormMarkup, clearImagesContainer };
