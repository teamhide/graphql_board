import { Sequelize } from 'sequelize';
import config from '../config/config';

const db = new Sequelize(config.DB, config.USER, config.PASS, {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;