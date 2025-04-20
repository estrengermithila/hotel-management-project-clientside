
import f from '../assets/f1.jpeg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpeg'
import f4 from '../assets/f4.jpg'
import f5 from '../assets/f5.jpeg'
import f6 from '../assets/f6.jpg'

const CardGallery = () => {
    
    return (
        <div>
            
            <div className='grid grid-cols-3 gap-3'>
                                          <div className='w-[80px]'>
                                          <img  className='h-[80px]' src={f} alt="" srcset="" />
                                          </div>
                                          <div className='w-[80px]'>
                                          <img  src={f2} alt="" srcset="" />
                                          </div>
                                          <div className='w-[80px]'><img className='' src={f3} alt="" srcset="" /></div>
                                          <div className='w-[80px]'><img className='' src={f4} alt="" srcset="" /></div>
                                          <div className='w-[80px]'><img className='' src={f5} alt="" srcset="" /></div>
                                          <div className='w-[80px]'><img className='' src={f6} alt="" srcset="" /></div>
                                        </div>
        </div>
    );
};

export default CardGallery;