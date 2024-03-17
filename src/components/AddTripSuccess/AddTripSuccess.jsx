const AddTripSuccess = ({ onClick }) => {
  const isMealAdd = useSelector(selectIsMealAdd);

  return (
    <div>
      <h2>Well done</h2>
      <button type="button" onClick={() => onClick()}>
        Next product
      </button>
    </div>
  );
};

export default AddTripSuccess;
