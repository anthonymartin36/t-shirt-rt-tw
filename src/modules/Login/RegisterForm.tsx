import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const RegisterForm: React.FC = () => {
	return (
		<div>
            <form className="flex flex-col gap-4 mt-10">
                <Input label="Name" name="Name" />
                <Input label="Email Address" name="email" />
                <Input label="Password" name="password" />
                <Button type="submit" text="Sign In" />
            </form>
		</div>
    )
};

export default RegisterForm