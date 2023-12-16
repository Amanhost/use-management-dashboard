import axios from 'axios';

const API_URL = 'https://reqres.in/api/';
class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + 'signin', {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('users', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('users');
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('users');
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
