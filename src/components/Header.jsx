import person from "/person.svg";
import AddData from "./AddData.jsx";

const Header = () => {
  return (
    <>
          <nav className="navbar bg-secondary ">
            <div className="container-fluid">
              <div className="navbar-brand ">
                <img
                  src={person}
                  alt="Logo"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top "
                />{""}
                <span className="ps-3" style={{ color: "#FFFADA" }}>
                  Person Details
                </span>
              </div>
            </div>
          </nav>
      
     <AddData/>
    </>
  )
};

export default Header;