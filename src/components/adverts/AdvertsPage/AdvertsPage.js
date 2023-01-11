import { useEffect, useState } from 'react';

import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { getStateAdverts, getUi } from '../../../store/selectors';
import { defaultFilters, filterAdverts } from './filters';
//import useQuery from '../../../hooks/useQuery';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoad } from '../../../store/actions';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const [filters, setFilters] = useState(getFilters);
  const { isLoading } = useSelector(getUi);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(advertsLoad())
    
  },[dispatch])

  useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  const adverts = useSelector((state)=>getStateAdverts(state))

  const filteredAdverts = filterAdverts(adverts, filters);

  if (isLoading) {
    return 'Loading...';
  }

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
