import { SvgIcon } from "@mui/material";

function Logo({ width=128, height=128 }) {
  return (
    <SvgIcon
      sx={{
        width: width,
        height: height,
        filter: "invert(0%) sepia(6%) saturate(1485%) hue-rotate(13deg) brightness(77%) contrast(82%)",
      }}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      
      x="0"
      y="0"
      viewBox="0 0 64 64"
    >
      <g>
        <circle
          cx="12"
          cy="26"
          r="1"
          fill="#171717"
          data-original="#000000"
        ></circle>
        <path
          d="M37.293 28.293a1 1 0 0 1 1.414 0L44 33.586 46.586 31 38 22.414 29.414 31 32 33.586zM35.406 38l2.585-2.585L40.577 38l-2.586 2.585zM5 26a20.994 20.994 0 0 1 37.848-12.524 24.691 24.691 0 0 1 2.9.76 22.992 22.992 0 1 0-31.512 31.515 24.691 24.691 0 0 1-.76-2.9A21.055 21.055 0 0 1 5 26zM22.407 37.999l2.585-2.585 2.586 2.585-2.586 2.585z"
          fill="#171717"
          data-original="#000000"
        ></path>
        <circle
          cx="26"
          cy="12"
          r="1"
          fill="#171717"
          data-original="#000000"
        ></circle>
        <path
          d="M39.926 13.082a19 19 0 1 0-26.844 26.844A25.051 25.051 0 0 1 13 38a24.842 24.842 0 0 1 2.557-11h-.741a3 3 0 1 1 0-2h1.838q.633-1.033 1.36-2H17a1 1 0 0 1-1-1v-2.184a3 3 0 1 1 2 0V21h1.692A25.192 25.192 0 0 1 25 16.654v-1.838a3 3 0 1 1 2 0v.741A24.842 24.842 0 0 1 38 13c.649 0 1.289.033 1.926.082z"
          fill="#171717"
          data-original="#000000"
        ></path>
        <circle
          cx="17"
          cy="17"
          r="1"
          fill="#171717"
          data-original="#000000"
        ></circle>
        <path
          d="M38 19a19 19 0 1 0 19 19 19.021 19.021 0 0 0-19-19zM27.293 30.293l10-10a1 1 0 0 1 1.414 0l10 10a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0L38 30.414l-5.293 5.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414zm15.414 8.414-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414zM25 43a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 25 43zm23.707 2.707-10 10a1 1 0 0 1-1.414 0l-10-10a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0L38 45.586l5.293-5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414zm3-3a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414z"
          fill="#171717"
          data-original="#000000"
        ></path>
        <path
          d="M38 15a23 23 0 1 0 23 23 23.026 23.026 0 0 0-23-23zm0 44a21 21 0 1 1 21-21 21.023 21.023 0 0 1-21 21z"
          fill="#171717"
          data-original="#000000"
        ></path>
        <path
          d="m48.404 38.001 2.585-2.585L53.575 38l-2.586 2.585zM38.707 47.707a1 1 0 0 1-1.414 0L32 42.414 29.414 45 38 53.586 46.586 45 44 42.414z"
          fill="#171717"
          data-original="#000000"
        ></path>
      </g>
    </SvgIcon>
  );
}

export default Logo;