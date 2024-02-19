import { Card } from "@/components/problem/Card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SubmisionDetailLoader() {
  return (
    <Card className="w-full max-w-full">
      <div className="p-4 border-b">
        <Skeleton className="h-5 w-[200px] rounded-xl" />
      </div>
      <div className="p-8 space-y-4">
        <div className="flex space-x-2">
          <Skeleton className="h-4 w-[75px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[800px]" />
          <Skeleton className="h-4 w-[800px]" />
          <Skeleton className="h-4 w-[700px]" />
          <Skeleton className="h-4 w-[800px]" />
          <Skeleton className="h-4 w-[500px]" />
          <Skeleton className="h-4 w-[600px]" />
          <Skeleton className="h-4 w-[500px]" />
          <Skeleton className="h-4 w-[600px]" />
          <Skeleton className="h-4 w-[700px]" />
          <Skeleton className="h-4 w-[600px]" />
          <Skeleton className="h-4 w-[400px]" />
          <Skeleton className="h-4 w-[700px]" />
          <Skeleton className="h-4 w-[600px]" />
          <Skeleton className="h-4 w-[400px]" />
        </div>
      </div>
    </Card>
  );
}
