import birthdayCakes from "../../B'day cakes.png";
import customizedCakes from "../../Customized Cakes.png";
import chocolateBrownie from "../../Chocolate Brownie.png";
import chocolateBrownieImg from "../../Chocolate brownie .img.png";
import cookies from "../../Cookies.png";
import cookiesImg from "../../Cookies.img.png";
import cupcakes from "../../Cupcakes.png";
import pastries from "../../Pastries.png";
import iceCream from "../../Ice-cream & Pastries.png";
import iceCreamTwo from "../../Ice-cream (2).png";
import birthdayCakeImg from "../../Birthday cake.img (2).png";
import bakeryBanner from "../../Bakery banner.img.png";

function Gallery() {
  const galleryImages = [
    {
      image: birthdayCakes,
      title: "Birthday Cakes",
    },
    {
      image: customizedCakes,
      title: "Customized Cakes",
    },
    {
      image: chocolateBrownie,
      title: "Chocolate Brownies",
    },
    {
      image: chocolateBrownieImg,
      title: "Fresh Brownies",
    },
    {
      image: cookies,
      title: "Cookies",
    },
    {
      image: cookiesImg,
      title: "Chocolate Chip Cookies",
    },
    {
      image: cupcakes,
      title: "Cupcakes",
    },
    {
      image: pastries,
      title: "Pastries",
    },
    {
      image: iceCream,
      title: "Ice Cream",
    },
    {
      image: iceCreamTwo,
      title: "Ice Cream Collection",
    },
    {
      image: birthdayCakeImg,
      title: "Celebration Cake",
    },
    {
      image: bakeryBanner,
      title: "Mimo's Bite Bakery",
    },
  ];

  return (
    <main className="gallery-page">

      {/* GALLERY HEADER */}
      <section className="gallery-header">
        <p className="gallery-subtitle">Sweet Gallery</p>

        <h1>
          Our Delicious Creations <span>📸</span>
        </h1>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-section">
        <div className="gallery-grid">

          {galleryImages.map((item, index) => (
            <article className="gallery-card" key={index}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">
                <h2>{item.title}</h2>
              </div>

            </article>
          ))}

        </div>
      </section>

    </main>
  );
}

export default Gallery;