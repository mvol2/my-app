import logo from './logo.svg';
import './App.css';
import PSPDFKit from './components/PdfViewerComponent'

const documentData = {{
  "Authorization": "Bearer CPVEC1OL21_UOeuYeFPVH5Q31MI",
  "x-b3-spanid": "09fb0178728a7734",
  "x-b3-traceid": "54ac62341eeab3ad",
  "x-b3-sampled": "1"
}}

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
