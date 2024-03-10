import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{background:'#F4F6F7',height:'500px'}}>
      main content
         <section className="hero-banner"></section>
         <section className="main-content">
              <div className="content__item">left-bar</div>
              <div className="content__item">dashboard</div>
              <div className="content__item">right-bar</div>
         </section>
    </main>
  );
}
