import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { CustomPagination } from '../../6_shared/components/CustomPagination';
import { TrackRatingsService } from '../../6_shared/api/generated/game';
import { GlobalLeaderBoard } from './components/GlobalLeaderBoard';
import styles from './styles.module.css';
import { Text } from '../../6_shared';

const Q_KEY = 'statsControllerGetGlobalLeaderBoard';
export const HomePage = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [searchField, setSearchField] = useState('');

  const { data, isLoading, isPlaceholderData } = useQuery({
    queryKey: [Q_KEY, search, page],
    queryFn: () =>
      TrackRatingsService.statsControllerGetGlobalLeaderBoard(
        page,
        10,
        false,
        search,
      ),
    placeholderData: keepPreviousData,
  });

  const onApplySearch = () => {
    setSearch(searchField);
    setPage(1);
  };
  return (
    <div className={styles.homePage}>
      <Text size={'XL'} weight={'bold'}>
        Global Leaderboard
      </Text>

      <Form className={styles.form}>
        <InputGroup>
          <Form.Control
            onChange={(event) => setSearchField(event.target.value)}
          />
          <Button onClick={() => onApplySearch()}>Filter</Button>
        </InputGroup>
      </Form>
      <GlobalLeaderBoard isLoading={isLoading} isPlaceholderData={isPlaceholderData} users={data?.items} />
      <CustomPagination
        setDataPage={(currentPage) => setPage(currentPage)}
        totalPages={data?.meta.totalPages || 0}
      />
    </div>
  );
};
