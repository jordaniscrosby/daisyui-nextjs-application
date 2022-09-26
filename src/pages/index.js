export default function index(props) {
  return <></>;
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
