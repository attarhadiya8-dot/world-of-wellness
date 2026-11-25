import "./PageHeader.css";

function PageHeader({ label, title, intro }) {
  return (
    <header className="page-header">
      <div className="container">
        <p className="label">{label}</p>
        <span className="page-header__rule" />
        <h1>{title}</h1>
        {intro && <p className="page-header__intro">{intro}</p>}
      </div>
    </header>
  );
}

export default PageHeader;