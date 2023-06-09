// Базовый класс для остальных классов персонажей
export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
      this.health = 100;
      this.level = 1;
    } else {
      throw new Error('Ошибка! Имя должно содержать min 2, max 10 символов!');
    }
  }
}
