
function Kosar(props) {

    function dbNoveles(){
        props.dbNoveles(props.kosar)
    }
    
    return (
        <tr>
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.ar}</td>
            <td>{props.kosar.db}</td>           
            <td id="plusz"><button onClick={dbNoveles}>+</button></td>           
            <td id="minusz"><button onClick={dbCsokkentes}>-</button></td>           
            <td id="torol"><button onClick={elemTorles}>Töröl</button></td>                      
        </tr>
    );
}
export default Kosar;