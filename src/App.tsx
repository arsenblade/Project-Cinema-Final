import MainProvider from './main-provider/MainProvider';
import AppRouter from './router/AppRouter';
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <MainProvider>
        <AppRouter />
      </MainProvider>
    </div>
  );
}

export default App;
