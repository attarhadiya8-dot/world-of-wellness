import { Link } from "react-router-dom";
import "./Button.css";

function Button({ to, href, variant = "primary", children }) {
  const className = `btn btn--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default Button;