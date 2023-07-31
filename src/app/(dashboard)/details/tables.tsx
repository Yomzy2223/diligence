import { DiligenceTable } from "@/components/features/DiligenceTable"
import { dataBody, headers } from "./constants"

 export const OnboardTable = ()=>{
    return(
<div>

    <DiligenceTable
    header={headers}
    body={dataBody}
    />
</div>


    )



}

export const DraftTable= ()=>{

    return(
        <div>
        
            <DiligenceTable
            header={headers}
            body={dataBody}
            />
        </div>)

}