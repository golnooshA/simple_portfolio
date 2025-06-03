import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow-md ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-20 h-20 object-cover rounded-xl"
        />
        <ul className="flex gap-10 text-black font-sans cursor-pointer">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/projects')}>Projects</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
