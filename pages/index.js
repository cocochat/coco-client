import Link from 'next/link';

const Home = (props) => (
  <div>
    <h1>Welcome to Coco!</h1>
    <Link href="/account">
      <a>Account</a>
    </Link>
  </div>
)

export default Home;
