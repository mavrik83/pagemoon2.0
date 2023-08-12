import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const t = (
    strings: TemplateStringsArray,
    ...expressions: any[]
): string => {
    let result = '';
    strings.forEach((str, i) => {
        result += str + (expressions[i] ?? '');
    });
    return result;
};

export const classNames = (...classes: string[]) =>
    classes.filter(Boolean).join(' ');
