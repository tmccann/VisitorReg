import { Grid, GridColumn } from "semantic-ui-react";
import VisitorList from "../visitorList/VisitorList";
import VisitorForm from '../form/VisitorForm'
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";
import { AppVisitors } from "../../../app/types/visitors";



export default function VisitorDashboard() {
  const [visitors,setVisitors]=useState<AppVisitors[]>([])

  useEffect(() => {  
    setVisitors(sampleData)
  },[])

  function addVisitor(e: AppVisitors){
    setVisitors(prevState => {
      return [...prevState, e]
    })
  }

  function deleteVisitor(visitorId:string){
    setVisitors(visitors.filter(visit => visit.id !== visitorId))
  }
  

  return (
    <Grid>
      <GridColumn width={10}>
        <VisitorList visitors={visitors} deleteVisitor={deleteVisitor}/>
      </GridColumn>
      <GridColumn width={6}>
        <VisitorForm  addVisitor={addVisitor}/>
      </GridColumn>
    </Grid>
  )
}