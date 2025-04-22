import { useLoaderData, useParams } from 'react-router-dom';
import { GiSwirlRing } from 'react-icons/gi';
import lottiefeedBack from '../assets/contact.json'
import Lottie from 'lottie-react';
import CardGallery from './CardGallery';

const CardGalleryDetails = () => {
    
    const data = useLoaderData();
    // console.log(data);
    const {id} = useParams();
    // console.log(typeof id);

    const onlyData = data.find((specificData) => specificData.id === Number(id));
    // console.log(onlyData);
    const {title, image,date} = onlyData;

    return (
        <div className=''>
              <div className='bg-[url(/assets/bannerImage.jpg)] bg-no-repeat bg-cover bg-black/50 w-full h-[400px]  bg-center w-full'>
                <div className='bg-black/50 w-full min-h-[400px]'>
                <div className='relative flex flex-col justify-center items-center top-48'> 
                <h1 className='text-white text-4xl font-bold'>{title}</h1>
                </div>
                </div>
            </div>

            <div className='mt-10 max-w-7xl mx-auto'>
                
               <div className='flex gap-5'>
               <div className='mb-10 w-3/4'>
               <div className='flex items-center gap-4 mb-5'>
                <p className='btn btn-warning'>{date}</p>
                <p>Posted by : <span className='font-semibold'>Admin</span> </p>
                </div>
                
                <div>
                <img className='w-[1000px] h-[800px]' src={image} alt="" />
                </div>
                <div className='mt-16'>
                    <p className='mb-7 text-xl text-[#787778]'>Some of the most successful brands in the world credit their success to their customer-centric culture. In the hospitality space, enhancing guest experience is more important now than it ever has been in the past. Now, because we at Hotelogix strongly believe in the mantra of “What is measured, is managed”, we thought it is best if we took a stat-based approach in this blog- to show you just how compelling the case is. Here you go- 5 tips with relevant stats that will push you to make guest experience your niche.</p>
                <p className='mb-7 text-xl text-[#787778]'>That’s right! Treating your hotel guests, the way they should be, can actually bring in more business for you. Because that’s the one thing people look forward to! And for hotels, this starts even before the check-in happens! Right from the moment they start their search for a hotel, you should stand out for them. Their engagement with you should be consistent across all touchpoints- be it in the discovery phase, at the booking phase, pre-arrival, while checking-in, through their stay, at check-out and post departure.</p>
                <p className='mb-7 text-xl text-[#787778]'>You cannot promise them the stars in your description online and then give them anything less during the other phases. Be modest in your approach- that’s ok, but be genuine with your service. Genuine service will always translate into more satisfaction. Or if you think elaborate & personalized hotel guest experience is your thing, then go ahead and blow their minds off with it. Point is, to do it consistently throughout their journey with you. Because, like we saw- if it feels right, they will give you their business.</p>
                </div>
                
               </div>
               <div className='mt-16 w-1/4'>
               <CardGallery></CardGallery>
               </div>
               </div>


              <div>
              <div className='flex'>
            <div className='w-2/4 flex flex-col  items-center'>
            <div className='flex flex-col justify-center items-center'>
                <p className='mt-10 text-5xl mb-4 text-center text-[#b55b02]'><GiSwirlRing /></p>
                <h1 className="text-5xl  mb-8 font-bold">Leave a Reply</h1>
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
          <button className="btn bg-[#b55b02] text-white">Post a Comment</button>
        </div>
      </form>
    </div>
            </div>
            <div className='w-[400px] flex mt-28 justify-center'>
              <Lottie animationData={lottiefeedBack}></Lottie>
            </div>
        </div>
            </div>
              </div>
        </div>
    );
};

export default CardGalleryDetails;