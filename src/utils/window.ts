export const redirect = (href) => (window.location.href = href);

export const scrollToOffset = (offset: any = {}) => {
  const top = offset.top || 0;
  const left = offset.left || 0;

  try {
    window.scroll({
      behavior: 'smooth',
      top,
      left,
    });
  } catch (err) {
    if (err instanceof TypeError) {
      window.scroll(top, left);
    } else {
      throw err;
    }
  }
};

export const scrollToElement = (element, options = {}) => {
  const isAllowed = element && 'scrollIntoView' in element;
  if (!isAllowed) {
    return false;
  }

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
    ...(options || {}),
  });

  return true;
};

export const scrollToId = (id, options = {}) => {
  const domIsExisted = typeof document !== 'undefined';
  if (!domIsExisted) {
    return false;
  }

  const element = document.getElementById(id);
  scrollToElement(element, options);

  return true;
};
