import OfferPriceContainer from "@/components/layout/OfferPricePage/OfferPriceContainer";
import Header from "@/components/shared/Header/Header";
import React from "react";

const OfferPricePage = () => {
  return (
    <section>
      <Header PageName="عروض الاسعار" returnState={true} />
      <OfferPriceContainer />
    </section>
  );
};

export default OfferPricePage;
