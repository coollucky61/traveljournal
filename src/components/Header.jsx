import globe from '../assests/Globe.png'
import '../index.css'
export default function Header () {
    return (
        <header>
            <img src={globe} alt="globe" />
            <h1>my travel journal</h1>
        </header>
    )
}