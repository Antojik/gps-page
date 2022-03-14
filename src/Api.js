import axios from "axios";

const Auth = {
  signIn: async (username, password) => {
    const res = await axios.post('http://localhost:5000/auth/login', { username, password })
    if (res.status === 201 || res.status === 200) {
      const token = res.data.token
      console.log(res.data.token);
      localStorage.setItem('token', token)
    }
    return res;
  },
  signUp: async (username, password, secondPassword) => {
    const res = await axios.post('http://localhost:5000/auth/registration', { username: username, password: password, secondPassword: secondPassword })
    if (res.status === 201 || res.status === 200 ) {
      const token = res.data.token
      localStorage.setItem('token', token)
    }
    return res;
  }
}

export default { Auth };