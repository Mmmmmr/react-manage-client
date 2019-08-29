import React, {Component}  from 'react'
import './login.less'
import logo from './images/logo.png'
import { Form, Icon, Input, Button, message } from 'antd'

import ajax from '../../api/ajax'

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault()

        this.props.form.validateFields(async (error, values) => {
            const {username, password} = values
            if (!error) {
                const res = await ajax('/login', {username: username, password: password}, 'POST')
                if(res.status === 0) {
                    console.log(res)
                }else if(res.status === 1){
                    message.error(res.msg)
                }
            }
        })

    }
    validatePwd = (rule, value, callback) => {

        if(!value) {
            callback('密码必须输入')
        } else if (value.length<4) {
            callback('密码长度不能小于4位')
        } else if (value.length>12) {
            callback('密码长度不能大于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文、数字或下划线组成')
        } else {
            callback() // 验证通过
        }
    }
  render(){
      const from = this.props.form;

    return (
      <div className='login'>
        <header className='login-header'>
            <img src={logo} alt=""/>
            <h1>react项目：后台管理系统</h1>
        </header>
        <section className='login-content'>
            <h2>用户登陆</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {
                        from.getFieldDecorator('username',{
                            rules: [ { required: true, whitespace: true, message: '用户名必须输入' },
                                { min: 4, message: '用户名至少4位' },
                                { max: 12, message: '用户名最多12位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }]
                        })( <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        from.getFieldDecorator('password',{
                            rules: [{validator: this.validatePwd}]

                        })( <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="密码"
                        />)
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>
                </Form.Item>
            </Form>
        </section>
      </div>
    )
  }
}

const WrappedLogin = Form.create({ name: 'login' })(Login);

export default WrappedLogin