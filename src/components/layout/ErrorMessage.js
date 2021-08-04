export default function ErrorMessage({ error }) {
  console.log(error.error.response);
  return (
    <iframe
      className="alert alert-danger"
      title={error.error.response.statusText}
      srcDoc={error.error.response.data}
    ></iframe>
  );
}
