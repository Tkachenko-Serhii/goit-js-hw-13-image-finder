import ImageApiService from './apiService';
import getRefs from './get-refs';
import { appendImagesMarkup } from './addMarkup';

const refs = getRefs();
const imageApiService = new ImageApiService();

refs.loadMoreBtn.addEventListener('click', onLoadMore);

export default function onLoadMore() {
  imageApiService.fetchImages().then(appendImagesMarkup);
  refs.loadMoreBtn.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
