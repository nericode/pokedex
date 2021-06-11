function isValidURL(currentURL) {
  const re =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  return re.test(String(currentURL).toLowerCase());
}

export {isValidURL};
