import React from 'react'
import image3 from '../../assets/image3.png';
import { FaGlobe } from "react-icons/fa6";
import Layout from '../Layout';

const AboutUs = () => {
  return (
    <div className='overflow-hidden'>
      <Layout>
      <div className="container min-h-[20px]">
          <section>
          <div
            className="w-screen bg-opacity-60 bg-cover bg-center min-h-[50vh] flex items-center justify-start overflow-hidden relative"
            style={{ backgroundImage: `url(${image3})` }}>
          </div>
          </section>

          <section>
          <div>
            <div className='text-center py-20 px-40 justify-center align-middle'>
                <div>
                    <h2 className=" mb-0 text-3xl font-bold leading-[1.2] text-secondary dark:text-white sm:text-4xl md:text-[40px]">
                    Our Story:
                    </h2>
                    <h2 className=" mb-0 mt-4 text-xl font-bold leading-[1.2] text-secondary dark:text-white text-opacity-70">
                    “Navigating Dreams Amidst Challenges”
                    </h2>
                    <p className=" text-body-color text-secondary text-opacity-15 dark:text-white font-bold text-3xl">-------------
                    </p>
                    <p className='mb-5 text-lg leading-8'>HighDream Consulting was founded with the straightforward goal of helping people overcome the obstacles we had to encounter. The inspiration behind HighDream is our story—a narrative of surmounting obstacles and coming up with answers. We launched this business to simplify the immigration procedure because we have personally encountered its challenges.</p>
                    <p className='text-lg leading-8'>Beyond being a company, HighDream is our means of imparting our knowledge and assisting you in avoiding the challenges we faced. Come along with us as we transform our tale into a roadmap for your journey, one that is filled with more success and less hardship.
                    </p>
                    <p className='font-bold mt-5 mb-5 text-lg leading-8'> "Embracing Dreams, Skillfully Managing Excursions with Prudence."</p>
                    <p className='text-lg leading-8'>HighDream Consulting is an innovative company that offers full immigration services in Portugal, Spain, and the United Kingdom. Our business is a reaction to the market, not only a supplier of services. </p>
                    <p className='font-bold mt-5 text-lg leading-8'> Join us at HighDream Consulting, where dreams are embraced, journeys are expertly guided, and the pursuit of a better life becomes a reality.</p>
                </div>
            </div>
            <section>
            {/* <div className='text-center py-20 px-40 justify-center align-middle'>
              <h2 className=" mb-0 text-3xl font-bold leading-[1.2] text-secondary dark:text-white sm:text-4xl md:text-[40px]">
                Our Story:
              </h2>
              <h2 className=" mb-0 mt-4 text-xl font-bold leading-[1.2] text-secondary dark:text-white ">
                “Navigating Dreams Amidst Challenges”
              </h2>
              <p className=" text-body-color text-secondary text-opacity-15 dark:text-white font-bold text-3xl">-------------
              </p>  
            </div>   */}
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 text-center justify-center lg:gap-8 px-40 mb-20 ">
              <div class="h-auto rounded-lg bg-gray-100 py-5 px-10 hover:shadow-md" >
                <dd class="order-first text-3xl font-semibold tracking-tight text-secondary  mt-5 mb-3">Vision:</dd>
                <dt class="text-lg leading-8 text-gray-600">Pioneering immigration services, we redefine relocation with a seamless, personalized touch. Our vision: a world where clients feel secure, valued, and part of a welcoming community.</dt>
              </div>
              <div class="h-auto rounded-lg bg-gray-100 py-5 px-10 hover:shadow-md">
                <dd class="order-first text-3xl font-semibold tracking-tight text-secondary  mt-5 mb-3">Mission:</dd>
                <dt class="text-lg leading-8 text-gray-600">Dedicated to realizing dreams for individuals, families, students, and professionals. Offering unmatched immigration services, business setup aid, and education support. Fostering an environment where aspirations bring security and belonging.</dt>
              </div>
              <div class="h-auto rounded-lg bg-gray-100 py-5 px-10 hover:shadow-md">
                <dd class="order-first text-3xl font-semibold tracking-tight text-secondary  mt-5 mb-3">Values:</dd>
                <dt class="text-lg leading-8 text-gray-600">Modern firm prioritizing professionalism, efficiency, and international connections. Offering high-end services, creating a welcoming atmosphere, and ensuring diverse client needs are met.</dt>
              </div>
            </div>
          </section>
           
           <section>
           <div>
                <div class="bg-white py-7">
                  <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:max-w-none">
                      <div class="text-center">
                        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-secondary">Our Team</h2>
                        <p class="mt-4 text-lg leading-8 text-gray-600">
                        Our team members have cumulative experience of more than twenty years bringing diverse expertise to HighDream Consulting.
                        </p>
                        <p class="mt-4 text-lg leading-8 text-gray-600">
                        Immigration team specialists are well-versed in the intricacies of immigration processes, possessing a deep understanding of the legalities and requirements involved. Their expertise ensures that our clients receive accurate and up-to-date information, making their transition to a new country as smooth as possible through our third-party legal firm. 
                        </p>
                        <p class="mt-4 text-lg leading-8 text-gray-600">
                        The Founder with a Finance and Business Management Degree from Northumbria University and a strong background in real estate in Qatar, starting as an accountant before moving to Portugal. Another team member holds a degree in Electronic Engineering since 2004, boasting over 10 years of valuable experience in real estate across Qatar, Dubai, Georgia, and Portugal. Their knowledge extends to business management, investment, and immigration processes, offering valuable insights to clients seeking to relocate to Europe and other countries. Our dedicated lawyer brings extensive knowledge, particularly in legal matters related to immigration. With a profound understanding of the laws and regulations crucial for the immigration process, our lawyer plays a pivotal role in ensuring that all legal aspects are meticulously handled.                         
                        </p>
                      </div>
                      <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        <div class="flex flex-col bg-gray-200/50 p-8">
                          <dt class="text-sm font-semibold leading-6 text-gray-600">Active Users</dt>
                          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">12,345</dd>
                        </div>
                        <div class="flex flex-col bg-gray-200/50 p-8">
                          <dt class="text-sm font-semibold leading-6 text-gray-600">Transactions Today</dt>
                          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">1.23M</dd>
                        </div>
                        <div class="flex flex-col bg-gray-200/50 p-8">
                          <dt class="text-sm font-semibold leading-6 text-gray-600">Total Revenue</dt>
                          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">$5.6B</dd>
                        </div>
                        <div class="flex flex-col bg-gray-200/50 p-8">
                          <dt class="text-sm font-semibold leading-6 text-gray-600">Happy Customers</dt>
                          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">98%</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
              </div>
            </div>
            <div>
                <div class="text-center px-40 mt-20">
                  <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-secondary">Our Clients</h2>
                  <p class="mt-4 text-lg leading-8 text-gray-600">
                  Our clients comprises a diverse range of individuals, including students pursuing higher education, business professionals seeking new opportunities, remote workers, and families looking to settle in Portugal, Spain, and the UK.
                  </p>
                </div>
            </div>
           </section>
          </div>

          </section>

          
      </div>
      </Layout>
    </div>
  )
}

export default AboutUs