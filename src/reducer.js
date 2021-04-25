// import { useState } from 'react';
import { dark, light } from './Themes.styles';
import { storage } from './utils/storage';
export const reducer = (state, action) => {    
    let { theme, favorites, isMenuOpen } = state;

    switch(action.type){
        case 'theme':
            theme.name === 'dark' ? theme = light : theme = dark;
            storage.set('theme', JSON.stringify(theme));
            return {...state, theme };
        case 'search':
            return {...state, search: action.value}
        case 'login':
            storage.set('user', JSON.stringify(action.value));
            return {...state, user: action.value}
        case 'logout':
            storage.remove('user');
            return {...state, user: {authenticated:false}}
        case 'addRemoveFavorite':
            let newFavs = [];
            let flag = favorites.filter(item=>item.id === action.value.id).length > 0;
            if(flag) newFavs = favorites.filter(item=>item.id !== action.value.id);
            else newFavs = [...favorites, action.value];
            storage.set('favorites', newFavs);
            return {...state, favorites:newFavs}
        case 'menu':
            return {...state, isMenuOpen:!isMenuOpen}
        case 'openMenu':
            return {...state, isMenuOpen:true}
        case 'closeMenu':
            return {...state, isMenuOpen:false}
        default:
            return new Error(`Unhandled action ${action.type} in reducer was found`);
    }
};