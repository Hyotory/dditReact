import { useState } from 'react';
import Life01 from "./Life01.jsx";
import Life02 from "./Life02.jsx";

function App() {
    const [flagLife, setFlagLife] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const myclick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setFlagLife(!flagLife);
            setIsAnimating(false);
        }, 150);
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>✨ Life Components ✨</h1>
                <div style={indicatorStyle}>
                    <div style={{
                        ...dotStyle,
                        backgroundColor: flagLife ? '#00ff88' : '#333',
                        transform: flagLife ? 'scale(1.2)' : 'scale(1)'
                    }}></div>
                    <div style={{
                        ...dotStyle,
                        backgroundColor: !flagLife ? '#ff0088' : '#333',
                        transform: !flagLife ? 'scale(1.2)' : 'scale(1)'
                    }}></div>
                </div>
            </div>

            <div style={{
                ...componentWrapperStyle,
                opacity: isAnimating ? 0.3 : 1,
                transform: isAnimating ? 'scale(0.95)' : 'scale(1)'
            }}>
                {flagLife ? <Life01 /> : <Life02 />}
            </div>

            <button
                onClick={myclick}
                style={buttonStyle}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 15px 35px rgba(0, 255, 136, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 255, 136, 0.2)';
                }}
            >
        <span style={buttonTextStyle}>
          {flagLife ? '🌱 → 🌸' : '🌸 → 🌱'} TOGGLE
        </span>
            </button>
        </div>
    );
}

const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
};

const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px'
};

const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: '900',
    background: 'linear-gradient(45deg, #00ff88, #00d4ff, #ff0088)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradient 3s ease infinite',
    textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
    margin: '0 0 20px 0',
    letterSpacing: '-2px'
};

const indicatorStyle = {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    alignItems: 'center'
};

const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
};

const componentWrapperStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '30px',
    margin: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    minWidth: '300px'
};

const buttonStyle = {
    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
    border: 'none',
    borderRadius: '50px',
    padding: '18px 40px',
    fontSize: '16px',
    fontWeight: '700',
    color: '#000',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 8px 25px rgba(0, 255, 136, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '30px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
};

const buttonTextStyle = {
    position: 'relative',
    zIndex: 2
};

// CSS 애니메이션을 위한 스타일 주입
const style = document.createElement('style');
style.textContent = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;
document.head.appendChild(style);

export default App;