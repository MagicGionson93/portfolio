export default function Image({ urlImage = "", alt = "", classProp = "" }) {
  return <img className={classProp} src={urlImage} alt={alt} />;
}
