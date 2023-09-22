import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

const TodoItem = () => {
    return (
        <div className='task flex justify-between items-center px-4  gap-8'>
            <div className='w-72 md:w-56 sm:w-auto'>
                Hello Task Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Iste, quasi?
            </div>
            <div className='icon flex gap-4 '>
                <BiEdit className='text-green-500 text-xl' />
                <RiDeleteBin6Line className='text-red-500 text-xl' />
            </div>
        </div>
    );
};
export default TodoItem;
