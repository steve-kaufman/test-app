import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize('test-app', 'test-app-user', '1234', {
  host: 'localhost',
  dialect: 'mariadb'
})

export default class User extends Model {
  public id!: number;
  public email!: string;
  public username!: string;
  public password!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false
  }
}, {
  tableName: 'users',
  sequelize
})

User.sync()
