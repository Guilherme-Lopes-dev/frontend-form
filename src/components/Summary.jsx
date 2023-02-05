import React,{useContext} from 'react'
import { PlanContext } from '../hooks/PlanContexProvider'
import useForm from '../hooks/useForm'


const Summary = () => {

  const {selectedPlan, addonsTotal, isYearly} = useContext(PlanContext);
  const { current, component, handleClick, nextStep, previousStep } = useForm();




  return (
    <div className=''>
      <div className='flex-col m-12 p-6 border-grey-700'>
        <div className='px-[10%] pt-[5%]'>
          <p className='text-4xl font-bold text-blue-900'>Finishing up</p>
          <p className='text-2xl pt-3 pb-5 font-bold text-grey-100'>Double-check everything looks OK before confirming.</p>


          <div className='bg-indigo-100 h-96 pt-5'>
          <p className='text-2xl font-bold pl-5 text-indigo-600'>{selectedPlan}  {isYearly ? '(Montly)' : '(Yearly)'}  </p>
          <button onClick={() => handleClick(2)} className="">Change</button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Summary