import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-card rounded border-2 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-4", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-medium sm:text-xl",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-2", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardTitle, CardDescription, CardFooter }

// export default function ContesCard() {
//   return (
//     <div className="bg-gray-50 flex flex-col p-4 border-2 rounded-lg border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
//       <div className="flex justify-start">
//         <h3 className="mt-4 text-lg font-medium sm:text-xl">{problem.title}</h3>
//       </div>
//       <p className="mt-1 text-sm text-gray-700">{problem.description}</p>
//       <div className="mt-4 flex gap-2 sm:items-center">
//         <div className="flex items-center gap-1 p-1 text-gray-500">
//           <Badge variant="default">Badge</Badge>
//           <Badge variant="outline">Badge</Badge>
//           <Badge variant="destructive">Badge</Badge>
//         </div>
//       </div>
//     </div>
//   );
// }
