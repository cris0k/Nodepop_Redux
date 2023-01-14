import { useParams, useNavigate } from 'react-router-dom';
import AdvertDetail from './AdvertDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, getUi } from '../../../store/selectors';
import { useEffect } from 'react';
import { advertDelete, detailsLoad } from '../../../store/actions';

function AdvertPage() {
  const { advertId } = useParams();
  const navigate = useNavigate();
  const { isLoading } = useSelector(getUi);
  const dispatch = useDispatch()
  const advert = useSelector(getDetails(advertId))

  useEffect(()=>{
    dispatch(detailsLoad(advertId))
    
  },[advertId,dispatch])
  
  const handleDelete = async () => {
    await dispatch(advertDelete(advertId))
    navigate('/')
    window.location.reload()
  };

  if (isLoading) {
    return 'Loading...';
  }

  return (
    advert && (
      <AdvertDetail
        onDelete={handleDelete}
        isLoading={isLoading}
        {...advert}
      />
    )
  );
}

export default AdvertPage;
