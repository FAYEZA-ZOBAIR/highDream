import React from 'react'
import image5 from '../../assets/image5.png';
import Layout from '../Layout';

const Article = () => {
  return (
    <div className='overflow-hidden'>
        <Layout>
            <div
            className="w-screen bg-opacity-60 bg-cover bg-center min-h-[50vh] flex items-center justify-start overflow-hidden relative"
            style={{ backgroundImage: `url(${image5})` }}>
            </div>
            <div className='text-center py-20 px-40 justify-center align-middle'>
                <div>
                    <h2 className=" mb-0 text-3xl font-bold leading-[1.2] text-secondary dark:text-white sm:text-4xl md:text-[40px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h2>
                    <h4 className='mt-4 text-secondary'>11-November-2023</h4>
                    <p className=" text-body-color text-secondary text-opacity-15 dark:text-white font-bold text-3xl">-------------
                    </p>
                    <p className='mb-10'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, magnam sint. Fugit commodi vitae accusantium atque ad alias autem omnis eum quod aperiam illum qui, excepturi minus animi rerum magnam consectetur recusandae voluptas illo impedit consequuntur. Quibusdam, quos accusantium provident porro ea ex quaerat blanditiis. Hic debitis esse eum praesentium. Cumque ea odio consequuntur iure distinctio saepe neque hic corporis!
                    </p>
                    <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae itaque ipsum iste praesentium esse deleniti nobis, sint quod sed aut quis maiores tenetur enim id asperiores saepe suscipit mollitia expedita explicabo! In deleniti placeat sunt ullam ratione saepe odio iste culpa dicta aliquid optio rem dignissimos delectus ad modi molestias minus doloribus quidem asperiores dolore, sint veniam eligendi. Expedita consequuntur tenetur nulla dicta porro, doloribus error minus assumenda facilis! Vero, laboriosam animi? Fugiat cumque fuga officiis quos debitis iure quas tempora facilis cupiditate autem magni, dolorum minima, velit consequatur reiciendis tenetur nemo! Commodi iste minus nisi delectus consequatur deserunt aperiam.</p>
                    <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam vitae quis! Harum ipsa ea fugiat, consequatur maxime accusamus impedit vel hic aut earum distinctio voluptatum dolore necessitatibus saepe magni eveniet quae pariatur et magnam cum voluptates totam quibusdam quo? Esse recusandae est, non aliquam reiciendis eius aut at atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio sapiente debitis. Aliquid ut a repellendus! Ab accusantium esse cupiditate, voluptatum enim corrupti ut nulla impedit vero aut tenetur non pariatur accusamus quae id? Adipisci voluptatibus exercitationem ducimus sed numquam at alias ipsa magni, nulla aliquid, vitae praesentium culpa, magnam perferendis officiis impedit porro. Voluptatem iure omnis error. Aliquid, eos!</p>
                </div>
            </div>
        
        <section className="flex flex-wrap justify-between px-40">
            <div>
                <div className='text-center py-10 px-40 justify-center align-middle'>
                    <h2 className=" mb-0 text-xl font-bold leading-[1.2] text-secondary dark:text-white sm:text-4xl md:text-[40px] ">
                        More News
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 1 */}
                    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden h-32">
                        <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-24 w-24 object-cover md:h-full md:w-24" src="https://loremflickr.com/g/320/240/team" alt="Team" />
                        </div>
                        <div className="p-4">
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy.</p>
                        </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden h-32">
                        <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-24 w-24 object-cover md:h-full md:w-24" src="https://loremflickr.com/g/320/240/team" alt="Team" />
                        </div>
                        <div className="p-4">
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy.</p>
                        </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden h-32">
                        <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-24 w-24 object-cover md:h-full md:w-24" src="https://loremflickr.com/g/320/240/team" alt="Team" />
                        </div>
                        <div className="p-4">
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    </div>
  )
}

export default Article