'use client';

import { PropsWithChildren } from 'react';

import { Snackbar } from '@mui/material';
import CircularProgress from '@mui/joy/CircularProgress';
import LoadMoreAction from '@/types/load-more-action';
import { useLoadMore } from './hooks';

const LoadMore = ({
  children,
  initialOffset,
  loadMoreAction,
}: PropsWithChildren<{
  initialOffset: number;
  loadMoreAction: LoadMoreAction;
}>) => {
    const {
        ref,
        loadMoreNodes,
        loading,
        allDataLoaded,
        open, 
        handleClose,
    } = useLoadMore({initialOffset, loadMoreAction})    
    return (
        <>
            <ul className='grid grid-cols-2 gap-4 p-4'>
                {children}
                {loadMoreNodes}
            </ul>
            {!allDataLoaded && (
                <button className='w-full flex justify-center items-center' ref={ref}>
                    {loading && <CircularProgress size={'lg'} variant="plain" color="primary" />}
                </button>
            )}
            {<Snackbar open={open} autoHideDuration={2000} onClose={handleClose} message="Note archived" />}
        </>
    );
};

export default LoadMore;