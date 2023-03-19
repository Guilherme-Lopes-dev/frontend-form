import React, { useContext } from 'react'
import { PlanContext } from '../hooks/PlanContexProvider'
import useForm from '../hooks/useForm'


const Summary = () => {

  const { selectedPlan, inputValues, addonsTotal, isYearly, componentPrice, price } = useContext(PlanContext);
  const { handleClick } = useForm();


  let period = "";

  if (isYearly === true) {
    period = "(Yearly)";
  } else {
    period = "(Monthly)";
  }

  return (
    <div className=''>
      <div className='flex-col m-12 p-6 border-grey-700 rounded-2xl	'>
        <div className='px-[10%] pt-[5%]'>
          <p className='text-4xl font-bold text-blue-900'>Finishing up</p>
          <p className='text-2xl pt-3 pb-5 font-bold text-grey-100'>Double-check everything looks OK before confirming.</p>


          <div className='bg-indigo-100 h-96 pt-5'>
            <div className="container flex justify-between relative">
              <div className='flex '>
                <p className='text-2xl font-bold pl-5 text-gray-600'>{selectedPlan}</p>
                <p className='text-2xl font-bold pl-5 text-gray-600'>{period ? period : ''}</p>
              </div>
              <p className='text-2xl font-bold pl-5 text-gray-600 mr-[20px]'>R${price[selectedPlan]}</p>
              <div class=" absolute container mx-auto px-4 w-90 mt-[50px]">
                <div class="h-[0.5px]  bg-gray-300" aria-hidden="true"></div>
              </div>

            </div>
            <div className="container flex justify-between mt-[50px] relative">
              <p className='text-2xl font-bold pl-5 text-gray-600'> AddOns: </p>
              <p className='text-2xl font-bold pl-5 text-gray-600  mr-[20px]'>R$ {addonsTotal} </p>
              <div class=" absolute container mx-auto px-4 w-90 mt-[50px]">
                <div class="h-[0.5px]  bg-gray-300" aria-hidden="true"></div>
              </div>
            </div>
            <div className="container flex justify-between mt-[50px] relative">
              <p className='text-2xl font-bold pl-5 text-gray-600'> Total:</p>
              <p className='text-3xl font-bold pl-5 text-indigo-600  mr-[20px]'>R$ {addonsTotal && price[selectedPlan] ? addonsTotal + price[selectedPlan] : ''}</p>
              <div class=" absolute container mx-auto px-4 w-90 mt-[50px]">
                <div class="h-[0.5px]  bg-gray-300" aria-hidden="true"></div>
              </div>
            </div>

          
            {/* <a className="bg-grey-light rounded-lg py-3 px-6 text-xl bg-blue-700 text-white" onClick={() => handleClick(2)} >Change</a> */}

          </div>

        </div>

      </div>
    </div>
  )
}

export default Summary