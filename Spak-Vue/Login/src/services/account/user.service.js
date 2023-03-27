import ApiAccountService from "./api.account.service.js";

const Api = new ApiAccountService();

class UserService {
  async isLoggedIn() {
    let token = localStorage.getItem("user");
    let res = await Api.postRequest(Api.api.userVerification, {
      token: token,
    });
    if (res.ok) res = await res.json();
    if (!res.success) localStorage.removeItem("user");
    return res.success;
  }
  async changePasswordReq(username) {
    let res = await Api.postRequest(Api.apiUrl + Api.api.changePasswordReq, {
      username: username,
    });
    return await res.json();
  }
  async changePassword(pw, token) {
    let res = await Api.postRequest(Api.apiUrl + Api.api.changePassword, {
      password: pw,
      token: token,
    });
    return await res.json();
  }

  reinviaMail(username) {
    Api.postRequest(Api.apiUrl + Api.api.reMail, { username: username });
  }
}

export default UserService;
