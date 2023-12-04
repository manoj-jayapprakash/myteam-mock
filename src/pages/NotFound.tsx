import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='grid place-content-center h-[80vh] gap-4'>
      <h1 className='mx-auto'>Page Not Found.</h1>
      <p>We are unable to identify the page you are looking for!</p>
      <Link to="/" className='underline w-fit mx-auto'>HOME</Link>
    </div>
  );
}

export default NotFound;
