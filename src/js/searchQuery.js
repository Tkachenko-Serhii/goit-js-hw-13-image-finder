import getRefs from './get-refs';
import ImageApiService from './apiService';
import { appendImagesMarkup, clearImagesContainer } from './addMarkup';
import { alert } from '@pnotify/core';

const refs = getRefs();

const imageApiService = new ImageApiService();
refs.searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  imageApiService.query = e.currentTarget.elements.query.value;

  if (imageApiService.query === '') {
    return alert({
      type: 'error',
      text: 'Please enter a query!',
    });
  }

  imageApiService.resetPage();
  imageApiService.fetchImages().then(hits => {
    clearImagesContainer();
    appendImagesMarkup(hits);
  });
}

export default { onFormSubmit };
