import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  dark?: boolean;
};

const Phone = ({ imgSrc, className, dark = false, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...rest}
    >
      <img
        src={
          !dark
            ? "/phone-template-white-edges.png"
            : "/phone-template-dark-edges.png"
        }
        alt="phone template"
				className="pointer-events-none z-50 select-none"
      />
			<div className="absolute -z-10 inset-0">
				<img src={imgSrc} alt="overlaying phone image" className="object-cover" />
			</div>
    </div>
  );
};

export default Phone;
