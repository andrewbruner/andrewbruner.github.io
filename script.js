const App = () => (
  <div>
    <NavBar />
    <About />
    <Projects />
    <Contact />
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('.root')
);