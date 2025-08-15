import { useEffect, useState} from "react"
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function Users() {

  const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [email, setEmail] = useState("")
    const [contra, setContra] = useState("")


    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
        .then((resp) => resp.json())
        .then((data) =>
             setUsers(data))
    },[]);

    const loguin = users.find(user => user.email.trim().toLowerCase() === email && user.password === contra)

    const seg = (e) => {
          e.preventDefault();

            if(loguin){
        Swal.fire({
          title: `Bienvenido ${loguin.name.firstname}`,
            text: "Has iniciado sesión correctamente",
          icon: "success"
        }).then(() =>
            { navigate("/Prod")})
    }else{
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error"
        })
      }

    }

    return (<>
      <form className="form">
        <div className="title">Bienvenido,<br /><span>Ingrese sus credenciales para poder acceder </span></div>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="emal" placeholder="Correo electrónico" className="inputL" />
        <input type="password" value={contra} onChange={e => setContra(e.target.value)} id="cont" placeholder="Contraseña" className="inputL" />
        <button  id="seg" onClick={seg} className="button-confirm">Iniciar sesion</button>
      </form>
    </>      
    )
}

export default Users