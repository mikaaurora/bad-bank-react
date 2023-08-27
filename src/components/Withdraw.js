import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './Context'
import Card from './Card'

function Withdraw() {
  const [show, setShow] = useState(true)
  const [status, setStatus] = useState('')
  const [withdraw, setWithdraw] = useState('')
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem('balance')
    return storedBalance ? Number(storedBalance) : 0
  })
  const ctx = useContext(UserContext)

  useEffect(() => {
    localStorage.setItem('balance', balance)
  }, [balance])

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label)
      setTimeout(() => setStatus(''), 3000)
      return false
    }
    return true
  }

  function handleWithdraw() {
    if (!validate(withdraw, 'withdraw')) return

    const withdrawAmount = Number(withdraw)

    if (isNaN(withdrawAmount)) {
      alert('Enter a number for the amount.')
    } else if (withdrawAmount > balance) {
      alert('There are not that many funds available.')
    }

    const newBalance = Number(balance) - Number(withdraw)

    setBalance(newBalance)
    setShow(false)
  }

  function clearForm() {
    setWithdraw('')
    setShow(true)
  }

  const isButtonDisabled = withdraw === ''

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            Balance: {balance}
            <br />
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Withdraw Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button
              type="submit"
              className="btn btn-light"
              disabled={isButtonDisabled}
              onClick={clearForm}
            >
              Check updated balance
            </button>
          </>
        )
      }
    />
  )
}

export default Withdraw
