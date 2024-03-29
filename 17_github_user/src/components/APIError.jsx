export default function APIError({ error }) {
  return (
    <div className="api-error">
      <h1>{error}</h1>
    </div>
  );
}
