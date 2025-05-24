import Input from '../../components/Input'
import Button from '../../components/Button'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
// import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const LoginForms: React.FC = () => {
    const log = useAuth0()
    //const userLogged = useAuth0().user
    const navigate = useNavigate()
    //TODO: replace placeholder user object with the one from auth0

    const handleSignIn = () => {
        //Check if user is vaild
        //Call API to validate user
        //If valid, redirect to home page
        //If not valid, show error message 
        log.loginWithRedirect() //{ redirect_uri: 'http://localhost:5173/registeruser' }
        navigate('/')
    }
	return (
		<div>
            <form className="flex flex-col gap-4 mt-10">
                <Input label="Email Address" name="email" />
                <Input label="Password" name="password" />
                <a href="#" className="flex justify-end text-sm leading-6 font-semibold text-red-600 hover:text-red-500 ">
                    Forgot Password</a>
                <Button handleClick={()=> handleSignIn()} type="submit" text="Sign In" />
            </form>
		</div>
	)
}

export default LoginForms