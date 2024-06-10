import * as React from "react";

import { cn } from "@/lib/utils";
import Search1Svg from "../svgComp/Search1Svg";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const NewInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onClick, ...props }, ref) => {
    return (
      <div className="w-full flex gap-2">
        <input
          type={type}
          className={cn(
            "flex h-10 border w-full border-green-900 bg-white px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950  disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          )}
          ref={ref}
          placeholder="Država, Grad, Adresa"
          {...props}
        />
        <div onClick={onClick}>
          <Search1Svg classes="" />
        </div>
      </div>
    );
  }
);
NewInput.displayName = "Input";

export { NewInput };
