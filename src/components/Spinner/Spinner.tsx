import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='animate-bounce w-6 h-6 bg-current rounded-full opacity-75 text-green-300' role="status">
                <span className='visually-hidden pl-8'>Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;