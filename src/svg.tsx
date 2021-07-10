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

export const Close = (props: Record<string, unknown>) => (
  <svg {...props} viewBox="0 0 19 19" fill="none">
    <path
      d="M14.25 4.75L4.75 14.25"
      stroke="#A6A6B3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.75 4.75L14.25 14.25"
      stroke="#A6A6B3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Settings = (props: Record<string, unknown>) => (
  <svg {...props} enableBackground="new 0 0 512 512" viewBox="0 0 512 512">
    <g>
      <path
        d="m482.16 288.51 29.84-4.68v-55.66l-29.84-4.68c-24.56-4.14-33.19-36.67-13.99-52.45l22.52-18.55-27.71-47.98-27.56 10.32c-23.33 8.74-47-14.9-38.25-38.25l10.32-27.56-47.98-27.71-18.55 22.52c-15.75 19.16-48.3 10.61-52.45-13.99l-4.68-29.84h-55.66l-4.68 29.84c-4.17 24.56-36.67 33.19-52.45 13.99l-18.55-22.52-47.98 27.71 10.32 27.56c8.74 23.33-14.9 47-38.25 38.25l-27.56-10.32-27.71 47.98 22.52 18.55c19.12 15.74 10.67 48.29-13.99 52.45l-29.84 4.68v55.66l29.84 4.68c24.46 4.15 33.26 36.59 13.99 52.45l-22.52 18.55 27.71 47.98 27.56-10.32c23.22-8.7 47.04 14.81 38.25 38.25l-10.32 27.56 47.98 27.71 18.55-22.52c15.73-19.11 48.27-10.67 52.45 13.99l4.68 29.84h55.66l4.68-29.84c4.12-24.4 36.56-33.3 52.45-13.99l18.55 22.52 47.98-27.71-10.32-27.56c-8.7-23.22 14.81-47.04 38.25-38.25l27.56 10.32 27.71-47.98-22.52-18.55c-19.16-15.76-10.61-48.28 13.99-52.45zm-226.16 92.49c-68.93 0-125-56.07-125-125s56.07-125 125-125 125 56.07 125 125-56.07 125-125 125z"
        fill="#7ed8f6"
      />
      <path
        d="m468.17 340.96 22.52 18.55-27.71 47.98-27.56-10.32c-23.44-8.79-46.95 15.03-38.25 38.25l10.32 27.56-47.98 27.71-18.55-22.52c-15.89-19.31-48.33-10.41-52.45 13.99l-4.68 29.84h-27.83v-131c68.93 0 125-56.07 125-125s-56.07-125-125-125v-131h27.83l4.68 29.84c4.15 24.6 36.7 33.15 52.45 13.99l18.55-22.52 47.98 27.71-10.32 27.56c-8.75 23.35 14.92 46.99 38.25 38.25l27.56-10.32 27.71 47.98-22.52 18.55c-19.2 15.78-10.57 48.31 13.99 52.45l29.84 4.68v55.66l-29.84 4.68c-24.6 4.17-33.15 36.69-13.99 52.45z"
        fill="#6aa9ff"
      />
      <path
        d="m256 121c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z"
        fill="#6aa9ff"
      />
      <path
        d="m391 256c0 74.44-60.56 135-135 135v-60c41.35 0 75-33.64 75-75s-33.65-75-75-75v-60c74.44 0 135 60.56 135 135z"
        fill="#4895ff"
      />
    </g>
  </svg>
);

export const Plus = (props: Record<string, unknown>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <g transform="matrix(1.06642 0 0 1.06642 -1.03 -1106.225)">
        <circle cx="8.467" cy="1044.829" r="5.626" fill="#c2e4f8" />
        <path
          fill="#249fe6"
          fillRule="evenodd"
          style={{
            lineHeight: "normal",
            textIndent: 0,
            textAlign: "start",
            textDecorationLine: "none",
            textDecorationStyle: "solid",
            textDecorationColor: "#000",
            textTransform: "none",
            // blockProgression: "tb",
            isolation: "auto",
            mixBlendMode: "normal",
          }}
          d="M 8 1 C 4.139959 1 1.0000428 4.1398846 1 8 C 0.99997942 11.860115 4.1399146 15 8 15 C 11.860086 15 15.00002 11.860115 15 8 C 14.999957 4.1398846 11.860041 1 8 1 z M 8 2 C 11.319604 2 13.999963 4.6803455 14 8 C 14.000018 11.319654 11.319644 14 8 14 C 4.6803565 14 1.9980292 11.319654 1.9980469 8 C 1.9980837 4.6803455 4.6803952 2 8 2 z M 7.9863281 4.0039062 A 0.50005001 0.50005001 0 0 0 7.4941406 4.5117188 L 7.5 7.5039062 L 4.5039062 7.5097656 A 0.50095123 0.50095123 0 0 0 4.5058594 8.5117188 L 7.5 8.5058594 L 7.5058594 11.5 A 0.50005001 0.50005001 0 1 0 8.5058594 11.5 L 8.5019531 8.5039062 L 11.494141 8.4980469 A 0.50005001 0.50005001 0 1 0 11.492188 7.4980469 L 8.5 7.5039062 L 8.4960938 4.5117188 A 0.50005001 0.50005001 0 0 0 7.9863281 4.0058594 L 7.9863281 4.0039062 z "
          color="#000"
          fontFamily="sans-serif"
          fontWeight={400}
          overflow="visible"
          transform="matrix(.93772 0 0 .93772 .965 1037.328)"
        />
      </g>
    </svg>
  );
};

export const ThreeDots = (props: Record<string, unknown>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 3"
    fill="none"
    {...props}
  >
    <circle cx="1.2" cy="1.2" r="1.2" fill="#C5C5D0" />
    <circle cx="5.9998" cy="1.2" r="1.2" fill="#C5C5D0" />
    <circle cx="10.7996" cy="1.2" r="1.2" fill="#C5C5D0" />
  </svg>
);
