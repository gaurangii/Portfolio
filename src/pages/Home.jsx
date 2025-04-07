// import React from 'react'
// import background from '../../public/background.jpg';

// function Home() {
//   return (
//     <>
//     <div>
//         <img src={background} className='h-screen w-screen'/>
//     <div className='mb-24'>
//         <h1>hello i'm gaurangi sharma</h1>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Home



import React from "react";
import background from "../../public/background.jpg";
import Navbar from "./Navbar";
import ContactForm from "./Contact";

function Home() {
  return (
    <div className="relative h-screen w-">
      <Navbar/>
      {/* Background Image */}
      <img src={background} alt="Background" className="h-full w-full object-cover" />

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-38 top-92 transform -translate-y-1/2 text-white">
        <h1 className="text-8xl font-bold mb-12">Hello,</h1>
        <h1 className="text-8xl mt18 font-bold">I'm Gaurangi </h1>
        <p className="text-xl font-semibold mt-12">I build, I fail, I learn, and I grow - because success is just failure with persistence.</p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Home;
