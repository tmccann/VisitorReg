import { Button, Form, FormInput, FormSelect, Header, Segment } from "semantic-ui-react";
import { useAppSelector } from "../../../app/store/store";
import { Controller, FieldValues, useForm} from "react-hook-form";
import { useParams } from "react-router-dom";
import { employeeOptions } from "./employeeOptions";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../app/config/firebase";




export default function VisitorForm() {
    const {register, handleSubmit, control, setValue,
        formState: {errors, isValid, isSubmitting},reset} = useForm({
        mode: 'onTouched'
    })
    const { id } = useParams()
    const visitor = useAppSelector(state => state.visitors.visitors.find(e => e.id === id))
  

    async function createVisitor(data:FieldValues){
        const newVisitorRef = doc(collection(db,'visitor'))
        await setDoc(newVisitorRef,{
            ...data,
            date: Timestamp.now()
        })
        return newVisitorRef
    }

    async function onSubmit (data: FieldValues){
        try {
            await createVisitor(data)
            
        } catch (error) {
            console.log(error)
        }
        reset({
            name: '',
            company: '',
            visiting: ''
          });
        
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
      
     
            <Button loading={isSubmitting} disabled={!isValid} type="submit" floated="right" positive content='Sign in' />
            <Button loading={isSubmitting} type="button" floated="right" content='Cancel' />
        </Form>
    </Segment>
   
  )
}   