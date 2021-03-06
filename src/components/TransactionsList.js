import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";

const Transactions = () => {
  const { transactions } = useContext(GlobalContext)


  return (
   <>
       <h3>History</h3>
       <ul id='list' className='list'>
       {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction} />))}

       </ul>
   </>
  )
}

export default Transactions