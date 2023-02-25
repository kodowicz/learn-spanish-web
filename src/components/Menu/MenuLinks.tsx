import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';

type MenuLinksProps = {
  onLinkClick?: () => void;
};

const links = [
  {
    label: 'home',
    path: '/',
  },
  {
    label: 'search',
    path: '/search',
  },
  {
    label: 'create',
    path: '/create',
  },
  {
    label: 'profile',
    path: '/profile',
  },
];

export function MenuLinks({ onLinkClick }: MenuLinksProps) {
  return (
    <nav className="flex flex-col items-center md:w-full md:flex-row md:flex-wrap md:items-start md:justify-end">
      {links.map((link) => (
        <MenuButton
          key={link.path}
          label={link.label}
          path={link.path}
          onClick={onLinkClick}
        />
      ))}
    </nav>
  );
}

type MenuButtonProps = {
  label: string;
  path: string;
  onClick?: () => void;
};

function MenuButton({ label, path, onClick }: MenuButtonProps) {
  return (
    <motion.div
      className="mb-10 text-xl font-semibold antialiased last:mr-0 md:mb-0 md:mr-10 md:text-lg"
      whileHover={
        window.innerWidth < 768 ? { translateX: 2 } : { translateY: -2 }
      }
      transition={{ duration: 0.2 }}
    >
      <Link
        activeProps={{ className: 'text-cyan-500 md:text-indigo-500' }}
        className="transition-colors"
        to={path}
        search={{}}
        params={{}}
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  );
}
