let roleHarvester = require('role.harverster');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let creepGenerator = require('generator.creeps');

module.exports.loop = function () {

    creepGenerator.generateCreeps();

    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        if (creep.memory.role == 'Harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'Upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'Builder') {
            roleBuilder.run(creep);
        }
    }

    for(let i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
};