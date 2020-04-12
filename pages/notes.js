import App from "../components/App";
import fetch from "node-fetch";
import { useRouter } from 'next/router';

export default function Index(props) {
    const router = useRouter();    
    return (
        <div>
        <App 
        notes={props.notes}
        email={router.query.email}
        name={router.query.name} />
        </div>
    )
};

//calls get-db API to load data in db before rendering
export async function getServerSideProps(ctx){ 
    const url = `http://${ctx.req.headers.host}/api/db-get?email=${ctx.query.email}`;
    var raw =  await fetch(url);
    if(raw !== undefined){
    const data = await raw.json();
    return { props : { notes: data } };
    }else{
        return { props : { notes: [] } };   //Should be db error page
    }
  };