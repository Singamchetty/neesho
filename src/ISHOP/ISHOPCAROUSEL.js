import React from 'react';

const ISHOPCAROUSEL = () => {
  return (
    <div className='m-0'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="/images/neesho1.png" className="d-block w-100" alt="..." style={{ height: '300px' }} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="/images/neesho2.png" className="d-block w-100" alt="..." style={{ height: '300px' }} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="/images/neesho3.png" className="d-block w-100" alt="..." style={{ height: '300px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <p><b>Neesho</b>, the cutting-edge e-commerce platform established in 2023, has become the go-to destination for an unparalleled online shopping experience. From the heart of Hyderabad, our locally-rooted app boasts a global vision, offering a curated selection of products ranging from fashion and electronics to home essentials.</p>
        <p>Navigating the Neesho app is a breeze, thanks to its user-friendly interface. Customers can effortlessly explore a diverse array of products, adding them to their carts with just a few taps. The platform's intuitive design ensures a seamless and enjoyable shopping journey for users of all backgrounds.</p>

        <p>What sets Neesho apart is its commitment to showcasing the unique culture of Hyderabad. Our curated collection reflects the rich and diverse tastes of the city, providing customers with a shopping experience that goes beyond the ordinary.</p>

        <p>In terms of technology, Neesho stands at the forefront with its state-of-the-art development. Launched in 2023, the app leverages cutting-edge technology to guarantee secure and efficient transactions. Customers can shop with confidence, knowing that their personal information is protected by robust security measures.</p>

        <p>Neesho prides itself on being more than just a marketplace; it's an experience. The app allows users to add products to their carts, streamlining the shopping process. Whether you're looking for the latest fashion trends, cutting-edge electronics, or essential home items, Neesho has you covered.</p>

        <p>With a commitment to user satisfaction, Neesho emphasizes a diverse product range to cater to various preferences. The app's features are designed to enhance the overall shopping experience, making it enjoyable and accessible to everyone.</p>

        <p>The Neesho app is not merely a transactional platform but a connection to the essence of Hyderabad. By downloading the app, customers gain access to a world of style, unbeatable deals, and a shopping experience tailored to their needs.</p>

        <p>In summary, Neesho, born in Hyderabad and developed in 2023, offers a secure and enjoyable shopping experience. From an extensive product range to a user-friendly interface, Neesho is the ultimate destination for those seeking style, convenience, and a touch of local flair in their online shopping journey. Download the app now and indulge in a world where every addition to your cart brings you closer to a lifestyle of sophistication and ease.</p>

        <div className='fw-bolder'>All Rights Reserved &copy; 2023  Developed by Navya Avuluri and Venkaiah naidu Singamchetty </div>

      </div>


    </div>
  );
};

export default ISHOPCAROUSEL;