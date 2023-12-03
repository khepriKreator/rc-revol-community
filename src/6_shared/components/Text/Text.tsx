import React from 'react';

export type TextProps = {
    children: React.ReactNode;
}

export const Text = ({children}: TextProps) => {
    return (
        <div>
            {children}
        </div>
    );
};