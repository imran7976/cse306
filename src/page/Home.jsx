import Banner from "../compnents/Home/Banner"
import FeaturedTests from "../compnents/Home/FeaturedTest"
import Promotions from "../compnents/Home/Promotions"
import Recommendation from "../compnents/Home/Recommendation"
import Nav from "../compnents/Shared/Nav"


function Home() {

  return (
    <>
     <div className="min-h-screen bg-white">
      <header>
        <Nav />

      </header>

      <main>
        <Banner />
        <section className="container mx-auto py-12">
        <h2 className="text-5xl font-bold mb-4 text-center">Featured Tests</h2>
        <FeaturedTests />
        
        </section>

        <section className="container mx-auto py-12">
        <h2 className="text-5xl font-bold mb-4 text-center">Promotions Offer</h2>
        <Promotions /> 
        <Recommendation />
        </section>
        
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 DiagnoEase. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/all-tests">All Tests</a></li>
              <li><a href="/bmi-calculator">BMI Calculator</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home
