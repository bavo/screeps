module.exports = {
    run: function (creep) {

        if (creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('Charging ...')
        }
        if (!creep.memory.upgrading  && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('Upgrading ...')
        }
        if (creep.memory.upgrading) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {}});
            }
        } else {
            let source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {}});
            }
        }
    }
};