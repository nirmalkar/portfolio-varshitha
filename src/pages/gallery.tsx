import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
type Props = {};

function Gallery({}: Props) {
  return (
    <Layout>
      <section className="section_gallery">
        <h1 style={{ color: "#fff" }}> Gallery</h1>
        <div className="grid">
          <div className="item">
            <div className="item__details">ooty veggies straight from farm</div>
          </div>
          <div className="item item--large">
            <div className="item__details">Graduation day</div>
          </div>
          <div className="item item--medium">
            <div className="item__details">~ ooty</div>
          </div>
          <div className="item item--large">
            <div className="item__details">~ ooty</div>
          </div>
          <div className="item item--full">
            <div className="item__details">~ ooty</div>
          </div>
          <div className="item item--medium">
            <div className="item__details">~ ooty</div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/pineforest1.JPG"
              height={850}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">~ ooty</div>
          </div>
          <div className="item">
            <StaticImage
              src="../assets/pine_forest.jpg"
              height={300}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">~ Pine Forest,Ooty</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/white_lehenga1.jpg"
              height={600}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">my look for vas's Haldi</div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/vas_n_me_white_lehenga.jpg"
              height={800}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />

            <div className="item__details">~vas</div>
          </div>
          <div className="item">
            <StaticImage
              src="../assets/ooty_bhaji.JPG"
              height={550}
              width={800}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">Yum Bhajji ~ ooty</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/vas_n_me_Muhurtham.jpg"
              height={650}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">~ vas on "Muhurthum Day"</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/ooty1.jpg"
              height={700}
              width={800}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">~ ooty</div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/ooty_flowers.jpg"
              height={1200}
              width={800}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">~ ooty</div>
          </div>
          <div className="item">
            <StaticImage
              src="../assets/haldi_vas.jpg"
              height={200}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">vas's haldi</div>
          </div>
          {/* 2nd row */}
          <div className="item">
            <StaticImage
              src="../assets/barbeque.jpg"
              height={200}
              width={200}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">Barbeque</div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/white_lehenga2.jpg"
              height={1200}
              width={800}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">vas's haldi</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/white_lehenga3.jpg"
              height={1000}
              width={800}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">vas's haldi</div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/trika.jpg"
              height={1500}
              width={1300}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ Trika</div>
          </div>
          <div className="item item--full">
            <StaticImage
              src="../assets/haldi_friends1.jpg"
              height={290}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ Vas's Haldi</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/tea_estate.JPG"
              height={1000}
              width={900}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">Tea plantation</div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/papa_n_mama.jpg"
              height={1200}
              width={900}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">Amma Appa ❤️ </div>
          </div>
          <div className="item">
            <StaticImage
              src="../assets/sjbit.jpg"
              height={220}
              width={550}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">sjbit</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/feather.JPG"
              height={700}
              width={700}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details"></div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/ganesha_poja.jpg"
              height={1200}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details"></div>
          </div>
          <div className="item">
            <StaticImage
              src="../assets/haldi_vas.jpg"
              height={200}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ Vas's Haldi</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/haldi_friends2.JPG"
              height={1000}
              width={800}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ Vas's Haldi</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/haldi_grp.jpg"
              height={800}
              width={800}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">~ Vas's Haldi</div>
          </div>
          {/* <div className="item item--large">
            <div className="item__details">danish dessert lollipop</div>
          </div>
          <div className="item">
            <div className="item__details">sugar plum dragée</div>
          </div> */}
          <div className="item">
            <StaticImage
              src="../assets/pinforest.JPG"
              height={250}
              width={500}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ pine forest ooty </div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/jatyu_sunset.jpg"
              height={1010}
              width={700}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~Jatayu</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/pineforest2.jpg"
              height={600}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ ooty</div>
          </div>
          <div className="item item--large">
            <StaticImage
              src="../assets/jatyu.jpg"
              height={1010}
              width={700}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ jatyu</div>
          </div>
          <div className="item item--full">
            <StaticImage
              src="../assets/gold_coin.jpg"
              height={1000}
              width={3000}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ Gold Coin</div>
          </div>
          <div className="item item--medium">
            <StaticImage
              src="../assets/murdeshwara_startfish.jpg"
              height={600}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
            />
            <div className="item__details">~ Mudeshwara</div>
          </div>
          {/* <div className="item item--large">
            <StaticImage
              src="../assets/pineforest1.JPG"
              height={850}
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">~ ooty</div>
          </div> */}
          <div className="item">
            <StaticImage
              src="../assets/ooty4.jpg"
              height={250}
              width={500}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Varshitha BR"
              // imgStyle={{ borderRadius: "50%" }}
            />
            <div className="item__details">~ Pine Forest,Ooty</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default Gallery;
