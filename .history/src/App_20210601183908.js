import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="PDF-viewer">
			<PSPDFKit
			documentUrl={"Document.pdf"}
			/>
		</div>
    </div>
  );
}

export default App;
