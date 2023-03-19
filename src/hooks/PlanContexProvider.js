import React, { useState, createContext } from 'react'

export const PlanContext = createContext({ selectedPlan: null });

const PlanContextProvider = (props) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan)
  }

  const [isYearly, setIsYearly] = useState(false);
  const handleCheckbox = () => setIsYearly(!isYearly);

  const [componentPrice, setComponentPrice] = useState(null);

  const [price, setPrice] = useState({ Arcade: 9, Advanced: 12, Pro: 15 });
  const handlePlanSelectionWithPrice = (plan, componentPrice) => {
    handlePlanSelection(plan);
    setComponentPrice(componentPrice);
    if (isYearly) {
      setPrice({ Arcade: 9, Advanced: 12, Pro: 15 });
    } else {
      setPrice({ Arcade: 108, Advanced: 144, Pro: 180 });
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

  const [inputValues, setInputValues] = useState({
    inputName: '',
    inputEmail: '',
    inputPhone: ''
  });

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }

  return (
    <PlanContext.Provider value={{ selectedPlan, handleInputChange, inputValues, componentPrice, handlePlanSelection, price, handlePlanSelectionWithPrice, handleCheckbox, handleCheckboxChange, checkboxes, addonsTotal, isYearly, componentPrice, setComponentPrice }}>
      {props.children}
    </PlanContext.Provider>
  );
};

export default PlanContextProvider;
