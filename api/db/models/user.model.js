const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    documento_usuario: {
        allowNull: false,
        type: DataTypes.BIGINT,
        unique: true
    },
    nombre_usuario: {
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    correo_usuario: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true
    },
    contrasena_usuario: {
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    rol_usuario: {
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
    static associate(models) {
        //
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { User, UserSchema, USER_TABLE }