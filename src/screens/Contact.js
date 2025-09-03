
import { FiMapPin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import {FiPhoneCall} from 'react-icons/fi'
import Head from '../components/Head'
const Contact = ()=>{
    const contactData = [
        {
            id:1,
            title:"Email Us",
            info:"Interactiely grow backend ideas for cross platform models.",
            icon:FaRegEnvelope,
            contact:'info@gmail.com '
        },
        {
            id:2,
            title:"Call Us",
            info:"Interactiely grow backend ideas for cross platform models.",
            icon:FiPhoneCall,
            contact:'+255 789 456 123 '
        },
        {
            id:3,
            title:"Locaction",
            info:"Dar es salaam, Tanzania. 345 Kigamboni, Street No. 12, ",
            icon:FiMapPin,
            contact:''
        }
        
    ]
return (
    <div className="container mx-auto min-h-screen px-2 my-6">
        <Head title={"Contact Us"}/>
        <div className='grid grid-cols-1 py-20 gap-6 lg:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-10'>
            {contactData.map((item)=>(
                <div key={item.id} className='border border-border flex-cols p-10 bg-dry rounded-lg text-center'>
                    <span className='flex-cols w-40 h-40 rounded-full bg-main text-subMain'>
                        {<item.icon size={24}/>}
                    </span>
                    <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                    <p className="mb-0 text-sm text-text leading-7">
                        <a className="text-blue-600" href={`mailto:${item.contact}`}>{item.contact}</a>
                        {item.info}
                    </p>
                </div>
            ))}
        </div>
    </div>
)
}

export default Contact