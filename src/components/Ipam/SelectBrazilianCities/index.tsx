import { ChangeEventHandler, useEffect, useState } from "react";
import { fetchCitiesForStates } from "../../../services/ibgeApi";
import { FormBox } from "../style";

interface CityProps{
    id: number,
    nome: string
}

interface SelectBrazilianCitiesProps{
    state?:any,
    onChange?: ChangeEventHandler<any>
}


export function SelectBrazilianCities({state, onChange}:SelectBrazilianCitiesProps){
    const [cities, setCities] = useState<CityProps[]>([])

    useEffect(()=>{   
        fetchCitiesForStates(`${state.formState}`)
            .then(response => setCities(response))
    },[state])
    
    return(
        <FormBox>
            <label htmlFor="form-city">Escolha uma Cidade:</label>
            <select name="formCity" id="form-city" onChange={onChange}>
                <option value="">Selecione uma Cidade</option>
                {cities.map(( {id, nome} ) => {
                    return (<option key={id} value={id}>{nome}</option>)
                })}
            </select>
        </FormBox>
    )
}