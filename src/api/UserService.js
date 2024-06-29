import { registrationAPI } from "./axios";

export default class UserService {
  static async createUser(newUser) {
    const registrationURL = "/registration";
    const response = await registrationAPI.post(registrationURL, { newUser });
    return response;
  }
}
