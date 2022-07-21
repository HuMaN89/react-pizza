// import ContentLoader from "react-content-loader";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={3}
    width={288}
    height={466}
    viewBox="0 0 288 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="122" r="120" />
    <rect x="4" y="269" rx="10" ry="10" width="280" height="30" />
    <rect x="4" y="315" rx="10" ry="10" width="280" height="58" />
    <rect x="4" y="389" rx="10" ry="10" width="118" height="30" />
    <rect x="129" y="383" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
