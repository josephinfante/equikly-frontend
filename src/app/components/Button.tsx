interface ButtonProps {
    children: React.ReactNode,
    onClick: () => void
}
function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className="py-2 px-3 bg-primary rounded-lg text-white">
        {props.children}
    </button>
  )
}

export default Button