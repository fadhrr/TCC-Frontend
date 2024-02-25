'use Client';

import React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} />);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />);
CardFooter.displayName = 'CardFooter';

const ContestCard: React.FC<{ contestData: { title: string; link: string; description: string; start_time: string; end_time: string }[] }> = ({ contestData }) => {
  const formatDeadline = (deadline: string): string => {
    const deadlineDate = new Date(deadline);

    if (isNaN(deadlineDate.getTime())) {
      return 'Invalid Deadline';
    }

    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };

    return new Intl.DateTimeFormat('id-ID', options).format(deadlineDate);
  };

  return (
    <div className="pt-10">
      {contestData.map((article, index) => (
        <article key={index} className="group relative w-full my-4 cursor-pointe inline-block">
          <div className="relative bg-gray-50 z-10 flex flex-col overflow-hidden p-4 border-2 rounded-lg border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:gap-4">
            <div className="flex justify-start">
              <h3 className="mt-4 text-lg font-medium sm:text-xl cursor-pointer">
                <a href={article.link} className="hover:underline">
                  {article.title}
                </a>
              </h3>
            </div>

            <p className="mt-1 text-sm text-gray-700">{article.description}</p>
            {/* tag */}
            <div className="mt-4 flex gap-2 sm:items-center">
              <div className="flex items-center gap-1 p-1 text-gray-500">
                <p className="text-xs font-medium">{formatDeadline(article.start_time)}</p>
                <span>|</span>
                <p className="text-xs font-medium">{formatDeadline(article.end_time)}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, ContestCard };
