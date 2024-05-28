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
            <span style={{fontSize:"2rem", margin:'2rem'}}>{visitor.name}</span>
            <Button onClick={deleteVisitor} color="green" floated="right"content='Sign out' />
        </Segment>
  )
} 