import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MySkeleton = ({
  count = 1,
  height = 20,
  width = null,
  circle = false,
  color1 = '#414a68',
  color2 = '#2b3055',
}) => {
  return (
    <SkeletonTheme baseColor={color1} highlightColor={color2}>
      <Skeleton
        count={count} // Number of skeleton lines
        height={height} // Height of each skeleton line
        width={width} // Width of each skeleton line
        circle={circle} // Whether to display a circular skeleton (useful
      />
    </SkeletonTheme>
  );
};

export default MySkeleton;
