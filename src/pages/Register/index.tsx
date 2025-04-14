import PageLayout from '../../components/PageLayout'
import LogoSection from '../../modules/Login/LogoSection'
import RegisterForm from '../../modules/Login/RegisterForm'
import ContinueWithGoogle from '../../modules/Login/ContinueWithGoogle'
import RegisterBG from '../../assets/inside-tshirt-store.jpg'

const Register: React.FC = () => {
	return (
		<PageLayout>
		 <div className="flex flex-1 min-h-screen">
			<div className="bg-red-800"> </div>
			{/*Left hand column*/}
			<div className="flex flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:flex-none xl:px-24" > 
				<div className="mx-auto w-full max-w-sm lg:w-96">
				<LogoSection isRegisterPage={true} />
				<RegisterForm />
				<ContinueWithGoogle />
		  		</div>
			</div>
			{/* Right hand column*/}
			<div className="relative hidden w-0 flex-1 lg:block">
				<img
					src={RegisterBG}
					className="absolute inset-0 h-full w-full object-cover"
					alt="Register Background" />
			</div>
		 </div>
		</PageLayout>
	)
}

export default Register