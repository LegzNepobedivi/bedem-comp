const PDFViewer = ({ fileUrl }) => {
  return (
    <div style={{ height: "500px" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
};

//   export default function Home() {
//     return (
//       <div>
//         <PdfViewer src="https://example.com/yourfile.pdf" />
//       </div>
//     );
//   }

export default PDFViewer;
