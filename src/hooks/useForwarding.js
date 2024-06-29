import { useNavigate } from "react-router-dom";


export const useForwarding = (URL) => {
  const navigate = useNavigate();

  return () => navigate(URL);
}
