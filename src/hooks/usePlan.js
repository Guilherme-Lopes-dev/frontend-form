import React, {useState} from 'react'

const usePlan = () => {
const [selectedPlan, setSelectedPlan] = useState(null);

const handlePlanSelection = (plan) => {
setSelectedPlan(plan);
console.log(plan)

}

return {selectedPlan, handlePlanSelection};
}

export default usePlan;