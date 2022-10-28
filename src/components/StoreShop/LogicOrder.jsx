import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';

import { ShortStore } from './ShortStore';



export const  LogicOrder = () => {


    const { orders } = useSelector(state => state.list);


    return (
        <ShortStore orders={orders}>
            <Badge color="secondary" badgeContent={orders.length}>
                <StorefrontIcon />
            </Badge>
        </ShortStore>
    )
}
