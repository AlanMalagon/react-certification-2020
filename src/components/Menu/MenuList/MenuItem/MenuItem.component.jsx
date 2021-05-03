import React from 'react';
import { Link } from 'react-router-dom';

//hooks
import { useGlobal } from '../../../../providers/Global.provider';

//styles
import { ListItem, IconContainer, NameContainer, Name } from './MenuItem.styles';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0.5,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem = ({item}) => {

    const { state, dispatch } = useGlobal();
    const { theme } = state;
    
    return <Link to={item.location} onClick={() => dispatch({type:'closeMenu'})}>
            <ListItem theme={theme} variants={variants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconContainer theme={theme}>
                {item.icon}
            </IconContainer>
            <NameContainer theme={theme}>
                <Name theme={theme}>
                    {item.name}
                </Name>
            </NameContainer>
        </ListItem>
    </Link>
}