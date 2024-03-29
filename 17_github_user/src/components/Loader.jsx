import BeatLoader from "react-spinners/BeatLoader";

export default function Loader({ loading }) {
  return (
    <div className="api-error">
      <BeatLoader loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
}
