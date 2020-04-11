import App from "../components/App";
import fetch from "node-fetch";

export default function Index(props) {
    return (
        <div>
        <App notes={props.notes} />
        </div>
    )
};

//calls get-db API to load data in db before rendering
export async function getServerSideProps(){  
    var raw =  await fetch("http://localhost:3000/api/db-get");
    if(raw !== undefined){
    const data = await raw.json();
    return { props : { notes: data } };
    }else{
        return { props : { notes: [] } };   //Should be db error page
    }
  };