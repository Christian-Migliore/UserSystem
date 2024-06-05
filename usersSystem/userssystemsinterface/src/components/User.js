import * as React from 'react';
//import makeStyles from '@mui/material';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

// const useStyles = makeStyles ((theme) => ({
// root: {
//   '& > **' : {
//       margin: theme.spacing(1),
//   },
// },
// }));

export default function User() {
    const paperStyle ={padding : '50px', width: 600, margin: '50px auto'};
    const[email, setEmail]= React.useState('')
    const[password, setPassword]= React.useState('')
    const [user, setUser]= React.useState([])
   //   const classes = useStyles();

  const handleClick=(e) => {
    e.preventDefault();
    const user={email, password}
    console.log(user)
    fetch("http://localhost:8080/user/add",{
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(user)

  }).then(() => {
    console.log("New User added")
  })
  }

  React.useEffect(()=> {
    fetch("http://localhost:8080/user/get")
    .then(res=>res.json())
    .then((result)=>{
      setUser(result)
    }
  )
  } 
,[]) 

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{color:"blue"}}><u>Add User</u></h1>


        <form>
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
             value={email} 
             onChange={(e)=>setEmail(e.target.value)}
              />
            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </form>
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
        </Paper>

          <h1>Users</h1>
        <Paper elevation={3} style={paperStyle}>
          {user.map(user => (
            <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={user.id}>
              Id: {user.id}<br/>
              Email: {user.email}<br/>
              Password: {user.password}

              </Paper>
              
          ))}


        </Paper>
    </Container>
  )
}
