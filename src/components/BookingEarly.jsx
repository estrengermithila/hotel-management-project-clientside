import { GiSwirlRing } from "react-icons/gi";
import { motion } from "motion/react"

const BookingEarly = () => {
    return (
        <div className="h-[453px]">
            <div className="bg-[url(./src/assets/booking.jpg)] bg-no-repeat bg-cover  bg-center absolute w-full h-[450px]">
            <div className='flex flex-col justify-center items-center relative top-28'>
                <p className=' text-5xl text-white'><GiSwirlRing />
                            </p>
            <h1 className='text-white text-7xl mb-6'>Book Early & Save</h1>
            <p className='text-white text-md text-center'>Book early and save up to 15% with Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor aliqua.</p>
        </div>
        <div className='flex justify-center items-center relative top-36'>
            <motion.button animate={{y:[0,12,0]}} transition={{repeat:Infinity,duration:4}} className='btn border-[#b55b02] text-white hover:text-white bg-transparent hover:bg-[#b55b02]'>BOOK ON BOOKING.COM</motion.button>
        </div>
            </div>
        </div>
    );
};

export default BookingEarly;