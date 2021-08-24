import ImageApiService from './apiService';
import getRefs from './get-refs';
import { appendImagesMarkup } from './addMarkup';

const refs = getRefs();
const imageApiService = new ImageApiService();

const options = {
  rootMargin: '100px',
};

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onLoadMore();
    }
  });
};

function onLoadMore() {
  imageApiService.fetchImages().then(appendImagesMarkup);
}

export const observer = new IntersectionObserver(onEntry, options);
observer.observe(refs.loadMore);
