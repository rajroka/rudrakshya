// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button"
// export default function Banner() {
//   return (
//     <div className="relative h-screen font-inter  w-full">
//       {/* Background Image */}
//       <Image
//         src="/images/rud.jpg"
//         alt="Rudraksha Banner"
//         fill
//         className="object-cover"
//         priority
//       />

// import { Link } from "lucide-react";

//       {/* Overlay */}
//       <div className="absolute inset-0  bg-black/25 flex flex-col items-center justify-center">
//         {/* Main Title */}
//         <h1 className="text-white text-4xl md:text-6xl  font-poppins font-bold  text-center px-4 mb-8">
//           100% Genuine Rudraksha Beads
//         </h1>
        
//         {/* Trust Seals */}
//         <div className="flex flex-wrap justify-center gap-6 mb-12 px-4">
//           <div className="bg-white/90 rounded-lg p-4 flex flex-col items-center shadow-lg">
//             <div className="text-green-600 text-2xl mb-2">
//               <i className="fas fa-certificate"></i>
//             </div>
//             <p className="text-base font-poppins text-center  ">Authenticity Guaranteed</p>
//           </div>
          
//           <div className="bg-white/90 rounded-lg p-4 flex flex-col items-center shadow-lg">
//             <div className="text-blue-600 text-2xl mb-2">
//               <i className="fas fa-microscope"></i>
//             </div>
//             <p className="text-base text-center">Lab Certified</p>
//           </div>
          
//           <div className="bg-white/90 rounded-lg p-4 flex flex-col items-center shadow-lg">
//             <div className="text-red-600 text-2xl mb-2">
//               <i className="fas fa-truck"></i>
//             </div>
//             <p className="text-sm font-semibold">Free Shipping</p>
//           </div>
//         </div>
        
//         {/* Category Navigation */}
//         <div className="bg-black/70 rounded-xl p-6 max-w-4xl w-full mx-4">
//           <h2 className="text-white text-xl font-semibold text-center mb-4">
//             Explore Our Collections
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//             <Link 
//               href="/category/1-mukhi" 
//               className="bg-amber-800 hover:bg-amber-700 text-white text-center py-3 px-2 rounded-lg transition-colors text-sm"
//             >
//               1 Mukhi
//             </Link>
//             <Link 
//               href="/category/5-mukhi" 
//               className="bg-amber-800 hover:bg-amber-700 text-white text-center py-3 px-2 rounded-lg transition-colors text-sm"
//             >
//               5 Mukhi
//             </Link>
//             <Link 
//               href="/category/bracelets" 
//               className="bg-amber-800 hover:bg-amber-700 text-white text-center py-3 px-2 rounded-lg transition-colors text-sm"
//             >
//               Bracelets
//             </Link>
//             <Link 
//               href="/category/malas" 
//               className="bg-amber-800 hover:bg-amber-700 text-white text-center py-3 px-2 rounded-lg transition-colors text-sm"
//             >
//               Malas
//             </Link>
//             <Link 
//               href="/category/rare" 
//               className="bg-amber-800 hover:bg-amber-700 text-white text-center py-3 px-2 rounded-lg transition-colors text-sm"
//             >
//               Rare Collections
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

















// components/home/HeroBanner.tsx
import Link from "next/link";
const HeroBanner = () => {
  return (
    <section className="w-full h-screen md:h-[70vh] bg-secondary/30 relative flex items-center justify-center">
      {/* Placeholder for a beautiful background image */}
      {/* For a real project, use Next/Image here */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100" 
        style={{backgroundImage: "url('/images/rud.jpg')"}} // Add a banner image to your /public folder
      ></div>

      <div className="relative z-10 text-center text-foreground px-4">
        <h1 className="font-serif text-4xl text-white md:text-6xl font-bold">
          Embrace Divine Energy
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-white">
          Discover authentic, lab-certified Rudraksha beads to elevate your spiritual journey.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/category" 
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
          >
            Explore Collection
          </Link>
          {/* <a 
            href="/quiz" 
            className="px-6 py-3 bg-background text-foreground font-semibold rounded-lg shadow-md hover:bg-muted transition-colors"
          >
            Find My Rudraksha
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;