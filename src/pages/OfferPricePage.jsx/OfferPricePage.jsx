// react imports
import React from "react";

// components imports
import OfferPriceContainer from "@/components/layout/OfferPricePage/OfferPriceContainer";
import Header from "@/components/shared/Header/Header";

const OfferPricePage = () => {
  return (
    <section>
      <Header PageName="عروض الاسعار" returnState={true} />
      <OfferPriceContainer />
    </section>
  );
};

export default OfferPricePage;
