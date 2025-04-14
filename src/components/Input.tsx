import React from 'react';

type InputProps = {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({name, label}) => {
	return (
		<div>
			    <label 
                    htmlFor={name} 
                    className="block text-sm font-medium leading-6 text-gray-900">
                
                {label}
                <input 
                    type="email"  
                    id='email' 
                    required
                    className="mt-2 block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-500
                    placeholder:text-gray-400" 
                />
            </label>
		</div>
	);
};

export default Input;