const { useState } = React;

const App = () => {
    const [score, setScore] = useState(0);
    const [showContent, setShowContent] = useState(false);
    
    const handleClick = () => {
        // Показываем контент
        setShowContent(true);
        
        // Увеличиваем счетчик
        setScore(prevScore => prevScore + 1);
        
        // Логируем
        console.log('нажалось');
    };
    
    return (
        <div>
            <h1>Счет: {score}</h1>
            <button onClick={handleClick}>
                Нажми меня
            </button>
            
            {showContent && (
                <div id="test">
                    <h1>толян красаучик</h1>
                    <h2>пипука красаучик тоже</h2>
                </div>
            )}
        </div>
    );
};

const app = document.getElementById('NewsForm');
if (app) {
    ReactDOM.render(<App />, app);
}