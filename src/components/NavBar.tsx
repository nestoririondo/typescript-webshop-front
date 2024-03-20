const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Catalog</a>
        </li>
        <li>
          <a href="/contact">About</a>
        </li>
      </ul>
      <div className="cart">
        <a href="/cart">Cart</a>
      </div>
    </nav>
  );
};

export default NavBar;
