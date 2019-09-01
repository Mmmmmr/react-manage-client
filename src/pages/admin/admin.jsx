import React, {Component}  from 'react'
import memoryUtils from "../../utils/memoryUtils";
import {Route, Switch, Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from "../../components/left-nav";
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Order from '../order/order'

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {

  render(){
    return (
        <Layout style={{height: '100%'}}>
          <Sider style={{height: '100%'}}>
            <LeftNav></LeftNav>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
                <Switch>
                        <Redirect from='/' exact to='/home'/>
                        <Route path='/home' component={Home}/>
                        <Route path='/category' component={Category}/>
                        <Route path='/product' component={Product}/>
                        <Route path='/user' component={User}/>
                        <Route path='/order' component={Order}/>
                        <Route path='/role' component={Role}/>
                        <Route path="/charts/bar" component={Bar}/>
                        <Route path="/charts/pie" component={Pie}/>
                        <Route path="/charts/line" component={Line}/>

                </Switch>

            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
    )
  }
}