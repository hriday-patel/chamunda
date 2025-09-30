import { motion } from "motion/react"
import { useState } from "react"



const Navbar = () => {

  const links = [
    {
      title: 'About Us',
      src: '/aboutus'
    },
    {
      title: 'Contact Us',
      src: '/contactus'
    },
    {
      title: 'Our Products',
      src: '/products'
    },
    {
      title: 'Home',
      src: '/home'
    },
  ]

  const [idx, setIdx] = useState(null);

  return (
    <nav className="max-w-xl mx-auto mt-2 py-1">
            <ul className="hidden md:flex">
                {links.map((link, index) => (
                    <motion.li onHoverStart={() => setIdx(index)} onHoverEnd={() => setIdx(null)} className="w-full text-center relative group py-2 px-4 block" key={index}>
                      <motion.a animate={{
                        color: index === idx ? 'aliceblue' : 'black'
                      }} href={link.src} className="tracking-tight block text-md font-semibold relative z-20">{link.title}</motion.a>
                     { index === idx &&  (<motion.div layoutId="hover" className="absolute bg-neutral-800 z-10 inset-0 rounded-full"></motion.div>)}
                    </motion.li>
                ))}
            </ul>
     </nav>
  )
}
export default Navbar