import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
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
        "Accepted":
          "border-transparent bg-green-500 text-destructive-foreground hover:bg-destructive/80",
        "Wrong Answer":
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        "Compile Time Error":
          "border-transparent bg-yellow-500 text-destructive-foreground hover:bg-destructive/80",
        pending:
          "border-transparent bg-purple-500 text-destructive-foreground hover:bg-destructive/80",
        1: "border-transparent text-primary-foreground bg-red-500",
        2: "border-transparent text-primary-foreground bg-green-500",
        3: "border-transparent text-primary-foreground text-primary-foreground bg-blue-500",
        4: "border-transparent text-primary-foreground bg-purple-500",
        5: "border-transparent text-primary-foreground bg-yellow-500",
      },
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
