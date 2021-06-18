import { Schema } from "mongoose"

const CreditoSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "O campo NOME do CRÉDITO é obrigatório!"]
        },
        valor: {
            type: Number,
            min: [0.01, "Valor mínimo de R$0,01"],
            required: [true, "O campo VALOR do CRÉDITO é obrigatório!"]
        }
    },
    {
    timestamps: true}
)

export { CreditoSchema }