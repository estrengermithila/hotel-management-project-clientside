import React from 'react';
import { GiSwirlRing } from 'react-icons/gi';
import lottiefeedBack from '../assets/contact.json'
import Lottie from 'lottie-react';
const FeedBackForm = () => {
    return (
        <div className='flex max-w-7xl mx-auto'>
            <div className='w-2/4 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <p className='mt-10 text-5xl mb-4 text-center text-[#b55b02]'><GiSwirlRing /></p>
                <h1 className="text-5xl  mb-8 font-bold">Feedback Form</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <textarea
  placeholder="Message"
  className="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea>
        
        <div className="form-control mt-6">
          <button className="btn bg-[#b55b02] text-white">Send Message</button>
        </div>
      </form>
    </div>
            </div>
            <div className='w-[400px] flex mt-28 justify-center'>
              <Lottie animationData={lottiefeedBack}></Lottie>
            </div>
        </div>
    );
};

export default FeedBackForm;