import { Button, Segment} from "semantic-ui-react";
import { AppVisitors } from "../../../app/types/visitors";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../app/config/firebase";

type Props = {
  visitor: AppVisitors
}


export default function VisitorLIstItem({visitor}: Props) {
  
  async function deleteVisitor(){
    try {
      await deleteDoc(doc(db, 'visitor', visitor.id))
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
  
        <Segment clearing>
            <span>{visitor.name}</span>
            <span style={{marginLeft:'2rem'}}>{visitor.date}</span>
            <Button onClick={deleteVisitor} color="red" floated="right"content='delete' />
        </Segment>
  )
} 