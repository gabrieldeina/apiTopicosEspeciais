import { Schema } from "mongoose"

const DebitoSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "O campo NOME do DÉBITO é obrigatório!"]
        },
        valor: {
            type: Number,
            min: [0.01, "Valor mínimo de R$0,01"],
            required: [true, "O campo VALOR do DÉBITO é obrigatório!"]
        },
        status: {
            type: String,
            enum: ["PAGO", "AGENDADO", "PENDENTE"],
            uppercase: true,
            required: [true, "O campo STATUS do DÉBITO é obrigatório!"]
        }
    },
    {
    timestamps: true
    }
)

export { DebitoSchema }