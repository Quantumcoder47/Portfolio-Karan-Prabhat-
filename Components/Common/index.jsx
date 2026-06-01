import Link from "next/link";

// ── Logo ──────────────────────────────────────────────────────────────────────
const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-primary font-bold text-xl">&lt;</span>
      <span className="text-white font-bold text-lg tracking-tight capitalize font-light ">Karan prabhat</span>
      <span className="text-primary font-bold text-xl">/&gt;</span>
    </div>
  );
};

// ── PrimaryButton ─────────────────────────────────────────────────────────────
const PrimaryButton = (props) => {
  return (
    <button
      {...props}
      className={`${props.childClass} py-[0.5rem] px-[1.2rem] border font-[500] transition-all duration-200`}
    >
      <span className="leading-normal">{props.text}</span>
    </button>
  );
};

// ── SectionHeading ────────────────────────────────────────────────────────────
const SectionHeading = ({ isLine, heading, des, icon }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-row items-center gap-[1rem]">
        <h2 className="text-[1.7rem] sm:text-[2rem] text-white font-[600] tracking-tight">
          <span className="text-primary">{icon}</span>
          {heading}
        </h2>
        {isLine && (
          <div className="flex-1 max-w-[50%] h-[0.0625rem] bg-primary opacity-60" />
        )}
      </div>
      {des && (
        <span className="text-[1rem] font-[400] text-gray mt-1">{des}</span>
      )}
    </div>
  );
};

// ── ErrorMessage ──────────────────────────────────────────────────────────────
const ErrorMessage = ({ message }) => {
  return (
    <span className="text-[0.82rem] text-[#ff672b] font-[400]">{message}</span>
  );
};

// ── CvButton ──────────────────────────────────────────────────────────────────
const CvButton = () => {
  return (
    <Link href="/Assets/Karan_Prabhat_Resume.pdf" target="_blank">
      <div className="relative backdrop-blur-sm bg-light_primary border border-primary text-white px-7 py-3 flex flex-row gap-2 items-center mx-auto hover:bg-primary transition-all duration-200">
        <span className="text-2xl text-primary">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </span>
        <span className="text-[1rem]">Download CV</span>
      </div>
    </Link>
  );
};

export { Logo, PrimaryButton, SectionHeading, ErrorMessage, CvButton };
