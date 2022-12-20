import { ChangeEventHandler, useEffect, useState } from "react"
import { fetchStates } from "../../../services/ibgeApi"
import { FormBox } from "../style"

interface statesProps{
    id: number,
    sigla: string,
    nome: string
}

interface SelectBrazilianStatesProps{
    onChange?:ChangeEventHandler<any>
}

export function SelectBrazilianStates({onChange}:SelectBrazilianStatesProps){
    const [states, setStates] = useState<statesProps[]>([])

    useEffect(()=>{
        fetchStates()
            .then(response => setStates(response))
    },[])

    return (
        <FormBox>
            <label htmlFor="form-state">Escolha um Estado:</label>
            <select name="formState" id="form-state" onChange={onChange}>
                <option value="">Selecione um estado</option>
                {states.map(( {id, nome, sigla} ) => {
                    return (<option key={id} value={sigla}>{nome}</option>)
                })}
            </select>           
        </FormBox>
    )
}