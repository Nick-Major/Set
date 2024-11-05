export class Team {
    constructor() {
        this.members = new Set();
    }

    add(Character) {
        if(!this.members.has(Character)) {
            this.members.add(Character);
        } else {
            throw new Error('Персонаж уже есть в команде!')
        }
    }

    addAll(...Character) {
        Character.forEach((character) => this.members.add(character));
    }

    toArray() {
        return Array.from(this.members);
    }
}

export const team = new Team();

export const player1 = { name: 'Vasya', class: 'Magician' };
export const player2 = { name: 'Petya', class: 'Bowman' };
export const player3 = { name: 'Ivan', class: 'Zombie' };

console.log(team, player1, player2, player3);
