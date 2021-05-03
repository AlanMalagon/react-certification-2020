import React from 'react';

//Components
import { MenuItem } from './MenuItem/MenuItem.component';
import { FavoriteSVG } from '../../../svg/Favorite';
import { HomeSVG } from '../../../svg/Home';

//styles
import { motion } from 'framer-motion';

const itemIds = [
    {
        id:'home',
        name: 'Home',
        icon: <HomeSVG/>,
        location: '/',
        private: false
    },
    {
        id:'favorites',
        name: 'Favorites',
        icon: <FavoriteSVG filled={true} heightAndWidth={32}/>,
        location: '/favorites',
        private: true
    }
];

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const MenuList = () => {

    let menuItemsToShow = itemIds;
    
    return <motion.ul variants={variants}>
        {menuItemsToShow.map(item => {
            return (<MenuItem item={item} key={item.id}/>);
        })}
    </motion.ul>
}
