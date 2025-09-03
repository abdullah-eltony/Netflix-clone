import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
const NotFound = () => {
    return (
        <div className="flex-cols w-full gap-6 min-h-screen text-white bg-main lg:py-20 py-10 px-20 text-center">
            <img className="w-full h-60 sm:h-96 object-contain" src="/images/404.svg" alt="Not Found"/>
            <h1 className="lg:text-4xl font-bold">Page Not Found</h1>
            <p className="font-medium text-border italic leading-6">
                The page you are looking for does not exist. Please check the URL and try again.
            </p>
            <Link to={'/'} className="bg-subMain text-white hover:text-main transitions font-medium px-4 py-3 rounded-md flex-rows gap-4">
                <IoHomeOutline/>
                Back Home
            </Link>
        </div>
    )
}
export default NotFound