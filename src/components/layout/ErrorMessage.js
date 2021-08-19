export default function ErrorMessage({ error }) {
  return (
    <iframe
      className="alert alert-danger"
      title={error.error.response.statusText}
      srcDoc={error.error.response.data}
    ></iframe>
  );
}
