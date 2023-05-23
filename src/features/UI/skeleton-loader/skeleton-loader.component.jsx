import { Skeleton } from './skeleton-loader.styles'

const SkeletonLoader = ({ width, type }) => {
  return <Skeleton $width={width} type={type}></Skeleton>
}
export default SkeletonLoader
