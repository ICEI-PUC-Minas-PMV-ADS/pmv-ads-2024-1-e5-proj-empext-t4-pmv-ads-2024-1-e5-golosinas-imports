import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonProps {
  className?: string;
  href?: string;
  isButton?: boolean;
  label?: string;
  level?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void;
  target?: string;
  aria?: string;
  role?: string;
  tabIndex?: number;
  weight?: string;
  size?: string
}

export const Button = ({
  className = "",
  href,
  isButton = true,
  label,
  level,
  onClick,
  target,
  aria,
  role,
  tabIndex,
  weight,
  size
}: ButtonProps) => {
  const buttonStyle = [
    styles.button,
    styles[`button--${level}`],
    styles[`button--${size}`],
    className,
  ].join(" ");

  const linkStyle = [
    styles.link,
    styles[`link--${weight}`],
    styles[`link--${size}`],
    !isButton && level ? styles[`link--${level}`] : "",
    !isButton && !level && styles[`link--hover`],
    className,
  ].join(" ");

  return (
    <>
      {isButton ? (
        <button
          onClick={onClick}
          className={buttonStyle}
          aria-label={aria}
          role={role}
          tabIndex={tabIndex}
        >
          {label}
        </button>
      ) : (
        <Link
          href={href || ""}
          target={target}
          className={linkStyle}
          role={role}
          onClick={onClick}
        >
          {label}
        </Link>
      )}
    </>
  );
};
