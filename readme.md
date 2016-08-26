## @joegesualdo/get-youtube-video-thumbnail-url-js [![Build Status](https://travis-ci.org/joegesualdo/get-youtube-video-thumbnail-url-js.svg?branch=master)](https://travis-ci.org/joegesualdo/get-youtube-video-thumbnail-url-js)
> Get the thumbnail image for a youtube video.

## Install
```
$ npm install --save @joegesualdo/get-youtube-video-thumbnail-url-js
```

## Usage
```javascript
import getThumbnailUrl from '@joegesualdo/get-youtube-video-thumbnail-url-js';

getThumbnailUrl('wHkK6mbFUTk', 'xlarge');
//=> https://i.ytimg.com/vi/wHkK6mbFUTk/maxresdefault.jpg
```

## API
### `getYoutubeVideoThumbnailUrl(videoId, [size])`
> Get the image url of the thumbnail

| Name | Type | Description |
|------|------|-------------|
| videoId | `String` | The id of the youtube video|
| size | `String` | The image size you want. The options are `small`, `medium`, `large`, and `xlarge`|

Returns: `String`, the url of the thumbnail

```javascript
import getThumbnailUrl from '@joegesualdo/get-youtube-video-thumbnail-url-js';

getThumbnailUrl('wHkK6mbFUTk', 'xlarge');
//=> https://i.ytimg.com/vi/wHkK6mbFUTk/maxresdefault.jpg
```
## Test
```
$ npm test
```
## Build
```
$ npm run build
```
## License
MIT © [Joe Gesualdo]()
