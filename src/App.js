
import './App.css';
// import Navbar from './Components/Navbar';
import NamedList from './Components/NamedList';
import VideoPlayer from './Components/VideoPlayer';


const name ="Harry";

function App() {
  return (
    <>
      <NamedList  name ={name} />
      {/* <Navbar title="this is prop" subtitle="we are passing variables"/> */}
      {/* <VideoPlayer/> */}
      
    </>
  );
}

export default App;


// export default  function SearchBar() {
//   return (
//     <form>221f49
// }
// SearchBar()
