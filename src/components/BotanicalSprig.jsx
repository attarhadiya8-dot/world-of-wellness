import "./BotanicalSprig.css";

function BotanicalSprig() {
  return (
    <svg className="sprig" viewBox="0 0 400 480" fill="none" aria-hidden="true">
      <circle className="sprig__ring" cx="200" cy="250" r="180" />
      <path className="sprig__line" d="M200 340 C200 390 198 430 200 470" />
      <path
        className="sprig__leaf"
        d="M200 340 C130 335 80 270 95 160 C170 185 215 255 200 340 Z"
      />
      <path className="sprig__line" d="M200 340 C160 290 125 230 95 160" />
      <path
        className="sprig__leaf"
        d="M200 340 C270 335 320 270 305 160 C230 185 185 255 200 340 Z"
      />
      <path className="sprig__line" d="M200 340 C240 290 275 230 305 160" />
      <circle className="sprig__bud" cx="200" cy="200" r="8" />
    </svg>
  );
}

export default BotanicalSprig;