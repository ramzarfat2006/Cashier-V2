import { Sequelize } from "sequelize";

// konfigurasi database
const sequelize = new Sequelize(
    // Nama Database
    "cashier_v2",
    // User Database
    "root",
    // Password Database
    "",
    // Engine Database Address
    {
        dialect: "mysql",
        host: "localhost"
    }
)

export default sequelize