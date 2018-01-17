const HARVESTERS = 5;
const UPGRADERS = 10;

function countCreeps(role) {
    return Object.keys(Game.creeps)
        .map(name => Game.creeps[name])
        .filter(creep => creep.memory.role == role)
        .length;
}

module.exports = {
    generateCreeps: function () {
        if (countCreeps('Harvester') < HARVESTERS) {
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Game.time, {memory: {role: 'Harvester'}});
        }
        if (countCreeps('Upgrader') < UPGRADERS) {
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Game.time, {memory: {role: 'Upgrader'}});
        }
    }

};