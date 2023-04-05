import React from 'react'
import SectionHeader from '../../../components/contact/header'
import ContactForm from '../../../components/contact/form'


const Contact = () => {
  return (
    <div className='contact--container'>
        <div className='contact--wrapper'>

    <SectionHeader />
    <ContactForm />
        </div>
    </div>
  )
}

export default Contact