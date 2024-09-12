'use client'

import React, { useState, useEffect } from 'react';

import { Input, Radio, Checkbox, Form, Row, Col, InputNumber, Slider } from 'antd';

function DonationSection() {

    const [donation, setDonation] = useState(500);
    const [sliderValue, setSliderValue] = useState(0); // Initialize the state for the slider value
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const handleDonationChange = e => {
        setDonation(e.target.value);
    };

    const handleCustomDonationChange = value => {
        setDonation(value);
    };

    const handleSliderChange = value => {
        setSliderValue(value);
        setDonation(value);
    };

    useEffect(() => {
        console.log("Selected donation value:", donation);
    }, [donation]);

    return (
        <div className='flex flex-col-reverse lg:flex-row w-full'>
            <div className="w-full lg:w-[40%]  md:mx-0 p-6 bg-white  rounded-md mb-5">
                <h2 className="text-2xl font-bold mb-4 text-[#FF165D] mt-14">Donate Now</h2>
                <Form
                    form={form}
                    name="donationForm"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item name="paymentMethod" >
                        <Radio.Group onChange={handlePaymentChange}>
                            <Radio value="credit" checked={true}>Credit / Debit</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input className='p-4' />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="firstName"
                                label="First Name"
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input className='p-4' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input className='p-4' />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="cardNumber"
                        label="Card Number"
                        rules={[{ required: true, message: 'Please input your card number!' }]}
                    >
                        <Input className='p-4' />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="expiryDate"
                                label="Expiry Date"
                                rules={[{ required: true, message: 'Please input your card expiry date!' }]}
                            >
                                <Input className='p-4' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="cvv"
                                label="CVV"
                                rules={[{ required: true, message: 'Please input your CVV!' }]}
                            >
                                <Input className='p-4' />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="nameOnCard"
                        label="Name on Card"
                        rules={[{ required: true, message: 'Please input the name on card!' }]}
                    >
                        <Input className='p-4' />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="country"
                                label="Country"
                                rules={[{ required: true, message: 'Please input your country!' }]}
                            >
                                <Input className='p-4' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="postalCode"
                                label="Postal Code"
                                rules={[{ required: true, message: 'Please input your postal code!' }]}
                            >
                                <Input className='p-4' />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="saveCard" valuePropName="checked">
                        <Checkbox>Save card for future donations</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <button className="mt-2 p-3 px-5 mx-auto w-full md:w-[90%] rounded-3xl bg-[#FF165D] text-white font-bold text-sm hover:bg-purple-800">
                            Donate
                        </button>
                    </Form.Item>
                </Form>
            </div>

            {/* right form */}
            <div className="p-6 bg-white rounded-lg w-full mx-auto md:mt-16 lg:w-[40%]">
                <h2 className="text-2xl font-bold mb-4 text-[#FF165D]">You are supporting <br /> Emergency Disaster Relief</h2>
                <p className="mb-6 text-black mt-5">Your donation will benefit <strong className='text-[#3EC1D3] text-xl'>Zaheer Welfare Trust</strong></p>
                <div className="mb-4">
                    <h3 className="font-semibold mb-5 text-black ">Enter your donation</h3>
                    <Radio.Group
                        onChange={handleDonationChange}
                        value={donation}
                        size='large'
                    >
                        {[50, 100, 200, 300, 500, 1000].map(amount => (
                            <Radio.Button
                                key={amount}
                                value={amount}
                                type='button'
                                className="hover:bg-[#3ec2d39e]">
                                <p className='text-center text-[#ff165cc3] rounded-md hover:text-white font-bold overflow-hidden'>${amount}</p>
                            </Radio.Button>))}
                    </Radio.Group>
                    <InputNumber
                        prefix="$"
                        min={1}
                        value={donation}
                        onChange={handleCustomDonationChange}
                        placeholder="Other amount"
                        className="w-full mt-3 mb-3 mx-auto p-2"
                    />
                    <Slider
                        max={500}
                        value={sliderValue}
                        onChange={handleSliderChange}
                        className="mb-2 w-full "
                        min={50} />
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2 mt-5 text-black">Zaheer Welfare protects your donation</h3>
                    <p className="mb-5 text-sm text-black">We guarantee you a full refund for up to a year in the rare case that fraud occurs.</p>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2 flex " />
                    <p className='text-black'>Do not display my name publicly on the fundraiser.</p>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2 flex p-5" />
                    <p className='text-black mt-5'>Get occasional marketing updates from GoFundMe. You may unsubscribe at any time.</p>
                </div>
            </div>
        </div>
    )
}
export default DonationSection