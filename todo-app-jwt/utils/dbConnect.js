
import mongoose from "mongoose";


const dataBase_Url = process.env.DATABASE_URL;


//verificação
if (!dataBase_Url) {
    throw new Error(
        "Env não preenchido"
    );
}


const connectMongo = async () => {
    if (mongoose.connection.readyState > 0) {
        return;
    } else {
        return mongoose.connect(dataBase_Url)
            .then("MongoDB Conectado")
            .catch(err => console.error(err));

    }
}

export default connectMongo;