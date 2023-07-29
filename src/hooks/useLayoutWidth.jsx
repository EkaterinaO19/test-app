import { useState, useEffect } from 'react';

const useLayoutWidth = (layoutWidth) => {
    const [isLayoutWidth, setIsLayoutWidth] = useState(false);

    const checkLayoutWidth = () => {
        setIsLayoutWidth(window.innerWidth === layoutWidth);
    };

    useEffect(() => {
        checkLayoutWidth(); // Initial check on component mount

        const handleResize = () => {
            checkLayoutWidth(); // Check on window resize
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on component unmount
        };
    }, []);

    return isLayoutWidth;
};

export default useLayoutWidth;