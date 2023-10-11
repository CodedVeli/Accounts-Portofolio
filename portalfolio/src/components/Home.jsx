// import {Profile} from '../assets/images/Profile1.jpg'
import { RiPhoneFill } from "react-icons/ri";
import { GoMail, GoHome } from "react-icons/go";

const Home = () => {

    const imageUrl = 'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80'
    return (
        <div id="home" className="  flex self-center xl:flex flex-col items-center justify-center gap-10 space-y-10  md:flex-row  md:pb-10   ">
            
            <div className=" mt-4">
            <img src={imageUrl} alt="Profile" className=" container rounded-md xl:ml-10 xl:mt-8 xl:w-96 md:ml-5 md:w-72  xl:pb-10 sm:mx-auto sm:mt-10 w-96   xl:duration-200 xl:hover:scale-105 "/>
            </div>
                <div className=" space-y-5">
                    <div className=" flex flex-col self-center ml-5  md:flex-none pr-10">
            <p className="  font-IbmPlex  lg:text-lg sm:text-lg"> Hello, I'm</p>
            <h1 className=" sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl  font-bold font-IbmPlex">Clementine Rose</h1>
            <h3 className=" text-2xl font-IbmPlex"> Accountant</h3>
            <p className=" whitespace-normal flex flex-wrap font-IbmPlex lg:text-lg sm:text-lg xl:text-xl  ">I am a professional accountant with 10 years of experience in the field of accounting and finance. I have worked with many companies and have helped them in managing their accounts and finances. I have also worked as a consultant for many companies and have helped them in managing their accounts and finances. I have also worked as a consultant for many companies and have helped them in managing their accounts and finances.</p>  
                
            </div>
            <div className=" flex flex-row mx-5 gap-4"> <RiPhoneFill className=" text-2xl " />  +254 7355 74541</div>
                 <div className=" flex flex-row  mx-5 gap-4"> <GoMail className=" text-2xl"/> accountsplan@gmail.com</div>
                    <div className=" flex flex-row mx-5 gap-4"> <GoHome className=" text-2xl" /> Nairobi, Kenya</div>
            </div>
           
        </div>
    );
};

export default Home;

