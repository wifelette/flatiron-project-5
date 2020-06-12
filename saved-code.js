// Code that I stripped out of other places but am not yet ready to toss :p Might need it later!
{
  /* Nav Item - Kiddos Collapse Menu  */
}
<li className="nav-item">
  <a
    className="nav-link collapsed"
    href="#"
    data-toggle="collapse"
    data-target="#collapseKids"
    aria-expanded="true"
    aria-controls="collapseKids"
  >
    <i className="fas fa-fw fa-user"></i>
    <span>Kiddos</span>
  </a>
  <div
    id="collapseKids"
    className="collapse"
    aria-labelledby="headingKids"
    data-parent="#accordionSidebar"
  >
    <div className="bg-white py-2 collapse-inner rounded">
      <a className="collapse-item" href="Kiddo1.html">
        Child 1
      </a>
      <a className="collapse-item" href="Kiddo2.html">
        Child 2
      </a>
    </div>
  </div>
</li>;
