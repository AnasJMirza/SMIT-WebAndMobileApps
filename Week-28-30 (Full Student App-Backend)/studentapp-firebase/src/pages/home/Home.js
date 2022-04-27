import React from 'react';
import Button from '../../components/button/Button';
import UseHome from './UseHome';

const Home = () => {

    const {students} = UseHome()
    // console.log(students);

    return (
        <div>
            <Button label="Add" route="/add-students" bg="crimson" color="white"/>

            <table>
                <thead>
                    <th>
                        <td>Name</td>
                    </th>
                </thead>
                <tbody>
                    {students.map((item)=>{
                        return <tr>
                            <td>{item.name}</td>
                        </tr>
                    })}        
                </tbody>
            </table>
            
            

            Home
            
        </div>
    );
};

export default Home;