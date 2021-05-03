import { reducer } from '../reducer';
import { dark, light } from '../Themes.styles';

describe('Global reducer', () => {
    let initialState = {
        theme:dark, 
        search:'doggos', 
        page:'', 
        user:{
            authenticated:false
        }, 
        favorites:[], 
        isMenuOpen:false
    };

    let state;

    const mockedUser = {
        id: '123',
        name: 'Wizeline',
        avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    };

    const mockedFavorite ={
        id:'testId',
        title: 'titleId'
    };

    let storageMock = {}

    beforeEach(()=>{
        state = {...initialState};
        global.Storage.prototype.setItem = jest.fn((key, value) =>{
            storageMock[key] = value;
        });
        global.Storage.prototype.getItem = jest.fn((key) => storageMock[key]);
        global.Storage.prototype.removeItem = jest.fn((key) => delete storageMock[key]);
    });

    afterAll(() => {
        global.Storage.prototype.setItem.mockReset();
        global.Storage.prototype.getItem.mockReset();
        global.Storage.prototype.removeItem.mockReset();
    });

    it('should return the light theme, because we are changing from the initial "dark"', () => {
        const { theme } = reducer(state,{type:'theme'});
        expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
        expect(global.Storage.prototype.setItem).toHaveBeenCalledWith('theme', JSON.stringify(light));
        expect(theme.name).toBe('light');
    });

    it('should return the dark theme back if we execute it twice', () => {
        const newState = reducer(state,{type:'theme'});
        const { theme } = reducer(newState,{type:'theme'});
        expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(2);
        expect(theme.name).toBe('dark');
    });

    it('should return the search value we setted after a dispatch', () => {
        const { search } = reducer(state,{type:'search', value:'searchTextTest'});
        expect(search).toBe('searchTextTest');
    });

    it('should set the user info in the local storage and return it inside the state', () => {
        reducer(state,{type:'login', value:mockedUser});
        expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
        expect(global.Storage.prototype.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockedUser));
        expect(JSON.parse(storageMock['user'])).toEqual(mockedUser);
    });

    it('should remove an item from the local storage and return the new state with user:{authenticated:false}', () => {
        reducer(state,{type:'login', value:mockedUser});
        const newState = reducer(state,{type:'logout'});
        expect(global.Storage.prototype.removeItem).toHaveBeenCalledTimes(1);
        expect(global.Storage.prototype.removeItem).toHaveBeenCalledWith('user');        
        expect(newState.user).toEqual({authenticated:false});
    });

    it('should add an item to the favorites array of the state return new array', () => {
        const newState = reducer(state,{type:'addRemoveFavorite', value:mockedFavorite});
        expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
        expect(global.Storage.prototype.setItem).toHaveBeenCalledWith('favorites', JSON.stringify([mockedFavorite]));
        expect(newState.favorites).toEqual([mockedFavorite]);
    });

    it('should remove an item to the favorites array of the state return new array', () => {
        const newState = reducer(state,{type:'addRemoveFavorite', value:mockedFavorite});
        const finalState = reducer(newState,{type:'addRemoveFavorite', value:mockedFavorite});
        expect(finalState.favorites).toEqual([]);
    });

    it('should return isMenuOpen with opposite boolean value, if in initial state is false the return should be true', () => {
        const { isMenuOpen } = reducer(state,{type:'menu'});
        expect(isMenuOpen).toBe(true);
    });

    it('should return isMenuOpen with value true', () => {
        const { isMenuOpen } = reducer(state,{type:'openMenu'});
        expect(isMenuOpen).toBe(true);
    });

    it('should return an error if type does not exist', () => {
        const newState = reducer(state,{type:'unknown'});
        expect(newState).toEqual(Error(`Unhandled action unknown in reducer was found`));
    });
});