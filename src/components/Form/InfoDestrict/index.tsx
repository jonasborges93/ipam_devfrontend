import { useEffect, useState } from "react";
import { fetchCitiesForDistrict } from "../../../services/ibgeApi";

import {InfoDistricContetn, InfoDistrictBox} from './style';


interface InfoDestrictProps{
    idCityForDistric:string
}

type Microrregiao = {
    nome: string,
    id: number,
    mesorregiao: Mesorregiao
}

type Mesorregiao = {
    nome: string,
    UF: {
        sigla: string,
        nome: string,
        regiao:{
            nome: string
        }
    }
}

type Municipio = {
    microrregiao: Microrregiao
}

interface DistrictProps {
    municipio?: Municipio
}


export function InfoDestric(idCity:InfoDestrictProps){
    const [districts, setDistricts] = useState<DistrictProps>({} as DistrictProps)
    
    useEffect(()=>{
        if(idCity.idCityForDistric !== ''){
            fetchCitiesForDistrict(`${idCity.idCityForDistric}`)
                .then(response => setDistricts(response[0]))     
        }
    },[idCity])

    const nameMicroregion = () => {
        let microrregion = districts.municipio?.microrregiao.nome;
        if(microrregion){
            return 'Microrregião: ' + microrregion
        }
    }

    const nameMesoregion = () => {
        let mesoregion = districts.municipio?.microrregiao.mesorregiao.nome;
        if(mesoregion){
            return 'Mesoregião: ' + mesoregion
        }
    }
    const nameStateAndCity = () => {
        let nameAcronym = districts.municipio?.microrregiao.mesorregiao.UF.sigla;
        let nameState = districts.municipio?.microrregiao.mesorregiao.UF.nome;
        if(nameAcronym){
            return 'Estado/UF: ' + nameState + '/' + nameAcronym
        }
    }
    const nameRegionCounty = () => {
        let nameCounty = districts.municipio?.microrregiao.mesorregiao.UF.regiao.nome;
        if(nameCounty){
            return 'Região do Município: ' + nameCounty
        }
    }

    return(
        <InfoDistricContetn>
            <InfoDistrictBox>
                <p>{nameMicroregion()}</p>
                <p>{nameMesoregion()}</p>
            </InfoDistrictBox>
            <InfoDistrictBox>
                <p>{nameStateAndCity()}</p>
                <p>{nameRegionCounty()}</p>
            </InfoDistrictBox>
        </InfoDistricContetn>
    )
}