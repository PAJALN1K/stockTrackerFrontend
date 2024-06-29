export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!#@$%-_])(?=.*[0-9]).{8,24}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9-_@.]{3,23}$/;
//   /^(?=.{1,64})[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$/;
