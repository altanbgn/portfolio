import { Outlet } from 'react-router-dom';
import NavLink from '../../components/common/NavLink';

const MainLayout = () => {
  return (
    <>
      <nav className="absolute top-0 z-10 flex w-screen items-center justify-center">
        <NavLink to="/" noBorder>
          <img
            src="/images/avatar.png"
            width={64}
            height={64}
            alt="logo"
          />
        </NavLink>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/contact-me">Contact Me</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <div
        className="fixed bottom-10 right-10"
        style={{ writingMode: 'vertical-lr' }}
      >
        <p>altanbagana@protonmail.com</p>
      </div>
    </>
  );
};

export default MainLayout;
