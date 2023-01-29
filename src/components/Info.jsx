import React, { useState } from 'react'



const Info = () => {

    const [inputValues, setInputValues] = useState({
        inputName: '',
        inputEmail: '',
        inputPhone: ''
    });

    const handleInputChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    }
 
    return (
        
        
        <div className=''>
            <div className='flex-col m-12 p-6 border-grey-700'>
                <div className='px-[10%] pt-[5%]'>
                    <p className='text-4xl font-bold text-blue-900'>Personal info</p>
                    <p className='text-xl font-light text-gray-600'>Please provide your name, email address, and phone number.</p>
                </div>
                <div className='pt-[10%] px-[10%]'>
                    <label htmlFor="name" className="block text-gray-700 text-md font-bold mb-2">Name</label>
                    <input
                        id='name'
                        type="text"
                        className=" block w-full px-4 py-4 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="inputName"
                        value={inputValues.inputName}
                        onChange={handleInputChange}
                    />
                    <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">Email Adress</label>
                    <input
                        id='email'
                        type="text"
                        className=" block w-full px-4 py-4 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="inputEmail"
                        value={inputValues.inputEmail}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="phone" className="block text-gray-700 text-md font-bold mb-2">Phone Number</label>

                    <input
                        id='phone'
                        type="text"
                        className=" block w-full px-4 py-4 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="inputPhone"
                        value={inputValues.inputPhone}
                        onChange={handleInputChange}
                    />
                </div>               
            </div>
        </div>

    
    )
}

export default Info
