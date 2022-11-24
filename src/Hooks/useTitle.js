import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect( () => {
        document.title = `${title} | CarHub`
    },[title]);
};

export default useTitle;