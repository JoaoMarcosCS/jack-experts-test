import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "../ui/tooltip"
import { ReactNode } from "react"
import { Link } from "react-router-dom";
  
interface MenuItemProps{  
    children: ReactNode;
    href: string;
    text: string;
    direction: "top" | "right" |  "bottom" | "left";
}

export const NavigationItem = ({children, href, text, direction}: MenuItemProps) => {
    
    return(
        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to={href}
            className="flex min-w-14 flex-col transition-all justify-center items-center py-2 text-sm font-semibold rounded-sm hover:text-amber-400"
            >
            {children}
            </Link>
          </TooltipTrigger>
          <TooltipContent side={direction} >
            <p>{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
    )
}