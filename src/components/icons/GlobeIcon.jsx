export default function GlobeIcon({ size = 32, color = '#c9a84c' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.5" />
      <ellipse cx="20" cy="20" rx="9" ry="18" stroke={color} strokeWidth="1.5" />
      <line x1="2" y1="14" x2="38" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="2" y1="26" x2="38" y2="26" stroke={color} strokeWidth="1.5" />
      <line x1="20" y1="2" x2="20" y2="38" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}
