// 1) Local Storage low level function
export const setItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getItem = (name) => {
  const response = localStorage.getItem(name);
  if (!response) {
    return null;
  }

  return JSON.parse(response);
};

// 2) Local Storage with expiry
export const setItemWithExpiry = (name, value, expires = 5) => {
  if (!name) {
    return null;
  }

  expires = expires * 60 * 1000;
  const item = {
    value: value,
    expiry: new Date().getTime() + expires,
  };

  localStorage.setItem(name, JSON.stringify(item));
};

export const getItemWithExpiry = (name) => {
  const itemStr = localStorage.getItem(name);
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(name);
    return null;
  }
  return item.value;
};
