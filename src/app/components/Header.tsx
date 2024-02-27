import Link from 'next/link';

function Header() {
  return (
    <header className='flex flex-row justify-between items-center'>
      <div className="logo">
        <Link href="/" className='font-bold'>Equikly.</Link>
      </div>
      <nav>
        <ul className='flex flex-row items-center [&>li]:m-2'>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header