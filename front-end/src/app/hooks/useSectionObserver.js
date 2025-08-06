// hooks/useSectionObserver.js
import { useState, useEffect } from 'react';

const useSectionObserver = (sectionIds) => {
  const [visibleSection, setVisibleSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let closestSection = null;
        let minDistanceToTop = Infinity;

        entries.forEach((entry) => {
          const rect = entry.target.getBoundingClientRect();
          const distanceToTop = Math.abs(rect.top); 
         

          if (entry.isIntersecting && distanceToTop < minDistanceToTop) {
            minDistanceToTop = distanceToTop;
            closestSection = entry.target.id;
          }
        });

        if (closestSection) {
          setVisibleSection(closestSection);
        }
      },
      {
        root: null,
        threshold: [0.1, 0.3, 0.5],
        rootMargin: '-200px 0px -10% 0px', 
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      } else {
        console.warn(`Section with id "${id}" not found in DOM`);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return visibleSection;
};

export default useSectionObserver;