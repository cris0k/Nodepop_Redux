import { useEffect, useState } from 'react';

import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { getAdverts } from '../service';
import { getStateAdverts } from '../../../store/selectors';
import { defaultFilters, filterAdverts } from './filters';
//import useQuery from '../../../hooks/useQuery';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoaded } from '../../../store/actions';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const [filters, setFilters] = useState(getFilters);
  //const { isLoading, data: adverts = [] } = useQuery(getAdverts);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const execute = async()=>{
      const adverts = await getAdverts()
      dispatch(advertsLoaded(adverts))
    }
    execute();
  },[dispatch])

  useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  const adverts = useSelector((state)=>getStateAdverts(state))

  const filteredAdverts = filterAdverts(adverts, filters);

  /* if (isLoading) {
    return 'Loading...';
  }
 */
  return (
    <>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={adverts.length} />
      )}
    </>
  );
}

export default AdvertsPage;
