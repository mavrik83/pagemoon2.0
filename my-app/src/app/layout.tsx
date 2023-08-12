import React from 'react';
import type { Metadata } from 'next';
import { Fira_Sans_Condensed } from 'next/font/google';
import { Providers } from '@/app/providers';
import { classNames } from '@/lib/utils';
import '@/styles/globals.css';
import { Navigation } from './root-nav';

const firaSansCondensed = Fira_Sans_Condensed({
    subsets: ['latin'],
    weight: ['400', '700'],
    preload: true,
});

export const metadata: Metadata = {
    title: 'PageMoon 2.0',
    description: 'Rewrite of PageMoon',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/favicon.ico/' />
            </head>
            <body
                className={classNames(
                    `${firaSansCondensed.className} bg-slate-50 font-thin`,
                )}
            >
                <Providers>
                    <Navigation>{children}</Navigation>
                </Providers>
            </body>
        </html>
    );
}
