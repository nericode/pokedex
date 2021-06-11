function isValidURL(currentURL) {
  let url;
  try {
    url = new URL(currentURL);
  } catch (error) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}

export {isValidURL};
