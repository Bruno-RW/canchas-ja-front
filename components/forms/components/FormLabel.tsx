"use client";

import { InfoIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FormLabelProps {
  children?: React.ReactNode;
  required?: boolean;
  tooltip?: string;
  content?: string;
  className?: string;
}

const FormLabel: React.FC<FormLabelProps> = ({
className = "",
  required = false,
  tooltip,
  content,
  children,
}) => {
  return (
    <Label className={cn("flex items-start gap-x-1", className)}>
      {content}
      
      {children}
  
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoIcon
                className="h-3 w-3 text-foreground bg-transparent cursor-help"
                aria-label="Informação adicional"
              />
            </TooltipTrigger>

            <TooltipContent className="bg-background text-foreground shadow-sm">
              <span>{tooltip}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {required && (
        <span className="text-red-500 dark:text-red-300" aria-label="Campo obrigatório">
          *
        </span>
      )}
    </Label>
  );
};

export default FormLabel;
