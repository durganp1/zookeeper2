

const fs = require('fs');
const { filterByQuery, findById, createNewZookeeper } = require('../lib/zookeepers');
const {zookeepers} = require('../data/zookeepers.json');

jest.mock('fs');

test('create a zookeeper object', () => {
    const zookeeper = createNewZookeeper(
        {
            name: 'Joe',
            age: 31
        },
        zookeepers
    );

    expect(zookeeper.name).toBe('Joe');
    expect(zookeeper.age).toEqual(31);
});

test('filters by query', () => {
    const startingZookeeper = [
        {
            id: '0',
            name: 'Kim',
            age: 28,
            favoriteAnimal: "dolphin"
        },
        {
            id: '1',
            name: 'Raksha',
            age: 31,
            favoriteAnimal: 'penguin'
        }
    ];

    const updatedZookeepers = filterByQuery({ favoriteAnimal: 'dolphin'}, startingZookeeper);

    expect(updatedZookeepers.length).toEqual(1);
});

test('finds by id', () => {
    const startingZookeeper = [
        {
            id: '0',
            name: 'Kim',
            age: 28,
            favoriteAnimal: "dolphin"
        },
        {
            id: '1',
            name: 'Raksha',
            age: 31,
            favoriteAnimal: 'penguin'
        }  
    ];

    const result = findById('1', startingZookeeper);

    expect(result.name).toBe('Raksha');
});

