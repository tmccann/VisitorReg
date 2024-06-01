import { Button, Form, FormInput } from "semantic-ui-react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/store/store";
import { closeModal } from "../../app/common/modals/modalSlice";

export default function LoginForm() {
    const {register, handleSubmit, formState:{isSubmitting, isValid, isDirty, errors}} = useForm({
        mode: 'onTouched'
    })
    const dispatch = useAppDispatch()

    function onSubmit(data: FieldValues){
        console.log(data)
        dispatch(closeModal())
    }
  return (
    <ModalWrapper header='Sign in'>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <FormInput
            defaultValue=''
            placeholder ='User Name'
            {...register('userName',{required:true})}
            error={errors.userName && 'User name is required'}
            />
          
          <FormInput
            type="password"
            defaultValue=''
            placeholder='Password'
            {...register('password',{required:true})}
            error={errors.password && 'Password is required'}
            />
            <Button
            loading={isSubmitting}
            disabled={!isValid || !isDirty || isSubmitting}
            type="submit"
            fluid
            size="large"
            color="teal"
            content="Login"
            />
        </Form>
    </ModalWrapper>
  )
}