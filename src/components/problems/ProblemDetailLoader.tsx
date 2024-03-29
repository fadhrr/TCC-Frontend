import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./Card";

export default function ProblemDetailLoader() {
  return (
    <Card className="w-full">
      <div className="p-4 border-b">
        <Skeleton className="h-5 w-[200px] rounded-xl" />
      </div>
      <div className="p-8 space-y-4">
        <div>
          <Skeleton className="h-16 w-[300px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[800px]" />
          <Skeleton className="h-4 w-[700px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[800px]" />
          <Skeleton className="h-4 w-[700px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[700px]" />
          <Skeleton className="h-4 w-[500px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[600px]" />
          <Skeleton className="h-4 w-[400px]" />
        </div>
        <div className="flex space-x-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="flex space-x-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-[300px]" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </Card>
  );
}
