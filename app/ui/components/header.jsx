"use client";

export default function Header() {
  return (
    <header className="">
      <div className="site-title">
        <h1>Dogunfx Cafe </h1>
        <div className="menu-button">
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className="menu-item">
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Chef</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-action">
          <a href="">Call Now 010 020 0340</a>
          <a href="" className="btn">
            Reserve a table
          </a>
        </div>
      </div>
    </header>
  );
}
