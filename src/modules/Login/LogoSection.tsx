import React from 'react'
import { RoutesEnum } from '../../routes'
import { Link } from 'react-router-dom'
import LogingBG from '../../assets/T-Shirt_shop.jpg'

type LogoSectionProps = { 
    isRegisterPage?: boolean;
}

const LogoSection: React.FC<LogoSectionProps> = ({isRegisterPage}) => {
    const appColour = "red"

    if (isRegisterPage) {
        return (
            <>
	    <Link to={RoutesEnum.Home} >
			<img src={LogingBG}  alt="T-Shirt Store" width="200" height="200" />
        </Link>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"> 
            Register for an account 
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
            Are you a member? 
            <Link 
            className={`cursor-pointer font-semibold text-${appColour}-600 hover:text-${appColour}-500`} 
            to={RoutesEnum.Login} > Login Now</Link>
        </p>

		</>
        )
    }
        return (
            <>
            <Link to={RoutesEnum.Home} >
                <img src={LogingBG}  alt="T-Shirt Store" width="200" height="200" />
            </Link>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"> 
                Sign into your account 
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
                Not a member? <Link className={`cursor-pointer font-semibold text-${appColour}-600 hover:text-${appColour}-500`} to={RoutesEnum.Register} > Register Now</Link>
            </p>
    
            </>
        )
	
}

export default LogoSection;