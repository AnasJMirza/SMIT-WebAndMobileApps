import Button from "../../components/button/Button";
import ClipLoader from "react-spinners/ClipLoader";
import PuffLoader from "react-spinners/PuffLoader";
import UseHome from "./UseHome";
import "./Home.css";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { students, deleteHandler, update, loader } = UseHome();
  // console.log("Students Check : ", students)

  if (loader) {
    return (
      <div className="loader">
        <ClipLoader color={"crimson"} size={50} />
        {/* <PuffLoader color={"crimson"}  size={50} /> */}
      </div>
    );
  }

  return (
    <div>
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>

      <table className="home-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>RollNum</th>
            <th>Degree</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.rollNum}</td>
                <td>{item.degree}</td>
                <td className="home-actions">
                  <div onClick={() => deleteHandler(students, item.id)}>
                    <Button label="Delete" route bg="red" color="white" />
                  </div>
                  <div onClick={() => update(item.id)}>
                    <Button label="update" route='/add-students' bg="blue" color="white" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="home-button">
        <Button label="Add" route="/add-students" bg="crimson" color="white" />
      </div>
    </div>
  );
};

export default Home;
