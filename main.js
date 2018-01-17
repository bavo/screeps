var roleHarvester = require('role.harverster');
var roleUpgrader = require('role.upgrader');
var creepGenerator = require('generator.creeps');

module.exports.loop = function () {

    creepGenerator.generateCreeps();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == 'Harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'Upgrader') {
            roleUpgrader.run(creep);
        }
    }
};