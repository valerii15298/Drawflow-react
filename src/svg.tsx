export const Grabme = () => (
  <svg
    width="11"
    height="16"
    viewBox="0 0 11 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="2.22798" cy="1.45455" r="1.45455" fill="#CED0D7" />
    <circle cx="8.77486" cy="1.45455" r="1.45455" fill="#CED0D7" />
    <circle cx="2.22798" cy="14.5454" r="1.45455" fill="#CED0D7" />
    <circle cx="8.77486" cy="14.5454" r="1.45455" fill="#CED0D7" />
    <circle cx="2.22798" cy="8.00044" r="1.45455" fill="#CED0D7" />
    <circle cx="8.77486" cy="8.00044" r="1.45455" fill="#CED0D7" />
  </svg>
);

export const More = () => (
  <svg
    width="12"
    height="3"
    viewBox="0 0 12 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1.2" cy="1.2" r="1.2" fill="#C5C5D0" />
    <circle cx="5.9998" cy="1.2" r="1.2" fill="#C5C5D0" />
    <circle cx="10.7996" cy="1.2" r="1.2" fill="#C5C5D0" />
  </svg>
);

export const MessageSvg = (props: Record<string, unknown>) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="#303c42"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21,1.5H3A1.5,1.5,0,0,0,1.5,3V22.5l5-5H21A1.5,1.5,0,0,0,22.5,16V3A1.5,1.5,0,0,0,21,1.5Z"
    />
  </svg>
);

export const SearchIcon = (props: Record<string, unknown>) => (
  <svg {...props} viewBox="0 0 16 16" fill="none">
    <path
      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
      stroke="#A5A5B8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.0016 13.9996L11.1016 11.0996"
      stroke="#A5A5B8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Arrow = (props: Record<string, unknown>) => (
  <svg {...props} viewBox="0 0 10 14" fill="none">
    <path
      d="M8 2L2.18437 6.84636C2.08842 6.92631 2.08842 7.07369 2.18437 7.15364L8 12"
      stroke="#393C44"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Arrows = (props: Record<string, unknown>) => (
  <svg {...props} viewBox="0 0 1792 1792">
    <path
      fill="#217CE8"
      d="M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"
    />
  </svg>
);
