import TodoItem from './TodoItem';

const Todo = () => {
    return (
        <div className=' mt-4 mb-4 h-screen w-full flex  flex-col justify-center items-center '>
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
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
};
export default Todo;
