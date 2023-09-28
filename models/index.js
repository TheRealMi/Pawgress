//establish relationships here
const User = require('./User');
const Pet = require('./Pet');
const Behavior = require('./Behavior');
const Training = require('./Training');

User.hasMany(Pet, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Pet.belongsTo(User, {
    foreignKey: 'user_id'
});

Pet.hasMany(Behavior, {
    foreignKey: 'pet_id',
    onDelete: 'CASCADE'
});

Behavior.belongsTo(Pet, {
    foreignKey: 'pet_id'
});

Behavior.hasMany(Training, {
    foreignKey: 'behavior_id',
    onDelete: 'CASCADE'
});

Training.belongsTo(Behavior, {
    foreignKey: 'behavior_id'
});

module.exports = { User, Pet, Behavior, Training };