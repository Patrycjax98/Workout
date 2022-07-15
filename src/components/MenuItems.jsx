import {AiOutlineHome} from "react-icons/ai";
import {BsGrid, BsPencilSquare} from "react-icons/bs";
import {GiMuscleUp} from "react-icons/gi"


export const menuItem=[
    {
        path:'/',
        name:'Home',
        icon:<AiOutlineHome/>
    },
    {
        path:'/overview',
        name:'Overview',
        icon:<BsGrid/>
    },
    {
        path:'/plan',
        name:'Plan',
        icon:<BsPencilSquare/>
    },
    {
        path:'/atlasWorkout',
        name:'Atlas Workout',
        icon:<GiMuscleUp/>
    }
]