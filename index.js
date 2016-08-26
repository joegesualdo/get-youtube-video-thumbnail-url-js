export default function getThumbnailUrl(videoId, size = 'small') {
  const baseUrl = `https://i.ytimg.com/vi/${videoId}`;
  let thumbnailUrl = '';

  if (size === 'small') {
    thumbnailUrl = `${baseUrl}/default.jpg`;
  } else if (size === 'medium') {
    thumbnailUrl = `${baseUrl}/mqdefault.jpg`;
  } else if (size === 'large') {
    thumbnailUrl = `${baseUrl}/hqdefault.jpg`;
  } else if (size === 'xlarge') {
    thumbnailUrl = `${baseUrl}/maxresdefault.jpg`;
  } else {
    throw new Error("Size argument is invalid. Use 'small', 'medium', 'large', or 'xlarge'");
  }

  return thumbnailUrl;
}
