import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`${variant} ${full && 'w-full'} flex items-center justify-center gap-2`}
      type={type}
    >
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      {icon && <Image src={icon} alt={title} width={40} height={40} />}
    </button>
  )
}

export default Button