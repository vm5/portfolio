export function Badge({ variant = "primary", children }) {
    const baseStyle = "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium";
    const variantStyles = {
      primary: "bg-blue-100 text-blue-800",
      secondary: "bg-gray-100 text-gray-800"
    };
  
    return (
      <span className={`${baseStyle} ${variantStyles[variant]}`}>
        {children}
      </span>
    );
  }
  