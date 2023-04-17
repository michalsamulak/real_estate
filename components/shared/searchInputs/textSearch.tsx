import { Field } from 'formik'
import React from 'react'
import styles from './styles.module.scss'

export const TextSearch = ({name}: {name: string}) => {
  return (
    <>
         <label htmlFor={name}>
            <Field type="text" id={name} name={name} />
         </label>
    </>
  )
}
