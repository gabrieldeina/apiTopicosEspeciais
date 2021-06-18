import { model, Schema } from "mongoose"
import { CreditoSchema } from "./CreditoSchema"
import { DebitoSchema } from "./DebitoSchema"

const CicloSchema = new Schema(
    {
        data: {
            type: Date,
            require: [true, "O campo DATA no CICLO é obrigatório"],
            min: ["2000-01-01", "Data mínima permitida: 01/01/2020"]
        },
        creditos: [CreditoSchema],
        debitos: [DebitoSchema],
    },
    {
    timestamps: true
    }
)

export default model("ciclos", CicloSchema)