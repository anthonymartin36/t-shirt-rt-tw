import React from 'react'

const ContinueWithFacebook: React.FC = () => {
	return (
    <>
		<div className="mt-5">
            <div className="relative ">
                <div 
                  className="absolute inset-0 flex items-center" 
                  aria-hidden='true'
                >
                    <div className="w-full border-t border-gray-200" >  </div>
                </div>
            
              <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="px-2 bg-white text-gray-900">
                    Or 
                  </span>
              </div>
            </div>
		</div>
        {/* Button */}
      <div className="mt-6 grid grid-cols-1">
        <a
          href="#"
          className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1877F2] px-3 py-1.5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877F2] hover:bg-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          <span className="text-sm font-semibold leading-6">Facebook</span>
        </a>
      </div>
    </>
	)
}

export default ContinueWithFacebook