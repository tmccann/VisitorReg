import { Button, Segment} from "semantic-ui-react";
import { AppVisitors } from "../../../app/types/visitors";

type Props = {
  visitor: AppVisitors
  deleteVisitor: (visitorId:string) => void
}


export default function VisitorLIstItem({visitor, deleteVisitor}: Props) {
  return (
  
        <Segment clearing>
            <span>{visitor.name}</span>
            <Button color='red' floated="right" content='sign Out' onClick={()=> deleteVisitor(visitor.id)} />
        </Segment>
  )
} 