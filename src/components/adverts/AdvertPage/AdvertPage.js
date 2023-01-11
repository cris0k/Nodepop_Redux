import { useParams, useNavigate } from 'react-router-dom';
import AdvertDetail from './AdvertDetail';
import { deleteAdvert} from '../service';
import { useSelector } from 'react-redux';
import { getAdvert, getUi } from '../../../store/selectors';

function AdvertPage() {
  const { advertId } = useParams();
  const navigate = useNavigate();
  const { isLoading } = useSelector(getUi);
  const advert = useSelector(getAdvert(advertId))
  
  const handleDelete = () => {
    deleteAdvert(advertId)
    .then(() => navigate('/'))
    .then(()=> window.location.reload());
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
