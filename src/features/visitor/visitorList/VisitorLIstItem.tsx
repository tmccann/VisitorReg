import { Button, Segment} from "semantic-ui-react";
import { AppVisitors } from "../../../app/types/visitors";
import { useAppDispatch } from "../../../app/store/store";
import { deleteVisitor } from "../visitorSlice";

type Props = {
  visitor: AppVisitors
}


export default function VisitorLIstItem({visitor}: Props) {
  const dispatch = useAppDispatch()
  
  return (
  
        <Segment clearing>
            <span>{visitor.name}</span>
            {/* <Button color='red' floated="right" content='sign Out' onClick={()=> dispatch(deleteVisitor(visitor.id))} /> */}
            <Button onClick={() => dispatch(deleteVisitor(visitor.id))} color="red" floated="right"content='delete' />
        </Segment>
  )
} 