import React,{useContext} from 'react'
import { PlanContext } from '../hooks/PlanContexProvider'

const Summary = () => {
  const {selectedPlan} = useContext(PlanContext);



  return (
    <div className=''>
      <div className='flex-col m-12 p-6 border-grey-700'>
        <div className='px-[10%] pt-[5%]'>
          <p className='text-4xl font-bold text-blue-900'>Finishing up</p>
          <p className='text-xl font-light text-gray-600'>The selected plan is {selectedPlan}</p>
        </div>

      </div>
    </div>
  )
}

export default Summary