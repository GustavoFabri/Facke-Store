import './App.css'
import { Navigate, Outlet } from 'react-router-dom';
import Authenticated from './routes/Authenticated';

function App() {

  const userAuthenticated = Authenticated()

  if (!userAuthenticated){
    return <Navigate to='/login'/>
  }

  return (
      
      <div className='container'>
        <header className="header">
          
        </header>
        <section className='section-body'>
          <Outlet />
        </section>
        <footer className="footer">
          <div className='logo'>
            
          </div>
        </footer>
      </div>

    );
}

export default App;