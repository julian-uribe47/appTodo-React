import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function TodosLoading() {
    return (
        <div>
            <Skeleton count={5} height={'48px'}  />
        </div>
    );
}

export {TodosLoading };