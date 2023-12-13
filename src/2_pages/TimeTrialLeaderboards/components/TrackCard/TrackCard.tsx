import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import {Tags} from "../../../../6_shared/api/types";
import {Cell, Text} from '../../../../6_shared';

export type TrackCardProps = {
    image: string;
    tags: Tags | null;
    trackName: string;
}

export const TrackCard = ({image, trackName, tags}: TrackCardProps) => {
    return (
        <Stack direction={'vertical'}>
            <Image src={image}/>
            <Cell
                primaryText={
                    <Text size={'M'} italic>
                        {trackName}
                    </Text>
                }
                secondaryText={
                    <Stack direction={'vertical'}>
                            {tags?.map(tag =>
                                <Text key={tag.id} size={'S'} italic>
                                    {tag.name}
                                </Text>)}
                    </Stack>
                }
            />
        </Stack>
    );
};