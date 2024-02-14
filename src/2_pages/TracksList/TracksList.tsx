import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import {TracksService} from "../../6_shared/api/generated/game";
import {TrackCard} from "./components/TrackCard";
import styles from './styles.module.css';
import {Text} from '../../6_shared';

export const TracksList = () => {
    const [page, setPage] = useState(1);
    /*const [tagsIds, setTagsIds] = useState<number[] | null>(null);
    const [tagsNames, setTagsNames] = useState<string[] | null>(null)
    const addTagToFilter = (tagId: number) => {
        const newTagsIds: number[] = !tagsIds ? [] : tagsIds;
        if (newTagsIds?.indexOf(tagId) !== -1) {
            return
        }
        newTagsIds.push(tagId);
        setTagsIds(newTagsIds);
    }
    const addTagName = (tagName: string) => {
        const newTagsNames: string[] = !tagsNames ? [] : tagsNames;
        if (newTagsNames?.indexOf(tagName) !== -1) {
            return
        }
        newTagsNames.push(tagName);
        setTagsNames(newTagsNames);
    }*/
    const {data} = useQuery({
        queryKey: [page],
        queryFn: () => TracksService.trackControllerPaginate(
            page,
            8,
            null,
            null,
            null,
            null,
            null,
            null,
        )
    })
    if (!data) {return null}
    
    return (
        <div>
            <Text size={'XL'} weight={'bold'}>
                Time Trial leaderboards
            </Text>
            {/*<div className={styles.tagsList}>
                {
                    tagsNames && tagsNames.map((name, index) => 
                        <button className={styles.tagButton} key={index} onClick={() => console.log('click')}>
                            <Text color={'gray'} size={'S'} italic>
                                {`#${name}`}
                            </Text>
                        </button>
                    )
                }
            </div>*/}
            <div className={styles.trackCardList}>
                {data.items.map((trackInfo, index) =>
                    <TrackCard key={index} onClick={(tag) => console.log(tag)} trackInfo={trackInfo}/>
                )}
            </div>
        </div>
    );
};