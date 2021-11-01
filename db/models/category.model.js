const { Model, DataTypes, Sequelize } = require('sequelize')
const CATEGORY_TABLE = 'categories'

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
}


class Category extends Model {
  static associate(models){
    // this.belongsTo(models.User, { as: 'user'})
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timesStamps: false,
    }
  }
}

module.exports = {
  CATEGORY_TABLE,
  CategorySchema,
  Category,
}




