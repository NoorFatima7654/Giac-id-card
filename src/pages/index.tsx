import React from 'react'
import Image from 'next/image'
export default function IDCard () {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
     <div className='flex-grow flex items-center justify-center p-6'>
      <div className=' bg-white p-12 rounded-lg shadow-lg max-w-3xl w-full flex items-center justify-center border-4 border-sky-300'>
{/* backgroung*/} 
 <div className=' absolute inset-0 flex items-center justify-center'>
<div className='relative w-full h-full max-w-[300px] max-h-[500px]'>
<Image
src="/images/background.jpeg"
alt="background image"
width={350}
height={400}
objectFit='cover'
className='opacity-10'/>

</div>

 </div>
{/* left section*/} 
<div className='w-2/3 pr-4 pt-16 relative z-10'>
{/* Logo section*/} 
<img
src='/images/logo.jpeg'
alt='card logo'
className='absolute top-[-20px] left-0 w-16 h-18 z-10'/>
<p className='mb-2'>
  <span className='text-sky-500'> 
    {" "}<strong> Name:</strong></span>
<span className='text-black'><strong>Noor Fatima</strong> </span>
</p>

<p className='mb-2'>
  <span className='text-sky-500'> 
    {" "}<strong> Roll no:</strong></span>
<span className='text-black'><strong>00439861</strong> </span>
</p>

<p className='mb-2'>
  <span className='text-sky-500'> 
    {" "}<strong> Distance Learning:</strong></span>
<span className='text-black'><strong>No</strong> </span>
</p>

<p className='mb-2'>
  <span className='text-sky-500'> 
    {" "}<strong> City:</strong></span>
<span className='text-black'><strong>Karachi</strong> </span>
</p>

<p className='mb-2'>
  <span className='text-sky-500'> 
    {" "}<strong> Center:</strong></span>
<span className='text-black'><strong>Governer House Karachi</strong> </span>
</p>

<p className='mb-2'>
  <span className='text-sky-500'> 
    {" "}<strong> Campus:</strong></span>
<span className='text-black'><strong>Main </strong></span>
</p>

<p className='mb-2'>
  <span className='text-sky-500'> 
    {" "}<strong> Day/Time:</strong></span>
<span className='text-black'> <strong>Saturday-02:00PM-5:00PM </strong></span>
</p>

<p className='mb-2'>
  <span className='text-sky-500'> 
    {" "}<strong> Batch:</strong></span>
<span className='text-black'>1 </span>
</p>

{/*button section */}
<div className='flex flex-col- mt-4' >
  <button className='relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex'>
<span className='absolute inset-0 bg-slate-500'
  style={{ width:"50%"}}>
 
</span>
<span className='relative z-10'> Q1 & WMD </span>



  </button>
</div>

</div>
{/* right  section*/} 
<div className='w-1/5 h-1/3 text-center relative z-10'>
<Image
src= {"/images/noor.jpeg"}
alt={"profile picture"}
width={800}
height={800}
className='rounded-lg mb-6 w-full'/>
<p className='border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl'> Authorized Signature</p>

</div>

 
      </div>
     </div>

    </div>
  )
}
