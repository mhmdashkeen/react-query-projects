import { useDeleteTask, useEditTask } from "./useReactQueryHooks";

const SingleItem = ({ item }) => {
  const { edit } = useEditTask();
  const {deleteTaks, deleteLoading} = useDeleteTask();
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => edit(item)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTaks(item.id)}
        disabled={deleteLoading}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
