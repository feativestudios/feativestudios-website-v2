
const Button = ({children,className,onClick}) => {
  return (
    <button className={`h-[64px] w-max px-10 text-center rounded-[3px] bg-bitterSweet flex items-center justify-center uppercase text-white text-base leading-[16px] tracking-[1.5px] hover:border-white hover:border  font-normal ${className}`} onClick={onClick}>
      {children}
    </button>
  )
};

export default Button
