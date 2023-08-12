/* eslint-disable react/require-default-props */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn, t } from '@/lib/utils';

const buttonVariants = cva(
    t`inline-flex items-center justify-center rounded-md text-sm font-thin ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800`,
    {
        variants: {
            variant: {
                default: t`bg-primary text-slate-50 hover:bg-primary/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90`,
                destructive: t`bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90`,
                outline: t`border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50`,
                secondary: t`bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80`,
                ghost: t`hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50`,
                link: t`text-slate-900 underline-offset-4 hover:underline dark:text-slate-50`,
            },
            size: {
                default: t`h-10 px-4 py-2`,
                sm: t`h-9 rounded-md px-3`,
                lg: t`h-11 rounded-md px-8`,
                icon: t`h-10 w-10`,
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
