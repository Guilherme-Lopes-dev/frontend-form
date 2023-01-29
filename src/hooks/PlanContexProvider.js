import React, {useState, createContext} from 'react'

export const PlanContext = createContext({selectedPlan: null});

const PlanContextProvider = (props) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  }

 

  const [isYearly, setIsYearly] = useState(false);
  const handleCheckbox = () => setIsYearly(!isYearly);


  const [price, setPrice] = useState({ arcade: 9, advanced: 12, pro: 15 });
  const handlePlanSelectionWithPrice = plan => {
    handlePlanSelection(plan);
    if (isYearly) {
      setPrice({ arcade: 99, advanced: 144, pro: 180 });

      console.log(plan)
    } else {
      setPrice({ arcade: 9, advanced: 12, pro: 15 });

      console.log(plan)

    }
  };



  

  return (
    <PlanContext.Provider value={{selectedPlan, handlePlanSelection}}>
      {props.children}
    </PlanContext.Provider>
  );
};

export default PlanContextProvider;
