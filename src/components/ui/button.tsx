import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-br from-accent-purple to-accent-pink text-white shadow-lg hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_var(--color-glow-purple)] transition-all duration-300",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-accent-purple bg-transparent text-white hover:bg-gradient-to-br hover:from-accent-purple hover:to-accent-pink hover:border-transparent hover:scale-105 active:scale-95 transition-all duration-300",
                secondary:
                    "bg-secondary-bg text-white hover:bg-secondary-bg/80 border border-white/10",
                ghost: "hover:bg-accent-purple/10 hover:text-accent-purple",
                link: "text-accent-purple underline-offset-4 hover:underline",
                glow: "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] hover:scale-105 transition-all duration-500 animate-[pulse-glow_3s_infinite]",
            },
            size: {
                default: "h-11 px-8 py-2",
                sm: "h-9 rounded-full px-4 text-xs",
                lg: "h-14 rounded-full px-10 text-lg",
                icon: "h-10 w-10 rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
