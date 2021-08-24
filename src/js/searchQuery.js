import getRefs from './get-refs';
import ImageApiService from './apiService';
import { appendImagesMarkup, clearImagesContainer } from './addMarkup';

const refs = getRefs();

const imageApiService = new ImageApiService();
refs.searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  clearImagesContainer();
  imageApiService.query = e.currentTarget.elements.query.value;
  imageApiService.resetPage();
  imageApiService.fetchImages().then(appendImagesMarkup);
}

export default { onFormSubmit };
