import ApiAccountService from "@/services/account/api.account.service";

const Api = new ApiAccountService();

class CountriesService {
  async getStati() {
    return await Api.getRequest(Api.apiUrl + Api.api.getCountry.stato);
  }
  async getRegioni(id) {
    return await Api.getRequest(
      Api.apiUrl + Api.api.getCountry.regione.replace("$id", id)
    );
  }
  async getProvincie(id) {
    return await Api.getRequest(
      Api.apiUrl + Api.api.getCountry.provincia.replace("$id", id)
    );
  }
  async getCitta(id) {
    return await Api.getRequest(
      Api.apiUrl + Api.api.getCountry.citta.replace("$id", id)
    );
  }
}

export default CountriesService;
