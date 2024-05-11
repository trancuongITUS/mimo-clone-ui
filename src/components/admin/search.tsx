'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function SearchBar(props: { value?: string }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log('value', value);
    if (value === undefined) {
      return;
    } else if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }
    router.replace(`/admin?${params.toString()}`);
  }, [router, value]);

  return (
    <input
      ref={inputRef}
      value={value ?? ''}
      onInput={(e) => {
        setValue(e.currentTarget.value);
      }}
      spellCheck={false}
      className='flex h-10 w-full rounded-md border border-input bg-black text-white px-3 py-2 text-sm ring-offset-background focus:bg-white focus:text-black'
    />
  )
}