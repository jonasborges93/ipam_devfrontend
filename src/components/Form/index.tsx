import { ChangeEvent, useState } from 'react';
import { InfoDestric } from './InfoDestrict';
import { SelectBrazilianCities } from './SelectBrazilianCities';
import { SelectBrazilianStates } from './SelectBrazilianStates';
import { FormContent, FormContainer, FormGrid, DistrictContent } from './style';

export function Form() {

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
        <FormContent>
            <FormContainer>
                <FormGrid>
                    <SelectBrazilianStates onChange={handleInputStatesChange}/>
                    <SelectBrazilianCities state={formValues} onChange={handleInputCityChange}/>
                </FormGrid>
                <InfoDestric idCityForDistric={formCityValue}/> 
            </FormContainer>
        </FormContent>
    )
}