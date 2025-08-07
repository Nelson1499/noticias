const Footer = () => {
  return (
    <footer className="style_layout">
      <h3>Notichaco</h3>
      <div>
        <ul className="flex m-auto space-x-3 font-bold">
          <li>Inicio</li>
          <li>Lo ultimo</li>
          <li>Deportes</li>
          <li>Economía</li>
          <li>Innovación</li>
          <li>Cultura</li>
          <li>Arte</li>
        </ul>
      </div>
      <div>
        <ul className="flex m-auto space-x-3 text-bold">
          <li>Términos de uso</li>
          <li>Sobre nosotros</li>
          <li>Política de privacidad</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
