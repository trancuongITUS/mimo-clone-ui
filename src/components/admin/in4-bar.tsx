import {useRef, useState } from 'react';
import Button from '@mui/material/Button';

export function InfoBar(props: { value?: string, label?: string }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(props.value);
    const [status, setStatus] = useState<boolean>(true);

    const onStatus = () => {
        setStatus(!status);
    }

    return (
        <div className='flex justify-between items-center my-8'>
            <label className='text-white w-1/12 font-bold'>{props.label}</label>
            <input
                    ref={inputRef}
                    value={value ?? ''}
                    onInput={(e) => {
                        setValue(e.currentTarget.value);
                    }}
                    spellCheck={false}
                    className='flex flex-1 h-10 w-full ml-8 rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background disabled:bg-black disabled:text-white'
                    disabled={status}
                />
            <Button onClick={onStatus} className='shrink-0 ml-8' variant="outlined">Edit</Button>
        </div>
      )
}