import { Link } from 'react-router-dom';
import Buttons from 'components/UI/Buttons';
import Heading from 'components/UI/Heading';

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">GO HOME</Link>
      <Heading type="h1">Hello World</Heading>
      <Buttons model="primary" mode="light" text="hello" />
      <Buttons model="primary" mode="dark" text="primary dark" />
      <Buttons model="secondary" mode="light" text="secondary" />
    </>
  );
}

export default NotFound;
