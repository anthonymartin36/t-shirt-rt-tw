import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
//import { useNavigate } from 'react-router-dom'
import { Menu } from '@headlessui/react' 

type User = {
  nickname?: string
  name?: string
  picture?: string
  email?: string
}

export default function Authenticate() {
  const [user, setUser] = React.useState<null | User>(null);
  const appColour = 'red'
  let colors =  {"normal": 100, "hover" : "400"} // darkMode ? {} : { "normal": 700, "hover" : "900" } 

  const log = useAuth0()
  const userLogged = useAuth0().user
  //const navigate = useNavigate()
  // TODO: replace placeholder user object with the one from auth0

  //console.log("User from auth0: ", userLogged)
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  // React.useEffect(() => {
  // }, [userLogged]); // Only run when userLogged changes

  React.useEffect(() => {
    if (userLogged) {
      setUser(userLogged);
    }
    if (canvasRef.current && userLogged?.picture) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      if (userLogged?.picture) {
        img.src = userLogged.picture;
      } else {
        console.error("No picture URL available for the user.");
      }
      img.src = userLogged.picture;
      console.log("Image typeof", typeof img.src, img.src)  
  
      img.onload = () => {
        img.referrerPolicy="no-referrer"
        ctx?.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image
        console.log("User from auth0: ", userLogged?.picture)
      };
  
      img.onerror = () => {
        console.error("Failed to load image:", userLogged.picture);
        if (ctx) {
          ctx.fillStyle = '#ccc'; // Placeholder color
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#000';
          ctx.font = '12px Arial';
          ctx.fillText('No Image', 5, 15); // Placeholder text
        }
      };
    }
  }, [userLogged?.picture]);

  const handleSignOut = () => {
    log.logout()
  }

  return (
      <nav className="nav">
        <div className="">
        </div>
        <div className="">
          <div className="">
            <IfAuthenticated>
              {userLogged && ( 
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className={`text-gray-${colors.normal} hover:text-gray-${colors.hover} relative`}>
                    <div className="">
                      {user ? (
                        <canvas
                          ref={canvasRef}
                          width={25}
                          height={25}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-gray-200 animate-pulse"></div> // Placeholder while loading
                      )}
                    </div>
                  </Menu.Button>
                  <Menu.Items
                    className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                  <Menu.Item disabled>
                    <div className="border-b justify-center items-center border-gray-200 py-2 px-5">
                    <Link to="/" onClick={handleSignOut} className="font-medium text-indigo-600 hover:text-indigo-500">
                      Sign Out
                    </Link>
                    </div>
                  </Menu.Item>
                  </Menu.Items>
                </Menu>
              )}
            </IfAuthenticated>
          </div>
          <div className="">
            <IfNotAuthenticated>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                <Link 
                  className={`cursor-pointer font-semibold text-${appColour}-600 hover:text-${appColour}-500`} 
                  to="/login" > 
                    Login Now
                </Link>
              </p>
              <div className=""> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  {/* <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /> */}
                </svg>
              </div>
            </IfNotAuthenticated>
          </div>
        </div>
      </nav>
  )
}