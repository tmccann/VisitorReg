import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";


export default function VisitorForm() {
  return (
    <Segment clearing>
        <Header content='Visitor Details' />
        <Form>
            <FormField>
                <input type="text" placeholder="Name" />
            </FormField>
            <FormField>
                <input type="text" placeholder="Company" />
            </FormField>
            <FormField>
                <input type="text" placeholder="Visiting" />
            </FormField>
            <Button type="submit" floated="right" positive content='Submit' />
            <Button type="button" floated="right" content='Cancel' />
        </Form>
    </Segment>
   
  )
}   