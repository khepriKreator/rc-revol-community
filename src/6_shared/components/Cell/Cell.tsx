import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack'
import React from 'react';

export type CellProps = {
    image: string;
    primaryText?: React.ReactNode;
    secondaryText?: React.ReactNode;
}

export const Cell = ({image, primaryText, secondaryText}: CellProps) => {
    return (
        <Stack direction={"horizontal"} gap={8}>
            <Image src={image} rounded/>
            <Stack direction={'vertical'} gap={8}>
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