import { useEffect, useState } from "react";
import { fetchCitiesForDistrict } from "../../../services/ibgeApi";

import { InfoDistricArticle, InfoDistrictError, InfoDistrictLine } from './style';

type District = {
    municipio?: {
        nome: string
        microrregiao: {
            nome: string,
            id: number,
            mesorregiao: {
                nome: string,
                UF: {
                    nome: string,
                    sigla: string,
                    regiao: {
                        nome: string
                    }
                }
            }
        }
    }
}

interface idCityProps {
    idCityForDistric: string
}

export function InfoDistrict(idCity: idCityProps) {
    const [districts, setDistricts] = useState<District>({} as District);

    useEffect(() => {
        if (idCity.idCityForDistric !== '') {
            fetchCitiesForDistrict(`${idCity.idCityForDistric}`)
                .then(response => setDistricts(response[0]))
        }
    }, [idCity])

    const nameMunicipio = districts.municipio?.nome;
    const nameMicroRegion = districts.municipio?.microrregiao.nome;
    const nameMesoRegion = districts.municipio?.microrregiao.mesorregiao.nome;
    const nameUF = districts.municipio?.microrregiao.mesorregiao.UF.nome;
    const nameAcronymUF = districts.municipio?.microrregiao.mesorregiao.UF.sigla;
    const nameRegionCountry = districts.municipio?.microrregiao.mesorregiao.UF.regiao.nome;

    return (
        <>
            {nameMicroRegion ?
                <InfoDistricArticle>
                    {<p className="paragraph--big">
                        A cidade de {nameMunicipio} que fica no estado {nameUF} possui as seguintes informações:
                    </p>}
                    <InfoDistrictLine>
                        {nameMicroRegion ?
                            <p><strong>Microrregiao:</strong> {nameMicroRegion}</p>
                            : ''}
                    </InfoDistrictLine>
                    <InfoDistrictLine>
                        {nameMesoRegion ?
                            <p><strong>Mesorregião:</strong> {nameMesoRegion}</p>
                            : ''}
                    </InfoDistrictLine>
                    <InfoDistrictLine>
                        {nameUF && nameAcronymUF
                            ? <p><strong>Estado/UF:</strong> {nameUF} / {nameAcronymUF}</p>
                            : ''}
                    </InfoDistrictLine>
                    <InfoDistrictLine>
                        {nameRegionCountry ?
                            <p><strong>Região do Municipio:</strong> {nameRegionCountry}</p>
                            : ''}
                    </InfoDistrictLine>
                </InfoDistricArticle> :
                <InfoDistrictError>
                    <p>Infelizmente não temos nada para exibir, escolha um <strong>estado</strong> e uma <strong> cidade</strong>  para exibir as informações!</p>
                </InfoDistrictError>
            }
        </>
    )
}