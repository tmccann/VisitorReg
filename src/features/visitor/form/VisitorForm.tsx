import { Button, Form, FormInput, FormSelect, Header, Segment } from "semantic-ui-react";
import { createVisitor } from "../visitorSlice";
import { createId } from "@paralleldrive/cuid2";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { Controller, FieldValues, useForm} from "react-hook-form";
import { useParams } from "react-router-dom";
import { employeeOptions } from "./employeeOptions";




export default function VisitorForm() {
    const {register, handleSubmit, control, setValue,
        formState: {errors, isValid, isSubmitting},reset} = useForm({
        mode: 'onTouched'
    })
    let { id } = useParams()
    const visitor = useAppSelector(state => state.visitors.visitors.find(e => e.id === id))
    const dispatch = useAppDispatch()


    function onSubmit (data: FieldValues){
        console.log(data)
        dispatch(createVisitor({...data, id: createId(), date:'2024-07-18'}))
        reset()
        
    }


 
  return (
    <Segment clearing>
        <Header content='Visitor Details' />
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                placeholder="Name"
                defaultValue={visitor?.name|| ''}
                {...register('name', {required:true})}
                error={errors.name && 'name is required'}
                 />
           
           <FormInput
                placeholder="Company"       
                defaultValue={visitor?.company || ''}
                {...register('company', {required:true})}
                error={errors.company && 'company is required'}
                />
        <Controller name='visiting'
                    control={control}
                    rules={{required: 'visiting is required'}}
                    defaultValue={visitor?.visiting}
                    render={({field})=>(
                        <FormSelect
                        options={employeeOptions}
                        placeholder="Visiting" 
                        clearable
                        {...field}
                        onChange={(_, d)=> setValue('visiting', d.value,{shouldValidate: true})}
                        error={errors.visiting && 'visiting is required'}

                        />
                    )}
                    />
      
     
            <Button loading={isSubmitting} disabled={!isValid} type="submit" floated="right" positive content='Submit' />
            <Button loading={isSubmitting} type="button" floated="right" content='Cancel' />
        </Form>
    </Segment>
   
  )
}   