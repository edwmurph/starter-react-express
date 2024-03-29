import ReactDOM from 'react-dom';
import useAPI from './hooks/use-api';

const App = () => {
  const { data, loading, error } = useAPI({ route: '/api/hello' });

  if ( loading ) {
    console.log( 'here', process.env.TEST );
    return <p>Loading...</p>;
  }

  if ( error ) {
    return ( <p className='text-danger'>
      Error:
      {error}
    </p> );
  }

  return (
    <p className='text-primary'>
      Data:
      {data}
    </p>
  );
};

ReactDOM.render( <App/>, document.getElementById('app') );
