var roleHarvester = {
    run: function (creep) {

        if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
            creep.memory.harvesting = false;
            creep.say('Transferring ...');
        }
        if (!creep.memory.harvesting && creep.carry.energy == 0) {
            creep.memory.harvesting = true;
            creep.say('Harvesting ...');
        }
        if (creep.memory.harvesting) {
            let sources = creep.room.find(FIND_SOURCES).filter(source => source.energy > 0);
            let source = creep.pos.findClosestByPath(sources);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {}});
            }
        } else {
            let spawns = creep.room.find(FIND_MY_STRUCTURES)
                .filter(structure => structure.energy < structure.energyCapacity && (
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_TOWER ||
                    structure.structureType == STRUCTURE_CONTAINER));
            let spawn = creep.pos.findClosestByPath(spawns);
            if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn, {visualizePathStyle: {}});
            }
        }
    }
};

module.exports = roleHarvester;