import SingleItem from './SingleItem';
import { useFetchTask } from './useReactQueryHooks';

const Items = () => {
  const {data, isLoading, error} = useFetchTask();

  if(isLoading) return <div className='items'>Loading...</div>;

  if(error) return <div className='items'>There is problem on our end.</div>;

  if(data.taskList.length === 0) return <div className='items'>No tasks.</div>

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
