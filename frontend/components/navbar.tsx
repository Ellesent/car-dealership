export const NavBar = () => {

    return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
               <i className="fas fa-car is-size-1"></i>
               <h1 className="pl-2">Foo Dealership</h1>
            </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
    )
}