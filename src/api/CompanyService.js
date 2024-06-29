import { defaultAPI } from "./axios";
import { COMPANIES_URL } from "../services/constants/URLs";

export default class CompanyService {
  static async getAllCompanies() {
    const response = await defaultAPI.get(COMPANIES_URL);
    return response;
  }

  static async getCompany(id) {
    const companyURL = `/company_${id}`;
    const response = await defaultAPI.get(companyURL);
    return response;
  }
}
