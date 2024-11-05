
function App() {

  return (
    <>
     <div className="min-h-screen bg-white">
      <header className="bg-blue-500 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            DiagnoEase
          </a>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/all-tests">All Tests</a></li>
              <li><a href="/bmi-calculator">BMI Calculator</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </nav>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
            Dashboard
          </button>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
            Logout
          </button>
        </div>
      </header>

      <main>
        <section className="bg-cover bg-center py-32" style={{ backgroundImage: 'url("https://i.ibb.co/vHcjpn3/Blood-Test.jpg")' }}>
          <div className="container mx-auto text-white text-center">
            <h1 className="text-4xl font-bold mb-4">New Year Offer</h1>
            <p className="text-xl mb-8">Start the new year with a healthy lifestyle. Special offers available.</p>
            <a href="/all-tests" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
              All Tests
            </a>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-4">Apply Coupon Code</h2>
          <div className="flex items-center">
            <input type="text" placeholder="Coupon Code" className="border rounded-l-md px-4 py-2 w-full" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-md">
              Apply
            </button>
          </div>
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

export default App
