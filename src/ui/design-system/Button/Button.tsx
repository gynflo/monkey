import { IconProps } from "@/types/iconProps";
import { clsx } from "clsx";
import { Spinner } from "@/ui/design-system";
import { LinkType, linkTypes } from "@/lib";
import Link from "next/link";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: Boolean;
  isLoading?: Boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  action?: Function;
}

/**
 * Params par default
 * @param variant "accent"
 * @param size "medium"
 * @param iconPosition "right"
 */
export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  action = () => {},
}: Props) => {
  let variantStyles,
    sizeStyles: string,
    icoSize: number = 0;

  switch (variant) {
    case "accent": //default
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      } else if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      } else {
        variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      icoSize = 18;
      break;
    case "medium": //default
      sizeStyles = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }  `;
      icoSize = 24;
      break;
  }

  function handleClick() {
    if (action) {
      action();
    }
  }

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center cursor-wait">
          {" "}
          {/* Fill entire Parent */}
          <Spinner
            size={size}
            variant={
              variant === "accent" ||
              (variant === "ico" && iconTheme !== "secondary")
                ? "white"
                : "primary"
            }
          />
        </div>
      )}

      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize}></icon.icon>
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && (
              <icon.icon size={icoSize}></icon.icon>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <icon.icon size={icoSize}></icon.icon>
            )}
          </div>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <>
      <button
        type="button"
        className={clsx(variantStyles, sizeStyles, "relative animate")}
        onClick={handleClick}
        disabled={disabled ? true : false}
      >
        {buttonContent}
      </button>
    </>
  );

  if (baseUrl) {
    if (linkType === linkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>
    }
  }

  return <>{buttonElement}</>;
};
