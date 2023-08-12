'use client';

import React from 'react';

interface ProvidersProps {
    children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => (
    <div>{children}</div>
);
