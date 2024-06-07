import NotFound from '@/assets/icons/NotFound';
import React from 'react';

const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <p className='font-extrabold text-base text-center text-blue-pantone'>
                Oops! This is a 404 page.<br />
                You aren't going to find what you're<br />
                looking for here.
            </p>
            <NotFound />
        </div>
    );
}

export default PageNotFound;
