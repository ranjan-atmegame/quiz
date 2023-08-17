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

export const removeItem = (name) => localStorage.removeItem(name);
export const removeAll = () => localStorage.clear();

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

  setItem(name, item);
};

export const getItemWithExpiry = (name) => {
  const item = getItem(name);
  if (!item) {
    return null;
  }

  const now = new Date();

  if (now.getTime() > item.expiry) {
    removeItem(name);
    return null;
  }
  return item.value;
};
