import './Die.css'
export default function Die({hold,value,held}){
    const styles = {
        backgroundColor: held ? "#59E391" : "white"
    }
    return (
        <div className="die-face" onClick={hold} style={styles}>
            <h2 className="die-num">{value}</h2>
        </div>
    )
}