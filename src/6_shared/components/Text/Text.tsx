import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';

export type TextProps = {
    align?: 'left' | 'right'| 'center';
    children: React.ReactNode;
    color?: 'default' | 'white' | 'gray' | 'blue';
    containerWidth?: 'full' | 'content';
    isLink?: boolean;
    italic?: boolean;
    nowrap?: boolean;
    size: 'S' | 'M' | 'L' | 'XL';
    weight?: 'default' | 'bold';
}

export const Text = ({children, color='default', weight='default', size='S', italic, isLink, align = 'left', containerWidth = 'content', nowrap}: TextProps) => {
    const className = classNames(
        {
            [styles.s]: size === 'S',
            [styles.m]: size === 'M',
            [styles.l]: size === 'L',
            [styles.xl]: size === 'XL',
            [styles.black]: color === 'default',
            [styles.white]: color === 'white',
            [styles.gray]: color === 'gray',
            [styles.blue]: color === 'blue',
            [styles.normal]: weight === 'default',
            [styles.bold]: weight === 'bold',
            [styles.italic]: italic === true,
            [styles.left]: align === 'left',
            [styles.right]: align === 'right',
            [styles.center]: align === 'center',
            [styles.link]: isLink === true,
            [styles.block]: containerWidth === 'full',
            [styles.fitContent]: containerWidth === 'content',
            [styles.nowrap]: nowrap === true,
        }
    );

    return (
        <div className={className}>
            {children}
        </div>
    );
};