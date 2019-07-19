// manageing any local-storage for the application
const token = Object.freeze({
  getToken: () => {
    try {
      return localStorage.getItem('authorization');
    } catch (err) {
      return null;
    }
  },
  setToken: token => {
    try {
      localStorage.setItem('authorization', token);
      return true;
    } catch (err) {
      return false;
    }
  }
});

export default token;
