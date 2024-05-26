import { AppVisitors } from "../../../app/types/visitors";
import VisitorLIstItem from "./VisitorLIstItem";


type Props = {
  visitors: AppVisitors[]
  deleteVisitor: (visitorId:string) => void
}

export default function VisitorList({visitors, deleteVisitor}: Props) {
  return (
    <>  
      {visitors.map((visitor)=>(
        <VisitorLIstItem
        key={visitor.id}
        visitor={visitor} 
        deleteVisitor={deleteVisitor}/>
      ))}
    </>
  )
}