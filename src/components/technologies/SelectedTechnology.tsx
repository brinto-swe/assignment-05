import React from 'react';

const SelectedTechnology = () => {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <div className='card-body flex flex-col'>
                <h2 className='text-lg font-bold'>Your Stack</h2>
                <p className='text-gray-400'>No Technologies Selected yet</p>
                <div className='flex flex-col items-center border border-gray-400 border-dashed p-4 rounded-lg mt-4'>
                    <p>Your Stack is empty</p>
                </div>
            </div>
        </div>
    );
};

export default SelectedTechnology;