import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import {BsPersonCircle} from 'react-icons/bs';
import {AiFillAccountBook} from 'react-icons/ai'
function Home() {

    const data = [
        {
          name: 'School A',
          nutrition: 900,
          nonnutrition: 2400,
          
        },
        {
          name: 'School B',
          nutrition: 3000,
          nonnutrition: 1398,
          
        },
        {
          name: 'School C',
          nutrition: 2000,
          nonnutrition: 9800,
          
        },
        {
          name: 'School D',
          nutrition: 2780,
          nonnutrition: 3908,
          
        },
        {
          name: 'School E',
          nutrition: 1890,
          nonnutrition: 4800,
          amt: 2181,
        },
        {
          name: 'School  F',
          nutrition: 2390,
          nonnutrition: 3800,
          
        },
        {
          name: 'School G',
          nutrition: 3490,
          nonnutrition: 4300,
          
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Students</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>150</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Schools</h3>
                    <AiFillAccountBook className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Nonnutrition%</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Nutrition%</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="nutrition" fill="#8884d8" />
                <Bar dataKey="nonnutrition" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="nutrition" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="nonnutrition" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home