export function InfoDistrict(){}
// import { useEffect, useState } from "react"
// import { fetchCitiesForDistrict } from "../../../services/ibgeApi"

// interface InfoDestrictProps{
//     idCityForDistric:string
// }

// interface DistrictProps{
//     microregiao: string,
//     mesorregiao: string,
//     uf: string,
//     regiao: string
// }

// export function InfoDestric(idCity:InfoDestrictProps){
//     const [districts, setDistricts] = useState<DistrictProps>()
    
//     useEffect(()=>{
//         fetchCitiesForDistrict(`${idCity.idCityForDistric}`)
//             .then(response => setDistricts(response[0]))
//     },[idCity])

//     console.log(districts)
//     return(
//         <>
//            {/* {districts.map(({mesorregiao,microregiao,regiao,uf})=>{
//             return (
//                 <div>
//                     <p>{mesorregiao}</p>
//                     <p>{microregiao}</p>
//                     <p>{regiao}</p>
//                     <p>{uf}</p>
//                 </div>
//             )
//            })} */}
//         </>
//     )
// }