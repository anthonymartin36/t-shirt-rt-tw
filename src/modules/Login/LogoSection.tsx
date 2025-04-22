import React from 'react'
import { Link } from 'react-router-dom'
import LogingBG from '../../assets/T-Shirt_shop2.png'

type LogoSectionProps = { 
    isRegisterPage?: boolean;
}

const LogoSection: React.FC<LogoSectionProps> = ({isRegisterPage}) => {
    const appColour = "red"

    if (isRegisterPage) {
        return (
            <>
	    <Link to="/" >
			<img src={LogingBG} className="rounded-2xl" alt="T-Shirt Store" width="200" height="200" />
        </Link>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"> 
            Register for an account 
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
             Are you a member?{" "} 
            <Link 
                className={`cursor-pointer font-semibold text-${appColour}-600 hover:text-${appColour}-500`} 
                to="/login" > 
                  Login Now
            </Link>
        </p>

		</>
        )
    }
        return (
            <>
            <Link to="/" >
                <img src={LogingBG} className="rounded-2xl"  alt="T-Shirt Store" width="200" height="200" />
            </Link>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"> 
                 Sign into your account 
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
                Not a member? {" "}
                <Link 
                    className={`cursor-pointer font-semibold text-${appColour}-600 hover:text-${appColour}-500`} 
                    to="/Register" > 
                    Register Now
                </Link>
            </p>
    
            </>
        )
	
}

export default LogoSection;