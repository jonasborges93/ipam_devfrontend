import { ChangeEvent, useState } from 'react';
import { InfoDistrict } from './InfoDistrict';
import { SelectBrazilianCities } from './SelectBrazilianCities';
import { SelectBrazilianStates } from './SelectBrazilianStates';
import { IpamContent, IpamContainer, FormContent } from './style';

export function Ipam() {

    const [formValues, setFormValues] = useState({});
    const [formCityValue, setFormCityValue] = useState('');

    const handleInputStatesChange = (e:ChangeEvent<HTMLSelectElement>) => {
         e.preventDefault()
         const {value, name} = e.target
         setFormValues({...formValues, [name]:value});
    }

    const handleInputCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setFormCityValue(e.target.value)  
    }
    return (
        <IpamContent>
            <IpamContainer>
                <h1>IPAM - Instituto de Pesquisa Ambiental da Amazônia</h1>
                <p>Escolha o estado e o município para saber informações detalhadas como: <span>Microrregião, Masorregião, Estado, UF e Região do Município</span></p>
                <FormContent>
                    <SelectBrazilianStates onChange={handleInputStatesChange}/>
                    <SelectBrazilianCities state={formValues} onChange={handleInputCityChange}/>
                    <InfoDistrict idCityForDistric={formCityValue}/> 
                </FormContent>
            </IpamContainer>
        </IpamContent>
    )
}