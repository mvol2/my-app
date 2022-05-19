import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import PSPDFKit from './components/PdfViewerComponent'

async function loadProtectedPDF({ url, httpHeaders }) {
  // Fetch the PDF and read the response as an `ArrayBuffer`.
  const pdfResponse = await fetch(url, { headers: httpHeaders });

  console.log('------', url, httpHeaders);

  console.log('response', pdfResponse);

  const pdf = await pdfResponse.arrayBuffer();

  // const PSPDFKit = await import('pspdfkit');
  // console.log(PSPDFKit.load({ pdf }));

  // Pass the `ArrayBuffer` as a PDF option instead of a URL.
  return pdf;
}

const documentData = {
  url: 'https://qa-kong.command-api.kw.com/om-transaction/document-manager/documents/c2siv86b65bpqvpfli20',
  httpHeaders:{
    "Authorization": "Bearer CPVEC1OL21_UOeuYeFPVH5Q31MI",
    "x-b3-spanid": "09fb0178728a7734",
    "x-b3-traceid": "54ac62341eeab3ad",
    "x-b3-sampled": "1"klklk
}klklkl
}

function App() {
  const [fileArrBuffer, setFileArrBuffer] = useState(null);

  useEffect(() => {
    (async () => {
      console.log(1111);
      const loadedFile = await loadProtectedPDF(documentData);

      console.log(loadedFile);
      setFileArrBuffer(loadedFile);
    })();
  }, []);

  return (
    <div className="App">
      <div className="PDF-viewer">
			{fileArrBuffer && <PSPDFKit
			document={fileArrBuffer}
			/>}
		</div>
    </div>
  );
}

export default App;
