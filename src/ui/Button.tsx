interface ButtonProps {
  onClick: () => void;
  child: React.ReactNode;
}

function Button({ onClick, child }: ButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {child}
    </button>
  );
}

export default Button;
