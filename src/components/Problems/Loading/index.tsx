import { Skeleton } from "../../ui/skeleton";
import { Card, CardContent } from "../Card";

export default function () {
  return (
    <div className="container mx-auto my-12">
      <div className="flex gap-4">
        <Card className="min-w-80 h-max">
          <CardContent>
            <Skeleton className="h-4 w-[100px]" />
            <div className="flex flex-col space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col w-full gap-3">
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
    </div>
  );
}
