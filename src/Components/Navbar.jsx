import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaLanguageSolid } from "react-icons/lia";

function Navbar() {
  return (
    <header className="d-flex justify-content-between  p-4 bg-white">
    <div className="d-flex" >
        <img  className=""  src='unknown'/>
        <button style={{border: 'none'}} className="mx-5  bg-transparent">
        <RxHamburgerMenu />
        </button>
    </div>
    <div className="">
        <button style={{border: 'none'}} className="mx-2   bg-transparent">
        <IoMoonOutline/>
        </button >
        <button style={{border: 'none'}} className="mx-2  bg-transparent" >
        <IoIosNotificationsOutline/>

        </button>
        <button style={{border: 'none'}} className="mx-2  bg-transparent">
        <LiaLanguageSolid/>

        </button>
<img src='unknown'/>
    </div>
    </header>
  )
}

export default Navbar