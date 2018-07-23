/* eslint-disable */
export const preloadImage = (images, options) => {
  let count = 0;

  images.forEach(img => {
    const imgObj = new Image();

    imgObj.onload = () => {
      loaded();
    };

    imgObj.onerror = () => {
      loaded();
    };

    imgObj.src = img;
  });

  function loaded() {
    count += 1;
    options.each && options.each(count);

    if (count === images.length) {
      options.all && options.all(count);
    }
  }
};

export const trackingGA = () => {
  const ele = document.querySelectorAll('[megais_ga]');

  for (let i = 0; i < ele.length; i += 1) {
    (function (i) {
      let item = ele[i];
      if (item.tracking) return;
      item.addEventListener('click', trackingGAEvent);
      item.tracking = true;
    })(i);
  }
};

export const trackingGAEvent = pItem => {
  const item = pItem.path.find(item => {
    return item.getAttribute('megais_ga');
  });
  const category = item.getAttribute('megais_ga');
  const action = 'click';
  if (category !== null) {
    ga('send', 'event', category, action);
  }
};

export const removeGA = pItemClass => {
  const ele = document.querySelectorAll(pItemClass + ' [megais_ga]');
  for (let i = 0; i < ele.length; i += 1) {
    (function (i) {
      let item = ele[i];
      item.removeEventListener('click', trackingGAEvent);
      item.tracking = false;
    })(i);
  }
};
