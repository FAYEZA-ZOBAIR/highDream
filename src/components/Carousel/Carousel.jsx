import React from 'react'
import image2 from '../../assets/image2.png';

const Carousel = () => {
  return (
    <div className='bg-green-50'>
        <div className='px-40 mt-20'>
            <div className='text-center py-16'>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px] text-secondary">
                Why Portugal
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
              Portugal, Europe's oldest nation, boasts timeless landscapes and a temperate climate, epitomized by Lisbon's 3,000 hours of annual sunshine. With a rich cultural heritage spanning over five centuries, Portugal is a welcoming democracy, part of the European Union, and a potential gateway to 250 million people in Portuguese-speaking countries worldwide.
              </p>
            </div>
        <div className="carousel w-full relative">
        <div id="item1" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1657563495712-d581ce8e4f9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover " />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Lisbon:</h2>
            <p className="text-lg flex-wrap">The capital, known for its historic charm, vibrant culture, and iconic architecture, offers breathtaking views from São Jorge Castle. Wander through narrow streets, enjoy Fado music, and indulge in delectable pastries like Pastel de Nata.</p>
          </div>
        </div> 
        <div id="item2" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1569959595862-1c84553361c1?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Porto:</h2>
            <p className="text-lg">Porto, steeped in history along the Douro River, enchants with wine cellars and historic Ribeira. UNESCO-listed, it beckons with cultural riches, from Livraria Lello to vibrant local scenes.</p>
          </div>
        </div> 
        <div id="item3" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1563041853-66cf297d468e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Funchal</h2>
            <p className="text-lg">Funchal, Madeira's capital, blooms with botanical gardens and a tropical climate. Its vibrant street art, renowned Madeira wine, and panoramic views from Pico do Arieiro create an island haven.</p>
          </div>
        </div> 
        <div id="item4" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1669128956938-736e28047798?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Braga</h2>
            <p className="text-lg">Braga, with religious roots, blends history and festivals. Bom Jesus do Monte and Sé Cathedral stand tall. The city's cultural tapestry, from academia to traditional events, beckons exploration.</p>
          </div>
        </div>
        <div id="item5" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1605387460452-a84acd7238ef?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Coimbra</h2>
            <p className="text-lg">Coimbra, a city of academia, unfolds with historic libraries and the Royal Palace. Fado de Coimbra's soul-stirring melodies echo through ancient streets, offering cultural immersion.</p>
          </div>
        </div>
        <div id="item6" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1511894993551-4e167f7eb8f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Aveiro</h2>
            <p className="text-lg">Aveiro, Portugal's Venice, charms with canals and Moliceiros boats. Ovos moles sweets tempt taste buds. Costa Nova beach and São Gonçalinho Chapel add coastal allure.</p>
          </div>
        </div>
        <div id="item7" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1631269214044-d6d45f9e3b23?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Sintra</h2>
            <p className="text-lg">Sintra, a UNESCO gem, captivates with fairytale palaces and lush gardens. Quinta da Regaleira's mystical aura and Pena Palace's vivid colors create a magical experience in this hillside retreat.</p>
          </div>
        </div>
        <div id="item8" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1627826674719-f5edf5a170fe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Cascais</h2>
            <p className="text-lg">Cascais, a coastal haven near Lisbon, boasts sandy beaches and a historic town center. The Boca do Inferno cliffs and cultural richness make it an elegant escape.</p>
          </div>
        </div>
        <div id="item9" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1651508820682-2d3e37e7183e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Évora</h2>
            <p className="text-lg">Évora, a UNESCO heritage site, unfolds with well-preserved medieval streets and landmarks. The Temple of Diana and the Cathedral stand as testament to its historical significance.</p>
          </div>
        </div>
        <div id="item10" className="carousel-item relative w-full h-96">
          <img src="https://images.unsplash.com/photo-1627826676942-576ea238e0cc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Lagos</h2>
            <p className="text-lg">Lagos, a coastal gem in the Algarve, showcases stunning cliffs and Ponta da Piedade's beauty. Historical sites and vibrant nightlife make it an ideal destination for sun-seekers and history enthusiasts alike.</p>
          </div>
        </div>
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
        <a href="#item5" className="btn btn-xs">5</a>
        <a href="#item6" className="btn btn-xs">6</a>
        <a href="#item7" className="btn btn-xs">7</a>
        <a href="#item8" className="btn btn-xs">8</a>
        <a href="#item9" className="btn btn-xs">9</a>
        <a href="#item10" className="btn btn-xs">10</a>
      </div>

        </div>
        <div>
      <img src={image2} alt="image" className="w-full h-auto mt-20 p" />
    </div>
    </div>
  )
}
export default Carousel