import React,{useState,useEffect,useRef,ChangeEvent} from 'react'
import BottomSubmit from '@/components/BottomSubmit';
import Nav from '@/components/Navbar';
import DownArrow from '@/assets/icons/DownArrow'
import UpwardArrow from '@/assets/icons/UpwardArrow'
import {Plus} from '@/assets/icons/Plus'

export const Request = () => {
    const [RequestSubmit, setRequestSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState('NotDisclosed');
  const [area, setArea] = useState('Tell us what you need ');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const hiddenFileInput = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '117px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [area]);



  const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setArea(event.target.value);
  };

  const handleItemClick = (newValue: string) => {
    console.log("Value",newValue);
    setValue(newValue);
    setIsOpen(false);
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
        const file = files[0];
        console.log(file);
        setImage(file);
    }
  }
  return (
   <>
     <Nav title="Request"  show="True" showEmpty="False"/> 
     <div className='flex flex-col mt-3 mx-2.5'>
        <h3 className='text-green-mineral text-base mb-2'>We're delighted to assist you!</h3>
        <h5 className='text-[10px] text-grey-dark mb-[22px]'>Kindly fill out the following details to submit your request and experience seamless assistance.</h5>
        <div className="relative">
        {isOpen ? <button className={`h-[34px] w-full border ${value === 'NotDisclosed' && RequestSubmit ? 'border-red-dark' : 'border-green-willam'} rounded px-[10px]`}  onClick={() => setIsOpen(!isOpen)}>
        <div className='flex flex-row items-center justify-between'>
             <h5 className='text-xs text-green-willam'>
            {value === 'NotDisclosed' ? 'Select Category' : value}
            </h5>
            {value === 'NotDisclosed' ? <DownArrow /> : ''} 
              </div>
        </button>
        :
        <button className={`h-[234px] w-full border ${value === 'NotDisclosed' && RequestSubmit ? 'border-red-dark' : 'border-green-willam'} rounded`}  onClick={() => setIsOpen(!isOpen)}>
        <div className='flex flex-row items-center justify-between text-xs text-green-willam  px-[10px] mt-3 mb-6'>
           Select Category
            <UpwardArrow />
        </div>
              <div className="w-full text-left px-4 py-2 text-grey-dark text-xs" onClick={() => handleItemClick('Food & Beverages')}>
                Food & Beverages
              </div>
              <hr className='bg-grey-sixtysix'/>
              <div className="w-full text-left px-4 py-2 text-grey-dark text-xs" onClick={() => handleItemClick('Room Service')}>
                Room Service
              </div>
              <hr />
              <div className="w-full text-left px-4 py-2 text-grey-dark text-xs" onClick={() => handleItemClick('Local guidance')}>
                Local guidance
              </div>
              <hr />
              <div className="w-full text-left px-4 py-2 text-grey-dark text-xs" onClick={() => handleItemClick('Plumbing')}>
                Plumbing
              </div>
              <hr />
              <div className="w-full text-left px-4 py-2 text-grey-dark text-xs" onClick={() => handleItemClick('Other')}>
                Other
              </div>
            </button>
          }
     </div>
     {value === 'NotDisclosed' && RequestSubmit && (
        <h5 className="text-[10px] text-red-dark">Please select a category before proceeding</h5>
      )}
    <textarea
      ref={textareaRef}
      className="w-full h-117 resize-none border border-green-willam rounded p-2 mt-2 text-[11px] text-green-willam font-light" 
      value={area}
      onChange={handleChange}
      placeholder="Enter text..."
    />
    {
        image === null ? <div className='w-[86px] h-[79px] border rounded border-green-willam flex flex-col items-center mt-3 justify-center'>
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
    :
    <img src={URL.createObjectURL(image)} alt="" className='w-[86px] h-[79px] mt-3  rounded'/>
    }

     </div>
     <BottomSubmit Heading="Submit" Pass="Submit Request" setSubmit={setRequestSubmit}/> 
   </>
  )
}

