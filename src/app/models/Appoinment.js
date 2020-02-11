module.exports = (sequelize, DataTypes) => {
  const Appoinment = sequelize.define("Appoinment", {
    date: DataTypes.DATE
  });

  Appoinment.associate = models => {
    Appoinment.belongsTo(models.User, { foreignKey: "user_id" });
    Appoinment.belongsTo(models.User, { foreignKey: "provider_id" });
  };
  return Appoinment;
};
