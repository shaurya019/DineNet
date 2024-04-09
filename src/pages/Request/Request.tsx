import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import { useComplimenatryProductCategory } from "@/hooks/useComplimenatryProductCategory";
import Nav from '@/components/Navbar';
import DownArrow from '@/assets/icons/DownArrow';
import UpwardArrow from '@/assets/icons/UpwardArrow';
import UploadImage from '@/atomicComponents/ImageUploader'; 
import Loader from "@/atomicComponents/Loader";

export const Request = () => {

    // Api fetch for Complimenatry Product Category
    const { data = [], isLoading } = useComplimenatryProductCategory();

    // React Hooks
    const [RequestSubmit, setRequestSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [value, setValue] = useState('NotDisclosed');
    const [submit, setSubmit] = useState(false);
    const [productName, setProductName] = useState('');
    const[productId,setProductId] = useState(0);
    const [area, setArea] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const names = data.map((product: any) => product.product_name);
        setProductName(names);
        const id = data.map((product: any) => product.id);
        console.log("NameId",id);
        setProductId(id);
        if (value !== 'NotDisclosed') {
            setSubmit(true);
        }
        if (textareaRef.current) {
            textareaRef.current.style.height = '117px';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [area,data,value]);



    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setArea(event.target.value);
    };

    const handleItemClick = (newValue: string) => {
        setValue(newValue);
        setIsOpen(false);
    };

    if (isLoading) return (
        <div className="flex flex-1 items-center justify-center h-screen">
          <Loader />
        </div>
      ); 

    return (
        <>
            <Nav title="Request" show="True" showEmpty="False" />
            <div className='flex flex-col mt-3 mx-2.5'>
                <h3 className='text-green-mineral text-base mb-2'>We're delighted to assist you!</h3>
                <h5 className='text-[10px] text-grey-dark mb-[22px]'>Kindly fill out the following details to submit your request and experience seamless assistance.</h5>
                <div className="relative">
                    {isOpen ? (
                        <button className={`h-[34px] w-full border ${value === 'NotDisclosed' && RequestSubmit ? 'border-red-dark' : 'border-green-willam'} rounded px-[10px]`} onClick={() => setIsOpen(!isOpen)}>
                            <div className='flex flex-row items-center justify-between'>
                                <h5 className='text-xs text-green-willam'>
                                    {value === 'NotDisclosed' ? 'Select Category' : value}
                                </h5>
                                {value === 'NotDisclosed' ? <DownArrow /> : ''}
                            </div>
                        </button>
                    ) : (
                        <button className={`h-[105px] mt-0 w-full border ${value === 'NotDisclosed' && RequestSubmit ? 'border-red-dark' : 'border-green-willam'} rounded`} onClick={() => setIsOpen(!isOpen)}>
                            <div className='flex flex-row items-center justify-between text-xs text-green-willam  px-[10px] mb-6'>
                                Select Category
                                <UpwardArrow />
                            </div>
                            <div className="w-full text-left px-4 py-2 text-grey-dark text-xs" onClick={() => handleItemClick(productName)}>
                                {productName}
                            </div>
                            {/* <hr className='bg-grey-sixtysix' /> */}
                        </button>
                    )}
                </div>
                {value === 'NotDisclosed' && RequestSubmit && (
                    <h5 className="text-[10px] text-red-dark">Please select a category before proceeding</h5>
                )}
                {isOpen && (
                    <textarea
                        ref={textareaRef}
                        className="w-full min-h-[117px] resize-none border border-green-willam rounded p-2 mt-2 text-[11px] text-green-willam font-light"
                        value={area}
                        onChange={handleChange}
                        placeholder='Tell us what you need'
                    />
                )}
                {isOpen && !image && <UploadImage setImage={setImage} />}
                {isOpen && image && (
                    <img src={URL.createObjectURL(image)} alt="" className='w-[86px] h-[79px] mt-3  rounded' />
                )}
            </div>
            <BottomSubmit Heading="Submit Request" setSubmit={setRequestSubmit} productId={productId} imageFile={image} textRequest={area} path="RequestCart" category={value} submit={submit} requestText={area} />
        </>
    );
};