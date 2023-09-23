import { useQuery } from '@tanstack/react-query';
import TodoItem from './TodoItem';
import axios from 'axios';
import Loading from './Loading';

const Todo = () => {
    const { isLoading, data } = useQuery(['todo-list'], () => {
        return axios.post('http://localhost:5501/todo/list');
    });

    if (isLoading) return <Loading />;
    console.log(data);
    return (
        <div className=' mt-4 mb-4 h-screen w-full flex  flex-col  items-center '>
            <div className='input '>
                <input
                    type='text'
                    className='outline-none py-1  rounded-l-full px-4 sm:w-40'
                    placeholder='Enter your todo...'
                />
                <button className='bg-blue-200 px-2 py-1 rounded-r-full '>
                    Add
                </button>
            </div>
            <div className='task-list w-full  overflow-y-scroll flex flex-col gap-4 justify-center items-center mt-8'>
                {data?.data?.map((item: unknown) => {
                    return <TodoItem {...item} key={item._id} />;
                })}
            </div>
        </div>
    );
};
export default Todo;
