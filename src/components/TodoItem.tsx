import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

interface ItemPropsType {
    _id: string;
    task: string;
    date: string;
    isTaskCompleted: boolean;
}

const TodoItem = (props: ItemPropsType) => {
    const { task } = props;

    return (
        <div className='task flex justify-between items-center px-4  gap-8'>
            <div className='w-72 md:w-56 sm:w-auto bg-slate-100 px-4 py-2  rounded-r-full rounded-l-full '>
                {task}
            </div>
            <div className='icon flex gap-4 '>
                <BiEdit className='text-green-500 text-xl' />
                <RiDeleteBin6Line className='text-red-500 text-xl' />
            </div>
        </div>
    );
};
export default TodoItem;
