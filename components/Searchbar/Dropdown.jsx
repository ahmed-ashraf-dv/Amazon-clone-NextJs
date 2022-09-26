import React from "react";

import { useTranslation } from "next-i18next";

const Dropdown = ({ setCurrentSelect, currentSelect, options }) => {
  const { t } = useTranslation("layout");

  return (
    <div className="position-relative">
      <p className="ps-4 pe-4">
        {t("header.searchbar.categories." + currentSelect)}
      </p>
      <select
        onChange={(e) => setCurrentSelect(e.target.value)}
        className="position-absolute top-0 start-0 form-select rounded-start h-100 rounded-0 bg-light small"
      >
        {options.map((el, idx) => (
          <option key={idx} className="dropdown-item">
            {t("header.searchbar.categories." + el)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
