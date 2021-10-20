import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsernamee] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()
    setEnteredAge('')
    setEnteredUsernamee('')
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter valid name and age',
      })
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Age can not be negative',
      })
    }
    props.onAddUser(enteredUsername, enteredAge)
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsernamee(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser
