import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuLinks } from './MenuLinks';
import { Fade as Hamburger } from 'hamburger-react';
import { useRouter } from '@tanstack/react-router';

const getRouteName = (path: string) => {
  if (path.includes('/search')) return 'Search';
  if (path.includes('/create')) return 'Create';
  if (path.includes('/profile')) return 'Profile';

  return 'Home';
};

export function Menu() {
  const [displayFullScreenMenu, setFullScreenMenuVisible] = useState(false);
  const [displayMobileNav, setMobileNavVisible] = useState(
    window.innerWidth < 768
  );

  const router = useRouter();
  const currentRoute = router.history.location.pathname;

  useEffect(() => {
    const handleResize = () => {
      const isMobileBreakpoint = window.innerWidth < 768;

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
        className="fixed inset-x-0 top-0 z-10 flex h-[54px] items-center justify-center px-4 text-slate-900 transition-colors md:h-[60px] md:px-8"
        style={{
          backgroundColor: !displayFullScreenMenu ? '#ffffff' : undefined,
          color: !displayFullScreenMenu ? '#0f172a' : '#ffffff',
        }}
      >
        {displayMobileNav ? (
          <>
            <span className="text-2xl font-semibold uppercase">
              {getRouteName(currentRoute)}
            </span>
            <div className="absolute right-4">
              <Hamburger
                color={!displayFullScreenMenu ? '#0f172a' : '#ffffff'}
                toggled={displayFullScreenMenu}
                onToggle={handleFullScreenMenuVisibility}
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
            className="bg-mobile-menu absolute inset-x-0 top-0 h-screen w-screen"
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
