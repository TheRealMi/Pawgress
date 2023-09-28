//establish relationships here
const User = require('./User');
const Pet = require('./Pet');
const Behavior = require('./Behavior');
const Session = require('./Log');

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

Behavior.hasMany(Session, {
    foreignKey: 'behavior_id',
    onDelete: 'CASCADE'
});

Session.belongsTo(Behavior, {
    foreignKey: 'behavior_id'
});

module.exports = { User, Pet, Behavior, Session };