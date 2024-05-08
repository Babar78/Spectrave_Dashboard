import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, YAxis } from 'recharts';

const colors = ['#ff0000', '#ffd700', '#ff8000',];

const CustomBarChart = ({ data }) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={400}
                height={250}
                data={data}
            // margin={{
            //     top: 5,
            //     right: 30,
            //     left: 20,
            //     bottom: 5,
            // }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill='#000000' >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
