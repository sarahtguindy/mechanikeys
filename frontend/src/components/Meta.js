import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To MechaniKeys",
  description: "We sell the best mechanical keyboards for cheap",
  keywords:
    "mechanical keyboards, buy mechanical keyboards, cheap mechanical keyboards",
};

export default Meta;
