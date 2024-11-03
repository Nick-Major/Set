class Team {
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

export class Character {
	constructor(name, type, health, level, attack, defence) {
		this.name = name;
		this.type = type;
		this.health = health;
		this.level = level;
		this.attack = attack;
		this.defence = defence;

		if(typeof this.name !== "string") {
			throw new Error("Имя должно быть строкой!");
			
		};

		if(this.name.length < 2 || this.name.length > 10) {
			throw new Error("Недопустимое количество символов!");
		};

		if(this.type === "Bowman" || this.type === "Swordsman" || this.type === "Magician" || this.type === "Daemon" || this.type === "Undead" || this.type === "Zombie") {
			this.type = type;
		} else {
			throw new Error("Недопустимый тип персонажа!");
		}
		
	}
}

let player = new Character("Игрок", "Swordsman", 100, 1, 40, 10);

let team = new Team(player);

console.log(team);
