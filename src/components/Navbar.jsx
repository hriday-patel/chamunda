const Navbar = () => {
  return (
    <nav className="hidden justify-center items-center gap-[20px] whitespace-nowrap md:flex mt-2">
            <a
              href="#"
              className="tracking-tight font-bold hover:scale-105 transition duration-300 ease-in-out"
            >
              About us
            </a>
            <a
              href="#"
              className="tracking-tight font-bold hover:scale-105 transition duration-300 ease-in-out"
            >
              Contact us
            </a>
            <a
              href="#"
              className="tracking-tight font-bold hover:scale-105 transition duration-300 ease-in-out"
            >
              Our Products
            </a>
            <a
              href="#"
              className="tracking-tight font-bold hover:scale-105 transition duration-300 ease-in-out"
            >
              Home
            </a>
     </nav>
  )
}
export default Navbar