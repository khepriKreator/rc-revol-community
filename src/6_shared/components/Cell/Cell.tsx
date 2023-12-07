import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack'
import React from 'react';
import styles from './styles.module.css';

export type CellProps = {
    image: string;
    primaryText?: React.ReactNode;
    secondaryText?: React.ReactNode;
}

export const Cell = ({image, primaryText, secondaryText}: CellProps) => {
    return (
        <Stack className={styles.stack} direction={"horizontal"}>
            <Image src={image} rounded/>
            <Stack direction={'vertical'}>
                <div>
                    {primaryText && primaryText}
                </div>
                <div>
                    {secondaryText && secondaryText}
                </div>
            </Stack>
        </Stack>
    );
};