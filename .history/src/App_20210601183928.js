import logo from './logo.svg';
import './App.css';
import PSPDFKit from './components/PdfViewerComponent'

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
