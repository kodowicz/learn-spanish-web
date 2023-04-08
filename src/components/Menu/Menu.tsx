import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuLinks } from './MenuLinks';
import { Fade as Hamburger } from 'hamburger-react';
import cx from 'classnames';
import color from 'tailwindcss/colors';
import { useLocation } from 'react-router-dom';
import { MOBILE_BREAKPOINT } from '@/constants/breakpoints';

const getRouteName = (path: string) => {
  if (path.includes('/search')) return 'Search';
  if (path.includes('/create')) return 'Create';
  if (path.includes('/profile')) return 'Profile';

  return 'Home';
};

export function Menu() {
  const [displayFullScreenMenu, setFullScreenMenuVisible] = useState(false);
  const [displayMobileNav, setMobileNavVisible] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );

  const currentRoute = useLocation().pathname;

  useEffect(() => {
    const handleResize = () => {
      const isMobileBreakpoint = window.innerWidth < MOBILE_BREAKPOINT;

      setMobileNavVisible(isMobileBreakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (displayFullScreenMenu && !displayMobileNav) {
      handleFullScreenMenuVisibility(false);
    }
  }, [displayFullScreenMenu, displayMobileNav]);

  const handleFullScreenMenuVisibility = (isVisible: boolean) => {
    if (isVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    setFullScreenMenuVisible(isVisible);
  };

  return (
    <div>
      <header
        className={cx(
          'fixed inset-x-0 top-0 z-10 flex h-[54px] items-center justify-center px-4 text-slate-900 transition-colors md:h-[60px] md:px-8',
          {
            'bg-white text-slate-900': displayFullScreenMenu === false,
            'text-white': displayFullScreenMenu,
          }
        )}
      >
        {displayMobileNav ? (
          <>
            <span className="text-xl font-semibold uppercase">
              {getRouteName(currentRoute)}
            </span>
            <div className="absolute right-4">
              <Hamburger
                color={!displayFullScreenMenu ? color.slate[900] : color.white}
                toggled={displayFullScreenMenu}
                onToggle={handleFullScreenMenuVisibility}
                size={28}
              />
            </div>
          </>
        ) : (
          <MenuLinks />
        )}
      </header>
      <AnimatePresence>
        {displayFullScreenMenu && (
          <motion.div
            key="full-screen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="bg-mobile-menu fixed inset-x-0 top-0 h-screen w-screen"
          >
            <div className="mt-60 text-white">
              <MenuLinks
                onLinkClick={() => handleFullScreenMenuVisibility(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
