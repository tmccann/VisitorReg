import { ChangeEvent, useState } from "react";
import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";
import { AppVisitors } from "../../../app/types/visitors";
import { createVisitor } from "../visitorSlice";
import { createId } from "@paralleldrive/cuid2";
import { useAppDispatch } from "../../../app/store/store";




export default function VisitorForm() {
    const dispatch = useAppDispatch()
    const intialState ={
        name:'',
        company:'',
        visiting:'',
    }
    const [values, setValues]= useState(intialState)

    function onSubmit (){
        console.log(values)
        dispatch(createVisitor({...values, id: createId(), date:'2024-07-18'}))
        setValues(intialState)
    }

    function onInputChange( e: ChangeEvent<HTMLInputElement>){
        const{name, value } = e.target
        setValues({...values, [name]: value})
        
    }
 
  return (
    <Segment clearing>
        <Header content='Visitor Details' />
        <Form onSubmit={onSubmit}>
            <FormField>
                <input 
                onChange={e=> onInputChange(e)}
                name="name"
                value={values.name}
                type="text" 
                placeholder="Name" />
            </FormField>
            <FormField>
                <input 
                onChange={e=> onInputChange(e)}
                name="company"
                value={values.company}
                type="text" 
                placeholder="Company" />
            </FormField>
            <FormField>
                <input
                onChange={e=> onInputChange(e)}
                name="visiting"
                value={values.visiting} 
                type="text" 
                placeholder="Visiting" />
            </FormField>
            <Button type="submit" floated="right" positive content='Submit' />
            <Button type="button" floated="right" content='Cancel' />
        </Form>
    </Segment>
   
  )
}   