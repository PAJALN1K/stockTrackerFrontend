import HomePage from "../pages/common/HomePage";
import InDevelopmentPage from "../pages/common/InDevelopmentPage";
import RegistrationPage from "../pages/nonAuth/RegistrationPage";
import LoginPage from "../pages/nonAuth/LoginPage";
import ProfilePage from "../pages/auth/ProfilePage";
import ChangePasswordPage from "../pages/auth/ChangePasswordPage";
import SettingsPage from "../pages/auth/SettingsPage";
import CompaniesPage from "../pages/auth/CompaniesPage";
import CompanyPage from "../pages/auth/CompanyPage";
import {
  HOME_URL,
  NAV_URL,
  DOCS_URL,
  REGISTRATION_URL,
  LOGIN_URL,
  PROFILE_URL,
  CHANGE_PASSWORD_URL,
  SETTINGS_URL,
  COMPANIES_URL,
  COMPANY_URL,
} from "../services/constants/URLs";

export const commonRoutes = [
  { path: HOME_URL, element: <HomePage /> },
  { path: NAV_URL, element: <InDevelopmentPage /> },
  { path: DOCS_URL, element: <InDevelopmentPage /> },
];

export const nonAuthRoutes = [
  { path: REGISTRATION_URL, element: <RegistrationPage /> },
  { path: LOGIN_URL, element: <LoginPage /> },
];

export const authRoutes = [
  { path: PROFILE_URL, element: <ProfilePage /> },
  { path: CHANGE_PASSWORD_URL, element: <ChangePasswordPage /> },
  { path: SETTINGS_URL, element: <SettingsPage /> },
  { path: COMPANIES_URL, element: <CompaniesPage /> },
  { path: COMPANY_URL, element: <CompanyPage /> },
];

export const publicRoutes = nonAuthRoutes.concat(commonRoutes);

export const privateRoutes = authRoutes.concat(commonRoutes);
