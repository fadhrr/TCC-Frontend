import { Skeleton } from "../ui/skeleton";
import { Card } from "./Card";

export default function ProblemsLoader() {
  return (
    <div className="container mx-auto my-12">
      <div className="flex flex-col w-full space-y-4">
          <Card className="space-y-2 p-4">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[800px]" />
            <Skeleton className="h-4 w-[700px]" />
            <Skeleton className="h-4 w-[200px]" />
          </Card>
          <Card className="space-y-2 p-4">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[800px]" />
            <Skeleton className="h-4 w-[700px]" />
            <Skeleton className="h-4 w-[200px]" />
          </Card>
          <Card className="space-y-2 p-4">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[800px]" />
            <Skeleton className="h-4 w-[700px]" />
            <Skeleton className="h-4 w-[200px]" />
          </Card>
          <Card className="space-y-2 p-4">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[800px]" />
            <Skeleton className="h-4 w-[700px]" />
            <Skeleton className="h-4 w-[200px]" />
          </Card>
      </div>
    </div>
  );
}
