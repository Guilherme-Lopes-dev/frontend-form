import React, {useContext} from 'react'

import { PlanContext } from '../hooks/PlanContexProvider'


const Addons = () => {

  const {handleCheckboxChange, checkboxes } = useContext(PlanContext);

  return (
    <div className=''>
      <div className='flex-col m-12 p-6 border-grey-700'>
        <div className='px-[10%] pt-[5%]'>
          <p className='text-4xl font-bold text-blue-900'>Pick add-ons</p>
          <p className='text-xl font-light text-gray-600'>Add-ons help enhance your gaming experience.</p>
        </div>

        <ul className="grid w-full gap-6 md:grid-cols-1 pt-5">
          <li>
            <input type="checkbox" id="service" value="" className="hidden peer" required="" />
            <label className="inline-flex  items-center justify-between w-full p-5 
            text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 
            dark:border-gray-700 peer-checked:border-blue-600 hover:text-black hover:bg-indigo-100 hover:border-indigo-400	hover:border-2   dark:peer-checked:text-gray-300
            peer-checked:text-gray-600  dark:text-gray-400 ">
              <input id="checked-checkbox" type="checkbox" value="" checked={checkboxes.checkboxService.checked} onChange={() => handleCheckboxChange('checkboxService')}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded 
           focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
           focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <div className='flex justify-around w-[90%] items-center'>
                <div className="flex-col content-start text-black">
                  <h2 className="w-full text-2xl font-semibold">Online Service</h2>
                  <h3 className="w-full text-lg">Acess to multiplayer games</h3>
                </div>
                <div className=''>
                  <p className="w-full text-xl">+$2/mo</p>
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="checkbox" id="storage" value="" className="hidden peer"/>
            <label className="inline-flex items-center justify-between w-full p-5 
            text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 
            dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300
            peer-checked:text-gray-600  dark:text-gray-400 hover:bg-indigo-100 hover:border-indigo-400	hover:border-2">
              <input id="checked-checkbox" type="checkbox" value="" checked={checkboxes.checkboxStorage.checked} onChange={() => handleCheckboxChange('checkboxStorage')}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded 
           focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
           focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <div className='flex justify-around w-[90%] items-center'>
                <div className="flex-col content-start text-black">
                  <div className="w-full text-2xl font-semibold">Larger Storage</div>
                  <div className="w-full text-lg">Extra 1TB of cloud save</div>
                </div>
                <div className=''>
                  <p className="w-full text-xl">+$2/mo</p>
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="checkbox" id="profile" value="" className="hidden peer" />
            <label className="inline-flex  items-center justify-between w-full p-5 
            text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 
            dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300
            peer-checked:text-gray-600  dark:text-gray-400 hover:bg-indigo-100 hover:border-indigo-400	hover:border-2">
              <input  id="checked-checkbox" type="checkbox" value="" checked={checkboxes.checkboxProfile.checked} onChange={() => handleCheckboxChange('checkboxProfile')}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded 
           focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
           focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <div className='flex justify-around w-[90%] items-center'>
                <div className="flex-col content-start text-black">
                  <div className="w-full text-2xl font-semibold">Customizable Profile</div>
                  <div className="w-full text-lg">Custom theme on your profile</div>
                </div>
                <div className=''>
                  <p className="w-full text-xl">+$2/mo</p>
                </div>
              </div>
            </label>
          </li>
        </ul>


      </div>
    </div>
  )
}

export default Addons