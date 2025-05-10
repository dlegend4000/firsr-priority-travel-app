import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";

const HERO_BG = "https://ext.same-assets.com/250329750/3237512107.jpeg"; // Main hero background image
const LOGO = "https://res.cloudinary.com/dl5yojeac/image/upload/v1746879692/5ddb8fe6-9d38-4b7b-8438-2e3a1cf237e3_vdeo5n.png";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-8 py-4 flex justify-between items-center bg-transparent text-white">
      <div className="flex items-center gap-8">
        <img src={LOGO} alt="Airport Assist Logo" className="h-20" />
        <ul className="hidden md:flex gap-7 text-sm tracking-wide">
          <li><Link className="hover:text-[#bfb1ac] cursor-pointer" to="/">HOME</Link></li>
          <li><Link className="hover:text-[#bfb1ac] cursor-pointer" to="/locations">LOCATIONS</Link></li>
          <li><a className="hover:text-[#bfb1ac] cursor-pointer opacity-50" href="/faqs">FAQS</a></li>
          <li><a className="hover:text-[#bfb1ac] cursor-pointer opacity-50" href="/services">SERVICES</a></li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <Link
          to="/book"
          className="bg-[#bfb1ac] text-[#191b1d] font-bold px-5 py-2 rounded hover:brightness-90 transition"
          >
          BOOK NOW
        </Link>
        <a className="hover:text-[#bfb1ac] cursor-pointer hidden md:inline" href="mailto:meet@airport-assist.com">CONTACT US</a>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      {/* Hero section */}
      <header style={{backgroundImage:`url('${HERO_BG}')`}} className="relative w-full h-[70vh] min-h-[460px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-white shadow-inner">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20 md:pt-28">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">FIRST PRIORITY</h1>
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">ELITE FAST TRACK & PERSONALIZED SERVICES</h2>
          <p className="text-base md:text-lg font-medium text-center max-w-2xl mb-6">
          AN EXCEPTIONAL AND PREMIUM SERVICE — DESIGNED TO DELIVER A SMOOTH, UNFORGETTABLE AIRPORT JOURNEY. DISCREET, PERSONALIZED, AND RESERVED FOR THOSE WHO EXPECT THE VERY BEST. THIS IS LUXURY TRAVEL REDEFINED.
          </p>
          <Link
            to="/book"
            className="border border-white px-8 py-2 text-lg font-semibold rounded transition hover:bg-white hover:text-[#191b1d]"
            >
            BOOK NOW
          </Link>
        </div>
        {/* WhatsApp badge */}
        <a href="https://wa.me/442045177711" rel="noopener noreferrer" target="_blank" className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#599f9b] px-3 py-2 rounded-l text-white text-xs font-medium flex items-center gap-1" style={{writingMode:'vertical-lr', textOrientation:'mixed'}}>WHATSAPP</a>
        {/* Recaptcha bottom right placeholder */}
        <div className="absolute bottom-4 right-4 opacity-80 scale-90">
          <div className="w-28 h-10 bg-white rounded shadow flex items-center justify-center text-xs text-[#191b1d]">reCAPTCHA</div>
        </div>
      </header>

      {/* Main section */}
      <main className="w-full bg-[#292929] flex flex-col items-center justify-center px-2 pb-12">
        {/* Concierge header */}
        <section className="w-full max-w-5xl py-10">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-3 text-white tracking-tight">PREMIUM AIRPORT CONCIERGE SERVICES</h2>
          <p className="text-center max-w-3xl mx-auto text-base md:text-lg mb-6 text-[#bfb1ac]">
          Our Airport VIP Meet & Assist service is meticulously crafted to help travelers skip long lines, overcome language barriers, and move through the airport with ease and confidence.<br/>
          Our dedicated agents provide end-to-end support for all essential formalities — including security, immigration, baggage handling, and drop-off.
          This premium service is available to all passengers, regardless of airline or ticket class. We proudly serve families, tourists, VIPs, and corporate clients — ensuring a smooth, stress-free airport experience for everyone.
          </p>
        </section>

        {/* VIP Services Cards */}
        <section className="w-full max-w-5xl flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 min-w-[170px] bg-[#4b3b3a] rounded shadow overflow-hidden h-40 flex items-end relative">
            <img src="https://res.cloudinary.com/dl5yojeac/image/upload/v1746881364/phonto_7_aj9pgk.jpg" alt="VIP Meet & Assist" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="relative p-4 w-full text-white font-bold text-lg z-10">VIP MEET & ASSIST</div>
          </div>
          <div className="flex-1 min-w-[170px] bg-[#334866] rounded shadow overflow-hidden h-40 flex items-end relative">
            <img src="https://res.cloudinary.com/dl5yojeac/image/upload/v1746881193/phonto_6_iqodea.jpg" alt="Chauffeur" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative p-4 w-full text-white font-bold text-lg z-10">CHAUFFEUR</div>
          </div>
          <div className="flex-1 min-w-[170px] bg-[#42626d] rounded shadow overflow-hidden h-40 flex items-end relative">
            <img src="https://res.cloudinary.com/dl5yojeac/image/upload/v1746881368/phonto_8_uaetyy.jpg" alt="Private Suite" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative p-4 w-full text-white font-bold text-lg z-10">PRIVATE SUITE</div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="w-full max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold mb-7 text-white tracking-tight">OUR <span className="text-[#bfb1ac]">PACKAGES</span></h2>
          <div className="flex flex-col md:flex-row gap-4">
            {/* ELITE */}
            <div className="flex-1 rounded bg-[#232323] p-6 shadow text-white min-w-[210px]">
              <div className="text-lg font-semibold mb-3">ELITE</div>
              <ul className="mb-4 text-sm text-[#bfb1ac] space-y-1">
                <li>Personal Agent</li>
                <li>Immigration Fast Track*</li>
                <li>Luggage Porter</li>
                <li>Electric Golf Buggy</li>
              </ul>
              <div className="text-xs mb-2 text-[#a6a6a6]">*Where Available<br/>Up to 3 Passengers<br/>Fast track tax return available for departure bookings</div>
              <div className="font-bold text-[#bfb1ac] text-base">STARTING FROM £250</div>
            </div>
            {/* ELITE PLUS */}
            <div className="flex-1 rounded bg-[#232323] p-6 shadow text-white min-w-[210px]">
              <div className="text-lg font-semibold mb-3">ELITE PLUS</div>
              <ul className="mb-4 text-sm text-[#bfb1ac] space-y-1">
                <li>Personal Agent</li>
                <li>Immigration Fast Track*</li>
                <li>Luggage Porter</li>
                <li>Electric Golf Buggy</li>
                <li>Chauffeur Airport Transfer</li>
              </ul>
              <div className="text-xs mb-2 text-[#a6a6a6]">*Where Available<br/>Up to 3 Passengers<br/>Fast track tax return available for departure bookings</div>
              <div className="font-bold text-[#bfb1ac] text-base">STARTING FROM £350</div>
            </div>
            {/* SIGNATURE */}
            <div className="flex-1 rounded bg-[#232323] p-6 shadow text-white min-w-[210px]">
              <div className="text-lg font-semibold mb-3">SIGNATURE</div>
              <ul className="mb-4 text-sm text-[#bfb1ac] space-y-1">
                <li>One of our chauffeurs will drive you in comfort and peace to the Airport</li>
                <li>Relax in your private lounge.</li>
                <li>Dine from our light and seasonal menu designed by British Michelin-starred chef Jason Atherton.</li>
                <li>All security procedures happen within the exclusive Private Suite, and when your flight is ready, you are driven to the aircraft.</li>
              </ul>
              <div className="text-xs mb-2 text-[#a6a6a6]">Up to 3 Passengers</div>
              <div className="font-bold text-[#bfb1ac] text-base">STARTING FROM £1,500</div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact/CTA Section */}
      <section className="w-full bg-[#191b1d] py-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl text-white font-extrabold tracking-tight mb-4">HAVE A <span className="text-[#bfb1ac]">QUESTION?</span></h2>
        <button className="border border-white px-8 py-2 text-lg font-semibold rounded transition hover:bg-white hover:text-[#191b1d]">GET IN TOUCH</button>
      </section>
    </>
  );
}

function Locations() {
  return (
    <div className="min-h-screen w-full bg-[#191b1d] font-sans text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-8 tracking-tight">LOCATIONS</h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lagos Airport */}
        <div className="bg-[#292929] rounded shadow overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/03/MMIA_Intl_Terminal_2019.jpg"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">
              Murtala Muhammed International Airport (LOS)
            </h2>
            <p>Ikeja, Lagos, Nigeria</p>
            <p className="mt-2 font-semibold">Contact: +234 901 234 5678</p>
          </div>
        </div>

        {/* Abuja Airport */}
        <div className="bg-[#292929] rounded shadow overflow-hidden">
          <img
            src="https://airmundo.com/wp-content/uploads/2018/07/Abuja-Nnamdi-Azikiwe-Airport.jpg"
            alt="Nnamdi Azikiwe International Airport"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">
              Nnamdi Azikiwe International Airport (ABV)
            </h2>
            <p>Abuja, Nigeria</p>
            <p className="mt-2 font-semibold">Contact: +234 901 234 5679</p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <section className="w-full max-w-5xl mt-12 bg-[#232323] rounded p-6 text-[#bfb1ac]">
        <h3 className="text-2xl font-bold mb-4">Additional Information</h3>
        <p>
          First Priority currently operates exclusively from Murtala Muhammed International Airport in Lagos
          and Nnamdi Azikiwe International Airport in Abuja. Our vision is to expand to every major airport
          across Nigeria, delivering premium, stress-free travel assistance wherever you go.
        </p>
      </section>
    </div>
  );
}

function NotFound() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-[#232323] text-white pt-36 px-4">
      <div className="text-4xl font-extrabold mb-4 mt-8 text-center">OOPS! THAT PAGE CAN'T BE FOUND</div>
      <div className="mb-6 text-lg text-center">Nothing was found at this location: <code className="bg-[#191b1d] px-2 rounded">{location.pathname}</code>. Try searching.</div>
      <form className="flex mb-12 w-full max-w-xl mx-auto">
        <input placeholder="Search..." className="flex-1 px-4 py-2 rounded-l bg-[#242424] border border-[#444] text-white" />
        <button type="submit" className="px-6 py-2 bg-[#232323] border border-white border-l-0 rounded-r text-white">Search</button>
      </form>
      <section className="w-full bg-[#191b1d] py-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl text-white font-extrabold tracking-tight mb-4">HAVE A <span className="text-[#bfb1ac]">QUESTION?</span></h2>
        <button className="border border-white px-8 py-2 text-lg font-semibold rounded transition hover:bg-white hover:text-[#191b1d]">GET IN TOUCH</button>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#232323] pt-8 pb-2 px-4 text-white text-sm flex flex-col md:flex-row gap-6 justify-between items-center md:items-end">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full max-w-5xl mx-auto">
        {/* Payment icons */}
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <div className="mb-2">We Accept</div>
          <div className="flex items-center gap-2">
            <img src="https://ext.same-assets.com/250329750/268248392.png" alt="VISA" className="h-6" />
            <img src="https://ext.same-assets.com/250329750/2110380868.png" alt="Mastercard" className="h-6" />
            <img src="https://ext.same-assets.com/250329750/3697958534.png" alt="American Express" className="h-6" />
            <img src="https://ext.same-assets.com/250329750/3277294165.png" alt="Discover" className="h-6" />
            <img src="https://ext.same-assets.com/250329750/3557617983.png" alt="JCB" className="h-6" />
            <img src="https://ext.same-assets.com/250329750/359167947.png" alt="Diners Club" className="h-6" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-center">
          <img src={LOGO} alt="Airport Assist Logo" className="h-7 mb-2" />
          <div>Airport Assist</div>
          <div className="flex gap-3 mt-1">
            <a href="https://www.linkedin.com/company/airport-assist" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[#bfb1ac]">in</a>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:items-end items-center">
          <a className="hover:underline" href="mailto:meet@airport-assist.com">meet@first-priority.com</a>
          <a className="hover:underline" href="tel:+442045177711">+12 345 6789</a>
          <span className="block mt-2 max-w-xs text-center md:text-right">Murtala Muhammed International Airport (MMI), Nnamdi Azikiwe International Airport (NAIA)</span>
        </div>
      </div>
      <div className="w-full border-t border-[#bfb1ac]/10 mt-8 pt-4 flex flex-col items-center gap-2">
        <div className="flex w-full max-w-5xl justify-between text-xs text-[#bfb1ac]">
          <a className="hover:underline" href="/privacy-policy">Privacy Policy</a>
          <span>© 2025 TRAVEL ASSISTANCE, NIGERIA | FIRST PRIORITY</span>
          <span>Web design by Emmanuel Karibiye</span>
        </div>
      </div>
    </footer>
  );
}

function Layout() {
  const location = useLocation();
  const isBookingPage = location.pathname === "/book";
  return (
    <div className="min-h-screen w-full bg-[#191b1d] font-sans">
      {/* Navbar visible only on md+ screens when on /book */}
      <div className={`${isBookingPage ? "hidden md:block" : ""}`}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-[#191b1d] font-sans">
      <Layout />
    </div>
  );
}
export default App;
