import { InputHTMLAttributes, Ref } from 'react';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchBar({ className, type, ...props }: SearchBarProps, ref: Ref<HTMLInputElement>) {
    return (
        <input
          type={type}
          className={`${className} flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background `}
          ref={ref}
          {...props}
        />
      )
}