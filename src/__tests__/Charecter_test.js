import Character from '../Character';

// Проверяем класс Character
export default describe('Character', () => {
  it('should create a new character with valid name', () => {
    const character = new Character('John');
    const objectCharacter = {
      name: 'John',
      health: 100,
      level: 1,
    };

    expect(character).toEqual(objectCharacter);
  });

  it('should throw an error if name length is less than 2', () => {
    expect(() => new Character('')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
    expect(() => new Character('A')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if name length is greater than 10', () => {
    expect(() => new Character('JohnSmithJr')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });
});
