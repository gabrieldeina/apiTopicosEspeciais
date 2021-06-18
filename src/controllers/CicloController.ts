import { Request, Response} from "express"
import CicloSchema from "../models/CicloSchema"

class CicloController {
    async listar(req: Request, res: Response){
        try {
            const ciclos = await CicloSchema.find()
            res.status(200).json({
                data: ciclos,
                error: false,
                msg: "Lista de ciclos de pagamento atualizada!"
            })  
        } catch (err) {
            res.status(400).json({
                data: err,
                error: true,
                msg: "Não foi possível listar os ciclos de pagamento!"
            }) 
        }
    }

    async listarPorId(req: Request, res: Response){
        const { id } = req.params
        try {
            const ciclo = await CicloSchema.findById(id) // find({ _id: id}) , com mais de um -> find({ _id: id, nome: nome})
            if(ciclo != null){
                res.status(200).json({
                    data: ciclo,
                    error: false,
                    msg: "Ciclo encontrado!"
                })
            }
            res.status(404).json({
                data: ciclo,
                error: false,
                msg: "Ciclo não encontrado!"
            })
        } catch (err) {
            res.status(200).json({
                data: err,
                error: true,
                msg: "Ciclo encontrado!"
            })
        }
    }

    async cadastrar(req: Request, res: Response){
        try {
            const novociclo = await CicloSchema.create(req.body)
            res.status(201).json(novociclo)   
        } catch (err) {
            console.error(err)
            res.status(400).json(`Bad Request: ${err}`)
        }
    }
}

export { CicloController }