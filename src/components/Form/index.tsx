import { FormContent, FormContainer, FormGrid, FormBox } from './style';

export function Form() {
    return (
        <FormContent>
            <FormContainer>
                <FormGrid>
                    <FormBox>
                        <label htmlFor="form-state">Escolha um Estado:</label>
                        <select name="formState" id="form-state">
                            <option value="">Selecione um estado</option>
                        </select>
                    </FormBox>
                    <FormBox>
                        <label htmlFor="form-city">Escolha uma Cidade:</label>
                        <select name="formCity" id="form-city">
                            <option value="">Selecione uma Cidade</option>
                        </select>
                    </FormBox>
                </FormGrid>
            </FormContainer>
        </FormContent>
    )
}