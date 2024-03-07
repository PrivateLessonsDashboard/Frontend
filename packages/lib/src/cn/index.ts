import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * @description Allows you to combine tailwind classes and use classes dynamically.
 * @param {...ClassValue[]} inputs - List of tailwind classes.
 * @returns {string} - Combined tailwind classes.
 * @author Velo,
 * @example
 * ```
 * <h1 className={cn("text-red-500", { active && "text-blue-500" })}>Hello World!</h1>
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
