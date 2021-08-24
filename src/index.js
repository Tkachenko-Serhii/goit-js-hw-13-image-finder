import getRefs from './js/get-refs';
import onFormSubmit from './js/searchQuery';
import onLoadMore from './js/load-more';
import { appendFormMarkup } from './js/addMarkup';
import { defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const refs = getRefs();

appendFormMarkup();
