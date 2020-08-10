import React, { FC, useState, Dispatch, SetStateAction } from 'react';
import './App.css';

import { Layout, Form, Input, Button, Space, InputNumber, Select, Statistic } from 'antd';
import { generate } from '@ant-design/colors';
import {  MinusCircleOutlined, PlusOutlined, UpOutlined, DownOutlined  } from '@ant-design/icons';
import { Store } from 'antd/lib/form/interface';
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

const turquoises : string[] = generate('#7af0d2');

const App: FC = () => {

  const [netVal, setNetVal] : [any, Dispatch<SetStateAction<any>>] = useState({"Monthly": 0});
  const [netDisplay, setNetDisplay] : [string, Dispatch<SetStateAction<string>>] = useState("Monthly");

  const onFinish = (values: Store) => {

    let earnings : number = 0;

    for (const key in values) {
      for (const entry in values[key]) {
        if (values[key][entry].period === undefined) {
          values[key][entry].period = "Monthly";
        }

        let amount;

        if (values[key][entry].period === "Hourly") {

          amount = values[key][entry].amount * 8 * 5 * 52.143;
        
        } else if (values[key][entry].period === "Daily5") {

          amount = values[key][entry].amount * 5 * 52.143;

        } else if (values[key][entry].period === "Daily7") {

          amount = values[key][entry].amount * 365;

        } else if (values[key][entry].period === "Weekly") {

          amount = values[key][entry].amount * 52.143;

        } else if (values[key][entry].period === "BiWeekly") {

          amount = values[key][entry].amount * 52.143 / 2;

        } else if (values[key][entry].period === "Monthly") {

          amount = values[key][entry].amount * 12;

        } else if (values[key][entry].period === "Annually") {

          amount = values[key][entry].amount;

        }

        if (key === "income") {
          earnings += amount;
        } else {
          earnings -= amount;
        }
      }
    }

    let earningsObj = {
      "Hourly": earnings / (8 * 5 * 52.143),
      "Daily5": earnings / (5 * 52.143),
      "Daily7": earnings / (365),
      "Weekly": earnings / (52.143),
      "BiWeekly": earnings / (52.143 / 2),
      "Monthly": earnings / (12),
      "Annually": earnings
    };

    setNetVal(earningsObj);

  };

  return (
    <Layout>
      <Header 
        style={
          { position: 'fixed',
            zIndex: 1,
            width: '100%',
            backgroundColor: turquoises[7] }
        }
      >
        <h1 style={{color: turquoises[0]}}>Budget Tracker</h1>
      </Header>
      <Layout>
      <Sider 
          style={
            { padding: '20px',
            marginTop: 64,
            minHeight: 1000,
            backgroundColor: turquoises[4],
            color: turquoises[9] }
          }
        >
          {
            (netVal[netDisplay] && netVal[netDisplay] < 0) ? (
              <Statistic 
                title="Your net earnings ($)" 
                value={netVal[netDisplay]} 
                valueStyle={{color: 'red'}} 
                precision={2}
              />
            ) : (
              <Statistic 
                title="Your net earnings ($)" 
                value={netVal[netDisplay]} 
                valueStyle={{color: 'green'}} 
                precision={2}
              />
            )
          }
          <Select
            style={{
              width: '100%'
            }}
            onChange={val => setNetDisplay(val)}
            defaultValue="Monthly">
            <Option value="Hourly">Hourly</Option>
            <Option value="Daily5">Weekdays</Option>
            <Option value="Daily7">Daily</Option>
            <Option value="Weekly">Weekly</Option>
            <Option value="BiWeekly">Bi-Weekly</Option>
            <Option value="Monthly">Monthly</Option>
            <Option value="Annually">Annually</Option>
          </Select>
        </Sider>
        <Content
          style={
            { padding: '20px 50px',
              marginTop: 64,
              minHeight: 1000,
              backgroundColor: turquoises[1],
              color: turquoises[9] }
          }
        >
          Track your income and expenses to determine your net earnings.
          <br></br>
          <br></br>
          <Form name="dynamic_budget" onFinish={onFinish} autoComplete="off">
            <Form.List name="income">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map(field => (
                      <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                        <span style={{color: 'green', fontWeight: 'bold'}}><UpOutlined /> Income</span>
                        <Input 
                            style={{
                              width: '100%'
                            }}
                            placeholder="Name of income"/>
                        <Form.Item
                          {...field}
                          name={[field.name, 'amount']}
                          fieldKey={[field.fieldKey, 'amount']}
                          rules={[{ required: true, message: 'Missing income amount' }]}
                        >
                          <InputNumber 
                            style={{
                              width: '100%'
                            }}
                            placeholder="Income Amount"
                            formatter={value => `$${value}`} />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, 'period']}
                          fieldKey={[field.fieldKey, 'period']}
                        >
                          <Select
                            style={{
                              width: '100%'
                            }}
                            defaultValue="Monthly">
                            <Option value="Hourly">Hourly</Option>
                            <Option value="Daily5">Weekdays</Option>
                            <Option value="Daily7">Daily</Option>
                            <Option value="Weekly">Weekly</Option>
                            <Option value="BiWeekly">Bi-Weekly</Option>
                            <Option value="Monthly">Monthly</Option>
                            <Option value="Annually">Annually</Option>
                          </Select>
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      </Space>
                    ))}

                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => {
                          add();
                        }}
                      >
                        <PlusOutlined /> Add a source of income
                      </Button>
                    </Form.Item>
                  </div>
                );
              }}
            </Form.List>

            <Form.List name="expenses">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map(field => (
                      <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                        <span style={{color: 'red', fontWeight: 'bold'}}><DownOutlined /> Expense</span>
                        <Input 
                            style={{
                              width: '100%'
                            }}
                            placeholder="Name of expense"/>
                        <Form.Item
                          {...field}
                          name={[field.name, 'amount']}
                          fieldKey={[field.fieldKey, 'amount']}
                          rules={[{ required: true, message: 'Missing expense amount' }]}
                        >
                          <InputNumber 
                            style={{
                              width: '100%'
                            }}
                            placeholder="Expense Amount"
                            formatter={value => `$${value}`} />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, 'period']}
                          fieldKey={[field.fieldKey, 'period']}
                        >
                          <Select
                            style={{
                              width: '100%'
                            }}
                            defaultValue="Monthly">
                            <Option value="Daily5">Weekdays</Option>
                            <Option value="Daily7">Daily</Option>
                            <Option value="Weekly">Weekly</Option>
                            <Option value="BiWeekly">Bi-Weekly</Option>
                            <Option value="Monthly">Monthly</Option>
                            <Option value="Annually">Annually</Option>
                          </Select>
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      </Space>
                    ))}

                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => {
                          add();
                        }}
                      >
                        <PlusOutlined /> Add an expense
                      </Button>
                    </Form.Item>
                  </div>
                );
              }}
            </Form.List>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
      <Footer 
        style={
          { position: "fixed",
            bottom: "0",
            left: "0",
            width: '100%',
            backgroundColor: turquoises[7],
            color: turquoises[0] }
        }
      >
        * Hourly income is based on a 40-hour work week *
      </Footer>
    </Layout>
    
  )
};

export default App;