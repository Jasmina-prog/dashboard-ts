import { Checkbox, Form, Input } from 'antd';
import { Typography } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import api from '../api/request';
import { useMutation } from '@tanstack/react-query';
import ButtonGlobal  from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
// import {CustomAxiosRequestConfig} from '../api/request'

const { Title, Text } = Typography;

export function Login() {
    const useFormSchema = z.object({
        username: z.string(),
        password: z.string(),
        remember: z.boolean().optional()
    })
    type FormType = z.infer<typeof useFormSchema>

    const {handleSubmit, control, formState:{errors}} = useForm<FormType>({
        resolver: zodResolver(useFormSchema)
    })
    const navigate = useNavigate()
    console.log("Error: ",errors);

    const onSubmitFn = (data:FormType) =>{
        mutate(data)
        console.log(data);
        const result = useFormSchema.safeParse(data)
        if(result.success){
            console.log('successful');
        } else{
            console.log('error');
            
        }
    }

    const userLogin = async(data: Object) => {
        const response = await api.post( '/auth/login', data)

        const token = response.data.accessToken;
        localStorage.setItem('authToken', token)
        if(token){
            // props.setIsAuthenticated(true)
            navigate('/main')
        }
        return response.data
    }


    const {data: postData, mutate} = useMutation({
        mutationFn: userLogin
    })

    return (
        <div style={{padding:'30px 50px', boxShadow:'5px 5px 10px gray'}}>
        <Title>Login Page</Title>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
  >

            <Controller 
            name='username'
            control={control}
            render={({ field }) => (
                <div style={{display:'flex', gap:'10px', alignItems:'center', margin:'10px 0'}}>
                <label style={{display:'flex'}}>
                    <Text type="danger">*</Text> Username
                </label>
                <Input {...field}/>
                </div>
            )}
            />

            <Controller 
            name='password'
            control={control}
            render={({ field }) => (
                <div style={{display:'flex', gap:'10px', alignItems:'center', margin:'10px 0'}}>
                <label style={{display:'flex'}}>
                    <Text type="danger">*</Text> Password
                </label>
                <Input.Password {...field}/>
                </div>
            )}
            />

            <div style={{display:'flex', gap:"10px", justifyContent:'center'}}>
            <Controller
            name='remember'
            control={control}
            render={({field})=>(
                <Checkbox {...field}/>
            )}/>
            
            <ButtonGlobal name='Submit' handleClick={handleSubmit(onSubmitFn)} style={{margin:'10px 0'}} type="primary"/>
            </div>
        </Form>
        </div>
    )
}



