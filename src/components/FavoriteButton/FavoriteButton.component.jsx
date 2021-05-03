import React, { useState, useEffect} from 'react';

//hooks
import { useGlobal } from '../../providers/Global.provider';

//styles
import { AddToFavoritesButton } from './FavoriteButton.styles';
import { FavoriteSVG } from '../../svg/Favorite';

export const FavoriteButton = ({video}) => {

  const { state, dispatch } = useGlobal();
  const [isFav, setIsFav] = useState(false);

  useEffect(()=>{
      const exists = state.favorites.filter(item=>item.id === video.id).length > 0;
      setIsFav(exists);
  }, [state,video]);

  return <AddToFavoritesButton theme={state.theme} onClick={()=>{dispatch({type:'addRemoveFavorite', value:video})}}
    title="Add to favorites" whileHover={{scale:1.2, boxShadow:'0px 0px 5px 1px rgba(255,255,255,1)'}} whileTap={{scale:0.9}}>
            <FavoriteSVG filled={isFav}/>
  </AddToFavoritesButton>
}