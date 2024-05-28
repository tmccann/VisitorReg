import { Grid, GridColumn } from "semantic-ui-react";
import VisitorList from "../visitorList/VisitorList";
import VisitorForm from '../form/VisitorForm'

import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../app/config/firebase";
import { AppVisitors } from "../../../app/types/visitors";
import { setVisitors } from "../visitorSlice";



export default function VisitorDashboard() {
  const{visitors} = useAppSelector(state => state.visitors)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    const q = query(collection(db,'visitor'));
    const unsubscribe = onSnapshot(q,{
      next: querySnapshot => {
        const visit: AppVisitors[] = []
        querySnapshot.forEach( docu => {
          visit.push({id: docu.id, ...docu.data()} as AppVisitors)
        }) 
        dispatch(setVisitors(visit))
      },
      error: err => console.log(err)
    })
    return () => unsubscribe()
  },[dispatch])

  

  return (
    <Grid>
      <GridColumn width={10}>
        <VisitorList  visitors={visitors}/>
      </GridColumn>
      <GridColumn width={6}>
        <VisitorForm />
      </GridColumn>
    </Grid>
  )
}