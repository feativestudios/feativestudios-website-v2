// hooks/useScrollNavigation.js
import { useState, useEffect } from 'react';

const useScrollNavigation = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let closestSection = '';
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top); // Distance from viewport top
       

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        } else {
          console.warn(`Section with id "${id}" not found in DOM`);
        }
      });

      if (closestSection && activeSection !== closestSection) {
        setActiveSection(closestSection);
      }
    };

    // Debounce scroll events to improve performance
    let timeout;
    const debouncedScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeout);
    };
  }, [sectionIds, activeSection]);

  return activeSection;
};

export default useScrollNavigation;