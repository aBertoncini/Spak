import ApiAccountService from "@/services/account/api.account.service.js";

const Api = new ApiAccountService();

class AuthService {
  async login(user) {
    //* user = {username: ###, password: ###}
    let res = await Api.postRequest(Api.apiUrl + Api.api.login, user);
    if (res.ok) res = await res.json();
    if (res.success) localStorage.setItem("user", res.data);
    return res;
  }
  logout() {
    localStorage.removeItem("user");
  }
  async register(user) {
    //* user = userStore.data
    return await Api.postRequest(Api.apiUrl + Api.api.register, user);
  }
  async delete(user) {
    return await Api.deleteRequest(Api.apiUrl + Api.api.delete, user);
  }
}

export default AuthService;
