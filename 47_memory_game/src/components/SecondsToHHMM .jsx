import { Duration } from 'luxon';

const SecondsToHHMM = ({ seconds }) => {
  // Function to convert seconds to HH:MM format

  let duration = Duration.fromObject({ seconds: seconds })
    .toFormat('mm.ss')
    .split('.');

  return (
    <h6>
      {duration[0]}:{duration[1]}
    </h6>
  );
};

export default SecondsToHHMM;
