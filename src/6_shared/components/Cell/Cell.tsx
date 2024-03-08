import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import styles from './styles.module.css';

export type CellProps = {
  image: string | null;
  primaryText: React.ReactNode | null;
  secondaryText: React.ReactNode | null;
};

export const Cell = ({ image, primaryText, secondaryText }: CellProps) => {
  return (
    <Stack className={styles.stack} direction={'horizontal'}>
      {image && (
        <Image
          className={styles.img}
          src={image !== null ? image : ''}
          rounded
        />
      )}
      <Stack className={styles.textStack} direction={'vertical'}>
        <div>{primaryText && primaryText}</div>
        {secondaryText && <div>{secondaryText}</div>}
      </Stack>
    </Stack>
  );
};
