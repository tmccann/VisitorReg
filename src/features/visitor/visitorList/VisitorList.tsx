import { AppVisitors } from "../../../app/types/visitors";
import VisitorLIstItem from "./VisitorLIstItem";


type Props = {
  visitors: AppVisitors[]
}


export default function VisitorList({visitors}: Props) {
  return (
    <>  
      {visitors.map((visitor)=>(
        <VisitorLIstItem
        key={visitor.id}
        visitor={visitor} 
      />
      ))}
    </>
  )
}