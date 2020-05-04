const NavBar = () => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <a className="navbar-brand" href="/">Andrew Bruner</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">  
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

const App = () => (
  <div>
    <NavBar />
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('.root')
);