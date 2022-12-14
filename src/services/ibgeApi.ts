const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/';

export const fetchStates = () => {
    const url = `${BASE_URL}/localidades/estados`;
    return fetch(url).then(response => response.json());
}

export const fetchCitiesForStates = (state:string) => {
    const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
    return fetch(url).then(response => response.json());
}

// export const fetchCitiesForDistrict = (idCity:string) => {
//     const url = `${BASE_URL}/localidades/municipios/${idCity}/distritos`;
//     return fetch(url).then(response => response.json());
// }