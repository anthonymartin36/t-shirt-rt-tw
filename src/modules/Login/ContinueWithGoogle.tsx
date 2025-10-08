//import {Button} from '../../components/Button'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'


const ContinueWithGoogle: React.FC = () => {

  const log = useAuth0()
  const navigate = useNavigate()  

  const handleSignIn = async () => {
    try {
      // Log in using the popup method
      await log.loginWithRedirect();

      // Get the user's information after login
      const user = log.user;
      console.log("Logged in user:", user);

      // Redirect to the home page after successful login
      navigate('/');
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
	return (
        <>
		<div className="mt-10">
            <div className="relative ">
                <div 
                  className="absolute inset-0 flex items-center" 
                  aria-hidden='true'
                >
                    <div className="w-full border-t border-gray-200" >  </div>
                </div>
            
              <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="px-2 bg-white text-gray-900">
                    Or continue with
                  </span>
              </div>
            </div>
		</div>
        

    <div className="mt-6 grid grid-cols-1">
      <button
        onClick={() => handleSignIn()}
        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#020202] px-3 py-1.5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#020202] hover:bg-red-500"
      >
        <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 210 210">
          <path
            d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
                c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
                S0,162.897,0,105z"
          />
        </svg>
        <span className="text-sm font-semibold leading-6">Google</span>
      </button>
    </div>
    </>
	)
}

export default ContinueWithGoogle