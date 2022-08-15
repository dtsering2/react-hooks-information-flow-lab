export default function Header ({isDarkMode, darkModeHandler}){
    function handleDarkMode(){
        darkModeHandler()
    }

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick ={handleDarkMode}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
    
}