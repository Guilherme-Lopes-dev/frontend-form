import React, {useState, createContext} from 'react'

export const PlanContext = createContext({selectedPlan: null});

const PlanContextProvider = (props) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan)
  }

  const [isYearly, setIsYearly] = useState(false);
  const handleCheckbox = () => setIsYearly(!isYearly);

  const [price, setPrice] = useState({ arcade: '$ 9/mo', advanced: '$ 12/mo', pro: '$ 15/mo' });
  const handlePlanSelectionWithPrice = plan => {
    handlePlanSelection(plan);
    if (isYearly) {
      setPrice({ arcade: '$ 9/mo', advanced: '$ 12/mo', pro: '$ 15/mo' });
    } else {
      setPrice({ arcade: '$ 108/year', advanced: '$ 144/year', pro: '$ 180/year' });
    }
  };

  const [checkboxes, setCheckboxes] = useState({
    checkboxService: { checked: false, value: 2 },
    checkboxStorage: { checked: false, value: 2 },
    checkboxProfile: { checked: false, value: 2 },
  });
  
  const handleCheckboxChange = (checkbox) => {
    setCheckboxes({
      ...checkboxes,
      [checkbox]: {
        ...checkboxes[checkbox],
        checked: !checkboxes[checkbox].checked,
      },
    });
  }

  const addonsTotal = Object.values(checkboxes)
  .filter(({ checked }) => checked)
  .reduce((sum, { value }) => sum + value, 0);

  return (
    <PlanContext.Provider value={{selectedPlan, handlePlanSelection, price, handlePlanSelectionWithPrice, handleCheckbox, handleCheckboxChange, checkboxes, addonsTotal, isYearly}}>
      {props.children}
    </PlanContext.Provider>
  );
};

export default PlanContextProvider;
