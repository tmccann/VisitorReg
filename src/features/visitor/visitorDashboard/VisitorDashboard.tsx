import { Grid, GridColumn } from "semantic-ui-react";
import VisitorList from "../visitorList/VisitorList";
import VisitorForm from '../form/VisitorForm'
import { sampleData } from "../../../app/api/sampleData";



export default function VisitorDashboard() {

  return (
    <Grid>
      <GridColumn width={10}>
        <VisitorList visitors={sampleData} />
      </GridColumn>
      <GridColumn width={6}>
        <VisitorForm />
      </GridColumn>
    </Grid>
  )
}