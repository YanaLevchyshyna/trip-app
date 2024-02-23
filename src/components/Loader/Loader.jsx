import { LoaderBackdrop } from './Loader.styled';
import PuffLoader from 'react-spinners/PuffLoader';

function Loader() {
  return (
    <LoaderBackdrop>
      <PuffLoader
        color="#5927c5"
        size={80}
        cssOverride={{ position: 'absolute', top: '25%', left: '45%' }}
      />
    </LoaderBackdrop>
  );
}

export default Loader;
