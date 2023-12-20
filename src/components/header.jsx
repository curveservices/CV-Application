import reactLogo from '../assets/react.svg'

export default function CreateHeader() {
    return (
        <header>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1 className='title'>React CV Builder</h1>
        </header>   
    )
}

