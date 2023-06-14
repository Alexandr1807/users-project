import React from 'react'
import { useLocation } from 'react-router-dom'
import { Descriptions, Image } from 'antd';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const location = useLocation()
  const {from} = location.state

  return (
    <div className='user-profile__wrapper'>
      <div className="user-profile__picture-wrapper">
        <Image
          className='user-profile__picture'
          src={from.picture.large}
        />
      </div>
      <Descriptions
       className='user-profile__description'
       title='User info'
       bordered="true" 
       layout="vertical"
       size="middle"
       extra={'Registered: ' + from.registered.date.slice(0,10)}>
        <Descriptions.Item label="Name">{from.name.first + ' ' + from.name.last}</Descriptions.Item>
        <Descriptions.Item label="Nationality">{from.nat}</Descriptions.Item>
        <Descriptions.Item label="Gender">{from.gender}</Descriptions.Item>
        <Descriptions.Item label="Age">{from.dob.age}</Descriptions.Item>
        <Descriptions.Item label="Date">{from.dob.date.slice(0,10)}</Descriptions.Item>
        <Descriptions.Item label="Email">{from.email}</Descriptions.Item>
        <Descriptions.Item label="Telephone">{from.phone}</Descriptions.Item>
        <Descriptions.Item label="Country">{from.location.country}</Descriptions.Item>
        <Descriptions.Item label="City">{from.location.city}</Descriptions.Item>
        <Descriptions.Item label="Street">{from.location.street.name}</Descriptions.Item>
      </Descriptions>

      <Link className='user-profile__back' to="/">Go back</Link>
    </div>
    
  )
}

export default UserProfile
