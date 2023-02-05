import React from 'react'
import useForm from '../hooks/useForm'

const Form = () => {
    const { current, component, handleClick, nextStep, previousStep } = useForm();


    return (
        <div className='flex  justify-around h-5/6 w-4/6  border-8 border-grey-900 rounded-3xl relative'>
            <div className="text-black h-[97%] w-[25%]  m-auto   rounded-3xl">
                <div className=" w-[100%] h-[100%] bg-[url('assets/images/bg-sidebar-desktop.svg')]  bg-no-repeat bg-cover bg-center rounded-3xl	">
                    <div className='flex-col justify-items-center items-center w-[80%]'>
                        <div className='flex justify-left pt-8 pl-12'>
                            <button onClick={() => handleClick(1)} className="hover:bg-blue-400 hover:text-black border-4 rounded-full border-grey-dark py-2 px-5 text-base font-bold text-white">1</button>
                            <div className='pl-6 text-left '>
                                <p className='text-lg text-gray-200'>STEP 1</p>
                                <p className='font-bold text-lg	text-white'>YOUR INFO</p>
                            </div>
                        </div>

                        <div className='flex justify-left pt-5 pl-12'>
                            <button onClick={() => handleClick(2)} className="hover:bg-blue-400 hover:text-black border-4 rounded-full border-grey-dark py-2 px-5 text-base font-bold text-white">2</button>
                            <div className='pl-6 text-left'>
                                <p className='text-lg text-gray-200'>STEP 2</p>
                                <p className='font-bold text-lg	text-white'>SELECT PLAN</p>
                            </div>
                        </div>

                        <div className='flex justify-left pt-5 pl-12'>
                            <button onClick={() => handleClick(3)} className="hover:bg-blue-400 hover:text-black border-4 rounded-full border-grey-dark py-2 px-5 text-base font-bold text-white">3</button>
                            <div className='pl-6 text-left'>
                                <p className='text-lg text-gray-200'>STEP 3</p>
                                <p className='font-bold text-lg	text-white'>ADD-ONS</p>
                            </div>
                        </div>

                        <div className='flex justify-left pt-5 pl-12'>
                            <button onClick={() => handleClick(4)} className="hover:bg-blue-400 hover:text-black border-4 rounded-full border-grey-dark py-2 px-5 text-base font-bold text-white">4</button>
                            <div className='pl-6 text-left'>
                                <p className='text-lg text-gray-200'>STEP 4</p>
                                <p className='font-bold text-lg	text-white'>SUMMARY</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="text-black h-[97%] w-[71%] 	m-auto  rounded-3xl">
                {component}
            </div>
            <div className='absolute bottom-10 right-10 ...'>
                {current === 4 ? (
                    <button className="bg-grey-light rounded-lg py-3 px-6 text-xl bg-blue-700 text-white">Submit</button>
                ) : (
                    <div className=''>                        
                        <button className="bg-grey-light rounded-lg py-3 px-6 text-xl bg-blue-700 text-white" onClick={nextStep}>Next Step</button>
                    </div>
                )}
            </div>

            <div className='absolute bottom-10 left-[35%] ...'>
                {current !== 1 ? (
                    <div className=''>                        
                        <button className="bg-grey-light rounded-lg py-3 px-6 font-bold	text-xl  text-black hover:text-blue-700 " onClick={previousStep}>Previous Step</button>
                    </div>
                ) : (
                    <div className=''>                        
                       
                    </div>
                )}
            </div>
        </div>

    )
}

export default Form

