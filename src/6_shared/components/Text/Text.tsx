import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';

export type TextProps = {
    children: React.ReactNode;
    color?: string;
    isLink?: boolean;
    italic?: boolean;
    size?: 'S' | 'M' | 'XL';
    weight?: string;
}

export const Text = ({children, color='default', weight='default', size='S', italic, isLink}: TextProps) => {
    const className = classNames(styles.text,
        {
            [styles.s]: size === 'S',
            [styles.m]: size === 'M',
            [styles.xl]: size === 'XL',
            [styles.black]: color === 'default',
            [styles.white]: color === 'white',
            [styles.gray]: color === 'gray',
            [styles.blue]: color === 'blue',
            [styles.normal]: weight === 'default',
            [styles.bold]: weight === 'bold',
            [styles.italic]: italic === true,
            [styles.link]: isLink === true,
        }
    );

    return (
        <div className={className}>
            {children}
        </div>
    );
};