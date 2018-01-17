const HARVESTERS = 60;
const BUILDERS = 60;
const UPGRADERS = 60;

function countCreeps(role) {
    return Object.keys(Game.creeps)
        .map(name => Game.creeps[name])
        .filter(creep => creep.memory.role == role)
        .length;
}

function printCreepInfo() {
    let map = new Map();
    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        map.set(creep.memory.role, countCreeps(creep.memory.role));
    }

    var numberOfCreeps = '';
    map.forEach((key, value) => numberOfCreeps += `  ${value}: ${key}`);
    console.log(`Number of creeps: ${numberOfCreeps}`);
}

module.exports = {
    generateCreeps: function () {
        if (countCreeps('Harvester') < HARVESTERS) {
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Game.time, {memory: {role: 'Harvester'}});
        }
        if (countCreeps('Builder') < BUILDERS) {
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Game.time, {memory: {role: 'Builder'}});
        }
        if (countCreeps('Upgrader') < UPGRADERS) {
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Game.time, {memory: {role: 'Upgrader'}});
        }
        printCreepInfo();
    }
};