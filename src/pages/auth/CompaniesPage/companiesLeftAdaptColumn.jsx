import PageNav from "../../../components/layout/panel-layout/PageNav";

export const companiesLeftAdaptColumn = (
  <div className="left-adapt-column__row">
    <PageNav
      itemsContent={[
        {
          key: 0,
          hrefLink: "/companies",
          text: "Компании",
          isSelected: true,
        },
        { key: 1, hrefLink: "/companies", text: "Календарь" },
        { key: 2, hrefLink: "/companies", text: "Калькулятор" },
      ]}
    />
  </div>
);
