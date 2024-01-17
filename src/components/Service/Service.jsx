import React from 'react';
import { LiaAtlasSolid } from "react-icons/lia";
import { RiFileList3Line } from "react-icons/ri";
import { RiHomeOfficeLine } from "react-icons/ri";
import image2 from '../../assets/image2.png';

const Service = () => {
  return (
    <div className='bg-green-50'>
        <div className='px-40'>
                
                <div className='text-center py-20'>
                    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px] text-secondary">
                    Our Services
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                    We offer personalised investment and residency solutions from leading experts in Portugal's investment and residency programmes, independent, agenda-free and client-focused advice, and an entirely transparent fee structure with no hidden costs.
                    </p>
                </div>
                

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 m-4">
            <Section
            icon={<LiaAtlasSolid className='text-7xl text-secondary opacity-60 px-2 items-start'/>}
            title="Section 1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque quod odio numquam suscipit quae culpa iste repellendus officia esse. Consequuntur aut rerum iure, ducimus voluptatibus, facere illo dolorum veritatis incidunt, beatae maxime fugiat."
            />

            <Section
            icon={<RiFileList3Line className='text-7xl text-secondary opacity-60 px-2 items-start'/>}
            title="Section 2"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit laborum labore quam facilis corporis facere! Ex eos placeat voluptas. Tempora, commodi ab et perferendis deleniti a. Ipsam obcaecati magni aliquam debitis vero excepturi."
            />

            <Section
            icon={<RiHomeOfficeLine className='text-7xl text-secondary opacity-60 px-2 items-start'/>}
            title="Section 3"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit incidunt numquam porro delectus doloremque repellat tempora, reiciendis veniam nulla reprehenderit? Nostrum blanditiis magni harum perferendis asperiores pariatur vero iusto a, reiciendis, obcaecati, dignissimos totam."
            />

            <Section
            icon={<RiFileList3Line className='text-7xl text-secondary opacity-60 px-2 items-start'/>}
            title="Section 4"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic dignissimos ipsam, explicabo vel corrupti esse laborum dolore ipsum quaerat veniam possimus odio! Fuga quidem aliquam enim. Saepe, velit facere id recusandae molestias eum."
            />
        </div>
      
    </div>
        <div>
        <img src={image2} alt="image" className="w-full h-auto mt-20 p" />
        </div>
    </div>
  );
}

export default Service;

const Section = ({ icon, title, content }) => (
    <div className=" bg-white p-4 rounded-xl dark:bg-slate-800 dark:text-white mb-4">
      <div className='flex flex-col gap-2'>
        {icon}
        <div>
          <h2 className="text-lg font-semibold mb-1">{title}</h2>
          <p className='text-lg'>{content}</p>
          <button className="btn btn-link">Learn more</button>
        </div>
      </div>
    </div>
  );
