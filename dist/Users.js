"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('ex-db', 'ex-db-user', '1234', {
    host: 'localhost',
    dialect: 'mariadb'
});
class User extends sequelize_1.Model {
}
exports.default = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING(64),
        allowNull: false
    }
}, {
    tableName: 'users',
    sequelize: sequelize
});
//# sourceMappingURL=Users.js.map