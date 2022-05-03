import Button from '../../components/button/Button';
import UseHome from './UseHome';
import './Home.css'

const Home = () => {

    const {students, deleteHandler} = UseHome()
    console.log("Students Check : ", students);


    return (
        <div>

            

            <table className='home-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>RollNum</th>
                        <th>Degree</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item)=>{
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.rollNum}</td>
                            <td>{item.degree}</td>
                            <td className='home-actions'>
                                <div onClick={()=>deleteHandler(students, item.id)}>
                                    <Button label="Delete"  route bg="red" color="white"/>
                                </div>
                                <div>
                                    <Button label="update"  route bg="blue" color="white"/>
                                </div>
                            </td>
                        </tr>
                    })}        
                </tbody>
            </table>
            <div className='home-button'>
                <Button label="Add" route="/add-students" bg="crimson" color="white"/>
            </div>
        
            
            
        </div>
    );
};

export default Home;