import test from 'ava';
import getThumbnailUrl from './dist';

test(t => {
  const url = getThumbnailUrl('wHkK6mbFUTk', 'xlarge');
  t.deepEqual(url, 'https://i.ytimg.com/vi/wHkK6mbFUTk/maxresdefault.jpg');
});
