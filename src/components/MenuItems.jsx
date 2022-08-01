import {AiOutlineHome} from "react-icons/ai";
import { BsPencilSquare} from "react-icons/bs";
import {GiMuscleUp} from "react-icons/gi"


export const menuItem=[
    {
        path:'/',
        name:'Home',
        icon:<AiOutlineHome/>
    },
    {
        path:'/plan',
        name:'Plan',
        icon:<BsPencilSquare/>
    },
    {
        path:'/exercises',
        name:'Exercises',
        icon:<GiMuscleUp/>
    }
]