import { createContext, useContext, useState } from "react";

//===================================================
export const offerContext = createContext();

export const useOffer = () => useContext(offerContext);

//===================================================

const OfferContextProvider = ({ children }) => {
  const [allOffers, setAllOffers] = useState([
    {
      name: "اسلام عادل",
      number: "525485",
      startDate: "15/11/2022",
      endDate: "15/11/2025",
      price: "500",
      terms: [
        {
          item: "بند1",
          unit: "كيلو",
          category: "صنف1",
          quantity: 5,
          price: 5,
        },
        {
          item: "بند1",
          unit: "كيلو",
          category: "صنف1",
          quantity: 5,
          price: 5,
        },
        {
          item: "بند1",
          unit: "كيلو",
          category: "صنف1",
          quantity: 5,
          price: 5,
        },
      ],
    },
  ]);

  const [offer, setOffer] = useState({
    name: "اسلام عادل",
    number: "525485",
    startDate: "15/11/2022",
    endDate: "15/11/2025",
    price: "500",
    terms: [],
  });

  const termsUpdater = (newTerms) => {
    setOffer((prev) => ({ ...prev, terms: newTerms }));
  };

  const offerUpdater = (newData) => {
    setOffer((prev) => ({ ...prev, ...newData }));
  };

  const addOffer = (newOffer) => {
    setAllOffers((prev) => [...prev, newOffer]);
  };

  return (
    <offerContext.Provider
      value={{ offer, termsUpdater, offerUpdater, addOffer, allOffers }}
    >
      {children}
    </offerContext.Provider>
  );
};

export default OfferContextProvider;

//===================================================
