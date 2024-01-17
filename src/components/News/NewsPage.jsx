import React from 'react';
import { Link } from 'react-router-dom';
import image5 from '../../assets/image5.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NewsCard = ({ imageUrl, title, date, description, to }) => {
  return (
    <Link
      to={to}
      className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full object-cover rounded-xl" src={imageUrl} alt="Image Description" />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">{title}</h3>
        <div className="flex items-center gap-x-3 mt-2">
          <h5>{date}</h5>
        </div>
        <p className="mt-5 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

const NewsPage = () => {
  const newsData = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'The best and worst Portuguese municipalities for tax benefits in 2024',
      date: '15-oct-2024',
      description: 'Some municipalities retain 0% of the IRS collected from their residents, offering the highest tax benefits. Others retain 5%, offering the lowest tax benefits.',
      to: '/article',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      title: 'Municipalities lure residents with tax breaks in 2024',
      date: '11-june-2024',
      description: 'Each municipality can retain up to 5% of the IRS collected from its residents, affecting their tax deduction.',
      to: '/article',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80',
      title: 'How to lower your taxes by picking the right municipality in Portugal',
      date: '11-Nov-2023',
      description: 'The IRS deduction depends on the percentage retained by the local government, which varies from 0% to 5%. The lower the percentage, the higher the return rate.',
      to: '/article',
    },
    
  ];

  return (
    <div className="overflow-hidden">
      <Navbar />
      <section>
        <div className="min-h-[50vh] relative">
          <div
            className="w-screen bg-opacity-60 bg-cover bg-center min-h-[50vh] flex items-center justify-center overflow-hidden relative"
            style={{ backgroundImage: `url(${image5})` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="form-control inline-block">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section>
        <div className="px-40">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Featured News</h2>
              <p className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white text-secondary">
                ________________________
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
      {/* Add more news articles as needed */}
      <section>
        <div className="px-40">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">News Section Title</h2>
              <p className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white text-secondary">
                ________________________
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-secondary bg-white text-secondary shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/article"
              >
                Read more
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
