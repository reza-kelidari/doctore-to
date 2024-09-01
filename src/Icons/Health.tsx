export default function Health({ fill = "#fff" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="54"
      viewBox="0 0 60 54"
    >
      <g id="Logo" transform="translate(-2 -3)">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M2,21.952C2,33.14,14.058,44.973,22.885,52.136,26.881,55.378,28.879,57,32,57s5.119-1.621,9.115-4.864C49.942,44.973,62,33.14,62,21.952c0-18.69-16.5-25.668-30-11.23C18.5-3.716,2,3.262,2,21.952Z"
          transform="translate(0 0)"
          fill={fill}
          opacity="0.5"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M22,6.25A2.25,2.25,0,0,1,24.25,8.5v3.75H28a2.25,2.25,0,0,1,0,4.5H24.25V20.5a2.25,2.25,0,0,1-4.5,0V16.75H16a2.25,2.25,0,0,1,0-4.5h3.75V8.5A2.25,2.25,0,0,1,22,6.25Z"
          transform="translate(23.5 6.5)"
          fill={fill}
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
}
