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
    </div>
    </>
  )
}

export default Home
