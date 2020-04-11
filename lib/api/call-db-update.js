const updateDB = async (type, data) => {
    //setting query to decide type, used in db-update API
    const url = type === "I" ? "/api/db-update?m=I" : "/api/db-update?m=D";  
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data.success);      //client log
    })
    .catch((error) => {
      console.error('Error:', error);             //client log
    });
    };
    
    export default updateDB;
    