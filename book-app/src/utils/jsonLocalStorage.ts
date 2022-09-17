const JsonLocalStorage = {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key: string) => {
    return JSON.parse(localStorage.getItem(key)!);
  },
};

export default JsonLocalStorage;
