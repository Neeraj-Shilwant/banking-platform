import HeaderBox from '@/components/HeaderBox'
import Rightsidebar from '@/components/Rightsidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstname : "Neeraj",lastname:"Shilwant"
        ,email:"abc@gmail.com"
    };
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type='greeting'
                    title="Welcome"
                    user={loggedIn.firstname || "Guest"}
                    subtext = "Access and Manage your account transactions Effiently."
                />
                <TotalBalanceBox
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance = {10250.35}
            />
            </header>
            Recent Transaction
        </div>
        <Rightsidebar user={loggedIn} transactions={[]} 
        banks={[{currentBalance:1500.01},{currentBalance:400.05}]}/>
    </section>
  )
}

export default Home