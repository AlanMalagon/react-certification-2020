import { useGapi } from './useGapi';
import { renderHook } from '@testing-library/react-hooks'

describe('useGapi.js', () => {
    
    it('Should load the "client" library', () => {
        const mockGapiLoad = jest.fn();
        global.gapi = {
            load:mockGapiLoad,
        }
        renderHook(() => useGapi());
        expect(mockGapiLoad).toHaveBeenCalledTimes(1);        
    });

});