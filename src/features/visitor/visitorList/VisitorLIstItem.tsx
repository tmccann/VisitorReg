import { Button, Segment} from "semantic-ui-react";
import { AppVisitors } from "../../../app/types/visitors";

type Props = {
  visitor: AppVisitors
}

export default function VisitorLIstItem({visitor}: Props) {
  return (
  
        <Segment clearing>
            <span>{visitor.name}</span>
            <Button color='teal' floated="right" content='sign Out' />
        </Segment>
  )
} 