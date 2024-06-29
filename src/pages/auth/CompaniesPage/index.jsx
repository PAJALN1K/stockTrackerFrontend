import { useEffect, useState } from "react";
import CompanyService from "../../../api/CompanyService";
import { useFetching } from "../../../hooks/useFetching";
import Company from "./Company";
import PanelLayout from "../../../components/layout/panel-layout/PanelLayout";
import { companiesLeftAdaptColumn } from "./companiesLeftAdaptColumn";
import { companiesMainHeader } from "./companiesMainHeader";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  const [fetchCompanies, isCompaniesLoading, companiesError] = useFetching(
    async () => {
      const response = await CompanyService.getAllCompanies();
      setCompanies(response.data);
      console.log(response.data);
    }
  );

  useEffect(() => {
    fetchCompanies();
  }, []);

  const category = (
    <div className="main-panel__row">
      <div className="companies main-panel-category main-panel-category--companies">
        {companies.map(({ companyName, dateOfCreate, email }) => (
          <Company
            key={companyName}
            nameLabel={companyName}
            dateOfCreate={dateOfCreate}
            email={email}
          />
        ))}
      </div>
    </div>
  );

  const main = (
    <>
      {companiesMainHeader}
      {category}
    </>
  );

  return (
    <PanelLayout
      leftAdaptColumnContent={companiesLeftAdaptColumn}
      mainContent={main}
    />
  );
};

export default CompaniesPage;
