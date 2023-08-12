'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <main className='flex flex-col items-center justify-between p-24'>
            <h1>PageMoon</h1>
            <Button variant='destructive'>Click me</Button>
        </main>
    );
}
