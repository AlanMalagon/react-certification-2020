import { random } from '../../utils/fns';
import { storage } from '../../utils/storage';

describe('Functions in "/utils" directory', () => {

    describe('fns.js', () => {
        it('should return a random number between 0 and the limit we set', () => {
            const limit = 10;
            const randomNum = random(limit);
            expect(randomNum).toBeLessThanOrEqual(limit);
        });    
    });

    describe('storage.js', () => {

        let storageMock = {}

        beforeAll(() => {                
            global.Storage.prototype.setItem = jest.fn((key, value) =>{
                storageMock[key] = value;
            });
            global.Storage.prototype.getItem = jest.fn((key) => storageMock[key]);
        });

        beforeEach(() => {
            storageMock = {};
        });

        afterAll(() => {
            global.Storage.prototype.setItem.mockReset()
            global.Storage.prototype.getItem.mockReset()
        });
        
        it('should set an object in the local storage', () => {
            storage.set('key-test', 1);
            expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
            expect(storageMock['key-test']).toEqual('1');
        });

        it('should set an object in the local storage', () => {
            console.error = jest.fn();
            const result = storage.get('inexistent-value');
            expect(result).toBe(null);
            expect(console.error).toHaveBeenCalledWith('Error parsing storage item "inexistent-value".');
        });

        it('should get an object from the local storage', () => {
            storage.set('key-test-get', 'Are we alone in the universe?');
            const result = storage.get('key-test-get');
            expect(result).toBe('Are we alone in the universe?');
            expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(2);
        });
    });

});