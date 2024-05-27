import { Grid, GridColumn } from "semantic-ui-react";
import VisitorList from "../visitorList/VisitorList";
import VisitorForm from '../form/VisitorForm'

import { useAppSelector } from "../../../app/store/store";



export default function VisitorDashboard() {
  

  const{visitors} = useAppSelector(state => state.visitors)
  

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