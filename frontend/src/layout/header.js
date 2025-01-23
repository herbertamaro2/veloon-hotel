import { Link } from "react-router";


function Header({ onClick, dateFrom, dateTo }) {

  return (
    <header className="header py-3">

      <Link to="/">
        <img src="/veloon.svg" alt="logo" className="logo-img" />
      </Link>
      <h5 className="font-bold text-black text-xl">
        Número 1 em excelência
      </h5>


      {!(dateFrom && dateTo) &&
        <button className="btn btn-primary btn-black"
          style={{ background: '#000', borderColor: '#000' }}
          onClick={onClick}>
          RESERVE JÁ
        </button>}

    </header>
  );
}

export default Header;
