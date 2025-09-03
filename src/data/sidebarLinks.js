import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUsers } from "react-icons/fa";
import { RiLockPasswordLine, RiMovie2Fill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export const SidebarLinks = [
    {
        name:"Dashboard",
        link:'/dashboard',
        icon:BsFillGridFill
    },
    {
        name:"Movie List",
        link:'/movieslist',
        icon:FaListAlt
    },
    {
        name:"Add Movie",
        link:'/addmovie',
        icon:RiMovie2Fill
    },
    {
        name:"Categories",
        link:'/categories',
        icon:HiViewGridAdd
    },
    {
        name:"Users",
        link:'/users',
        icon:FaUsers
    },
    {
        name:"Update Profile",
        link:'/profile',
        icon:FiSettings
    },
    {
        name:"Favorites Movies",
        link:'/favorites',
        icon:FaHeart
    },
    {
        name:"Change Password",
        link:'/password',
        icon:RiLockPasswordLine
    },
]