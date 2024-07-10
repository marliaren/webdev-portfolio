export const getImageUrl = (path) => {
  //gets absolute path of the image to dynamically import images
  return new URL(`/assets/${path}`, import.meta.url).href;
};
