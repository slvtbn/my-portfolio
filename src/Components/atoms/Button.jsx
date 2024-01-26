export default function Button({ type = "button", className = "", variant = "primary", ...props }) {
  return (
    <button
      {...props}
      className={`border py-[8px] text-center w-1/2 text-sm font-semibold btn-${variant} ${className}`}
    ></button>
  );
}
