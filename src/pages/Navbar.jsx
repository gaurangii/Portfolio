// // const Navbar = () => {
// //     return (
// //       <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-transparent border border-gray-400/40 backdrop-blur-lg rounded-2xl px-6 py-3 z-50">
// //         <nav className="text-white font-mono text-sm tracking-wide">
// //           <ul className="flex justify-center space-x-6 md:space-x-8">
// //             <li>
// //               <a href="#home" className="hover:text-gray-400 transition">
// //                 01 : Home
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#projects" className="hover:text-gray-400 transition">
// //                 02 : Projects
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#about" className="hover:text-gray-400 transition">
// //                 03 : About me
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#contact" className="hover:text-gray-400 transition">
// //                 04 : Contact
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#achievements" className="hover:text-gray-400 transition">
// //                 05 : Achievements
// //               </a>
// //             </li>
// //           </ul>
// //         </nav>
// //       </div>
// //     );
// //   };
  
// //   export default Navbar;
  



// const Navbar = () => {
//     return (
//       <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-transparent border-x border-b border-gray-400/40 backdrop-blur-lg rounded-2xl px-6 py-3 z-50">
//         <nav className="text-white font-mono text-md tracking-wide">
//           <ul className="flex justify-center space-x-6 md:space-x-8">
//             <li>
//               <a href="/" className="hover:text-gray-400 transition">
//                  Home
//               </a>
//             </li>
//             <li>
//               <a href="/projects" className="hover:text-gray-400 transition">
//                  Projects
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="hover:text-gray-400 transition">
//                  About me
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-gray-400 transition">
//                  Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     );
//   };
  
//   export default Navbar;
  







const Navbar = () => {
    return (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[70%] max-w-3xl bg-transparent border-x border-b border-gray-400/40 backdrop-blur-lg rounded-2xl px-8 py-4 z-50">
        <nav className="text-white font-mono text-lg tracking-wide text-center">
          <ul className="flex justify-center space-x-18">
            <li>
              <a href="/" className="hover:text-gray-400 transition">Home |</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-gray-400 transition">Projects |</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400 transition">About me |</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  