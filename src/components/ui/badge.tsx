import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1.5 text-xs font-medium ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        red: "dark:bg-red-200/10 bg-red-50 dark:text-red-400 text-red-700 ring-1 ring-inset dark:ring-red-800/60 ring-red-600/10",
        green:
          "dark:bg-green-200/10 bg-green-50 dark:text-green-400/80 text-green-700 ring-1 ring-inset dark:ring-green-800/60 ring-green-600/10",
        yellow:
          "dark:bg-yellow-200/10 bg-yellow-50 dark:text-yellow-400/80 text-yellow-800 ring-1 ring-inset dark:ring-yellow-800/60 ring-yellow-600/20",
        gray: "dark:bg-gray-200/10 bg-gray-50 dark:text-gray-400 text-gray-600 ring-1 ring-inset dark:ring-gray-800/60 ring-gray-500/10",
        blue: "dark:bg-blue-200/10 bg-blue-50 dark:text-blue-400 text-blue-700 ring-1 ring-inset dark:ring-blue-800/60 ring-blue-700/10",
        pink: "dark:bg-pink-200/10 bg-pink-50 dark:text-pink-400 text-pink-700 ring-1 ring-inset dark:ring-pink-800/60 ring-pink-700/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
