import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout(props) {
  return (
    <div className="xl:container xl:mx-auto">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
