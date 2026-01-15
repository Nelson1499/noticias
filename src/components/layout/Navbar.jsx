const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between w-full style_layout sticky top-0 shadow z-50">
        <div class="menu-toggle" onclick="toggleMenu()">
          ☰
        </div>
        <a href="#" style={{ color: "inherit", textDecoration: "none" }} className="font-bold text-2xl no-underline text-inherit">
          NotiChaco
        </a>
        <div className="mx-2" id="navLinks">
          {/* <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a> */}
        </div>
      </nav>
      <div className="flex items-center justify-center">
        <ul className="flex m-auto space-x-3 font-bold shadow-2xl">
          <li>Inicio</li>
          <li>Lo ultimo</li>
          <li>Deportes</li>
          <li>Economía</li>
          <li>Innovación</li>
          <li>Cultura</li>
          <li>Arte</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
