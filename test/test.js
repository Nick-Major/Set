import { team, player1, player2, player3 } from "../src/app.js";

test('add method test', () => {
    team.add(player1);
    expect(team.members.size).toBe(1);
});

test('warning duplication test', () => {
    expect(() => team.add(player1)).toThrow('Персонаж уже есть в команде!');
});

test('adding an arbitrary number of players test', () => {
    team.addAll(player1, player2, player3);
    expect(team.members.size).toBe(3);
});

test('converting Set to array test', () => {
    const membersArr = team.toArray(team.members);
    expect(membersArr).toEqual([player1, player2, player3]);
});
