import React, { useContext } from 'react'
import ThankYou from "../assets/images/icon-thank-you.svg"
import { PlanContext } from '../hooks/PlanContexProvider';

const Confirmation = () => {
    const { inputValues } = useContext(PlanContext);

    return (
        <div className='flex flex-col justify-center items-center space-y-4 mt-[250px]'>
            <img src={ThankYou} width='250px' height='250px' alt="" />
            <h3 className='text-3xl text-gray-800'>Thank you!</h3>
            <p className='text-lg text-gray-800 w-[40%] text-center'>Thanks {inputValues.inputName} for confirming your subscription!
                An confirmation email was sent for the address {inputValues.inputEmail}. 
                We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default Confirmation