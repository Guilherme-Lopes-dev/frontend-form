import React, {useContext} from 'react'
import { GiConsoleController, GiDiceFire } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { PlanContext } from '../hooks/PlanContexProvider'




const Plan = () => {
  const {selectedPlan, handlePlanSelection, isYearly, handleCheckbox, price, handlePlanSelectionWithPrice} = useContext(PlanContext);

  return (
    <div className=''>
      <div className='flex-col m-12 p-6 border-grey-700'>
        <div className='px-[10%] pt-[5%]'>
          <h2 className='text-4xl font-bold text-blue-900'>Select your plan</h2>
          <h3 className='text-xl font-light text-gray-600'>You have the option of monthly or year billing.</h3>
          <div className='flex w-[100%] justify-around pt-10	'>
          <div className={selectedPlan === 'Arcade' ? 'h-60 w-[30%] rounded-2xl border-4 border-indigo-400 bg-indigo-100 cursor-pointer selected' : 'h-60 w-[30%] rounded-2xl border-4 hover:border-indigo-400 hover:bg-indigo-100 hover:cursor-pointer'}
            onClick={() => handlePlanSelection('Arcade')}>
              <div className='pt-8 pl-6'>
                <GiDiceFire fontSize={60} className='text-white bg-orange-300 rounded-full p-2' />
              </div>
              <div className='pt-12 pl-5'>
                <p className='font-bold	text-xl text-blue-800	'>Arcade</p>
                <p>{price.arcade}</p>
              </div>
            </div>
            <div className={selectedPlan === 'Advanced' ? 'h-60 w-[30%] rounded-2xl border-4 border-indigo-400 bg-indigo-100 cursor-pointer selected' : 'h-60 w-[30%] rounded-2xl border-4 hover:border-indigo-400 hover:bg-indigo-100 hover:cursor-pointer'}
            onClick={() => handlePlanSelection('Advanced')}>
              <div className='pt-8 pl-6'>
                <FaGamepad fontSize={60} className='text-white bg-rose-400 rounded-full p-2' />
              </div>
              <div className='pt-12 pl-5'>
                <p className='font-bold	text-xl text-blue-800	'>Advanced</p>
                <p>{price.advanced}</p>
              </div>
            </div>
            <div className={selectedPlan === 'Pro' ? 'h-60 w-[30%] rounded-2xl border-4 border-indigo-400 bg-indigo-100 cursor-pointer selected' : 'h-60 w-[30%] rounded-2xl border-4 hover:border-indigo-400 hover:bg-indigo-100 hover:cursor-pointer'}
            onClick={() => handlePlanSelection('Pro')}>
              <div className='pt-8 pl-6'>
                <GiConsoleController fontSize={60} className='text-white bg-indigo-700 rounded-full p-2' />
              </div>
              <div className='pt-12 pl-5'>
                <p className='font-bold	text-xl  text-blue-900'>Pro</p>
                <p>{price.pro}</p>
              </div>
            </div>
          </div>
          <div className='pt-12'>
            <div className='pl-[30%] bg-indigo-100 rounded-full h-[3rem]'>
              <div className='pt-3'>
                <span className="mr-4 text-2xl font-medium text-black dark:text-black">Montly</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" id="debug" className="sr-only peer"  onClick={handleCheckbox} onChange={handlePlanSelectionWithPrice} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none
                    peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                    peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] after:bg-white
                    after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <span className="ml-4 text-2xl font-medium text-black dark:text-black">Yearly</span>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>


  )
}
export default Plan
