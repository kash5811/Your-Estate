import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Contact = ({listing}) => {
  const [landlord , setlandLord] = useState(null);
  const [message , setMessage] = useState();

  const onChange = (e) => {
    setMessage[e.target.value];
  }

  useEffect(() => {
    const fetchLandlord = async () => {
        try {
            const res = await fetch(`/api/user/${listing.useRef}`);
            const data = await res.json(res);
            setlandLord(data);
        } catch (error) {
            console.log(error);
        }
    }

fetchLandlord();
},
[listing.useRef]
)
return(
    <>
        {landlord && (
            <div className='flex flex-col gap-2'>
            <p>Contact <span  className='font-semibold'> {landlord.username}</span> for <span>{listing.name.toLowerCase()}</span></p>
            <textarea name='message' id='message' rows='2' value={message} 
            placeholder='Enter your message here...'
             onChange={(onChange)}
             className='w-full border p-3 rounded-lg'
             ></textarea>
    <Link
    to = {`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
    
    className ='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
    >
        SEND MESSAGE
    </Link>
            </div>
        )}
    </>
)
}
