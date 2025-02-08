import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[])
{
    return twMerge(clsx(inputs))
}

export const inDev = !!process && process.env.NODE_ENV === 'development';