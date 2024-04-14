import React, { ChangeEvent, useRef, useState } from 'react';
import { Plus } from '@/assets/icons/Plus';

interface UploadImageProps {
    setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

export const UploadImage: React.FC<UploadImageProps> = ({ setImage }) => {
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setImage(file);
        }
    };

    return (
        <div className='w-[86px] h-[79px] border rounded border-green-willam flex flex-col items-center mt-3 justify-center'>
            <input
                id="image-upload-input"
                type="file"
                onChange={handleImageChange}
                ref={hiddenFileInput}
                style={{ display: "none" }} // Hide the input visually
            />
            <label htmlFor="image-upload-input" className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                <Plus className="stroke-green" />
                <h5 className='text-[11px] text-green-willam'>Add Media</h5>
            </label>
        </div>
    );
};

