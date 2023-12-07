import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';

export type TextProps = {
    children: React.ReactNode;
    color: string;
    size: string;
    weight: string;
}

export const Text = ({children, color='default', weight='default', size='S'}: TextProps) => {
    const className = classNames(
        {
            [styles.s]: size === 'S',
            [styles.m]: size === 'M',
            [styles.xl]: size === 'XL',
            [styles.black]: color === 'default',
            [styles.white]: color === 'white',
            [styles.gray]: color === 'gray',
            [styles.blue]: color === 'blue',
            [styles.normal]: weight === 'default',
            [styles.bold]: weight === 'bold'
        }
    );

    return (
        <div className={className}>
            {children}
        </div>
    );
};