import { Field } from 'formik'
import React from 'react'

export const TextSearch = (name: string) => {
  return (
    <>
         <label htmlFor={name}>
            <Field type="text" id={name} name={name} />
         </label>
    </>
  )
}
