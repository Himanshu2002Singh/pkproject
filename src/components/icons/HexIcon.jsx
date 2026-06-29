export default function HexIcon({ size = 32, color = '#c9a84c' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 3L35.5 12V28L20 37L4.5 28V12L20 3Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M20 10L29 15V25L20 30L11 25V15L20 10Z"
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  )
}
