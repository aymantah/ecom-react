import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>
        All &copy;rights are reserved @{fullYear}
      </p>
    </footer>
  );
};

export default Footer;
