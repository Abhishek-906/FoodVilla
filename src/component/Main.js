import React, { useEffect, useState } from "react";
import Body from "./staticdata";

const Main = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const endDate = "25 Aug 2024 12:00 PM";

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const clock = () => {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;
    if (diff < 0) {
      return;
    }
    setTime({
      days: Math.floor(diff / 86400),
      hours: Math.floor((diff / 3600) % 24),
      minutes: Math.floor((diff / 60) % 60),
      seconds: Math.floor(diff % 60),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      clock();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landingImage">
        <div id="topic">
          <div id="title">
            <div className="titlechild" id="imgdiv">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.LqyesCPuBc-8-i22O-MWygHaHa&pid=Api&P=0"
                height="290px"
                width="290px"
                alt="Title"
              />
            </div>
            <div className="titlechild" id="four">
              <div id="offer">
                <div id="saleInfo">50% Off on All Products </div>
                <div id="timeblock">
                  <div className="fourblk" id="dy">
                    {time.days}
                  </div>
                  Days
                  <div className="fourblk" id="hr">
                    {time.hours}
                  </div>
                  Hour
                  <div className="fourblk" id="mn">
                    {time.minutes}
                  </div>
                  Min
                  <div className="fourblk" id="sc">
                    {time.seconds}
                  </div>
                  Sec left
                </div>
              </div>
              <div id="explore">
                <h1 id="test">Enjoy Your Delicious Food</h1>
              </div>
              <div id="lorem">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, iste corporis tempore necessitatibus inventore ex?
                </p>
              </div>
              <div id="explore2">
                <button onClick={toggleOptions}>Explore More</button>
              </div>
            </div>,
          </div>
        </div>

        <div style={{  marginRight: "12px" }} id="ApiResult">
          <Body />
          <div className="container">
            <a href="/Cart" className="centered-element">
              Explore Food World  
            </a>
          </div>
        </div>



        <div id="block">
          <div className="blockchild">
            <div className="threeimage">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkBEzSNgSkHcsZTGTcNvhJh4f0YU9UFpUJg&s" height="120px" width="120px" alt="Discount Voucher" />
            </div>
            <div className="discription">
              <h4>Discount Voucher</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="blockchild">
            <div className="threeimage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSiFOTKDLQti2LhVEvDmqt2kw32Bgj1m3fQ&usqp=CAU"
                height="120px"
                width="120px"
                alt="Fresh Healthy Food"
              />
            </div>
            <div className="discription">
              <h4>Fresh Healthy Food</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="blockchild">
            <div className="threeimage">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.0AT-Tjoef07lkrrOOJ7KQAHaDy&pid=Api&P=0"
                height="120px"
                width="120px"
                alt="Fast Home Delivery"
              />
            </div>
            <div className="discription">
              <h4>Fast Home Delivery</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <section id="block2">
        <div className="menu" id="menu1">
          Our Menu
        </div>
        <div className="menu" id="menu2">
          Explore Our Menu
        </div>
        <div id="gridCategory">
          <div id="category">
            <h1>Categories</h1>
            <hr />
            <h2>Sandwiches</h2>
            <h2>Wraps</h2>
            <h2>Appetizers</h2>
            <h2>Burgers And More</h2>
            <h2>Bowls</h2>
            <h2>Thalis</h2>
            <h2>Noodles</h2>
            <h2>All Day Breakfast</h2>
            <h2>Soups And Salads</h2>
            <h2>Deserts & Beverages</h2>
          </div>
          <div id="grid">
            <div id="o">
              <img
                className="grid-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWGa7nz-J8ZfjAVxPSsPdXwLJw1ajyWAEmQ&usqp=CAU"
                alt="Category Image 1"
              />
            </div>
            <div id="t">
              <img
                className="grid-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRv08xClTpeOgeKbJvTbQU3Bx--2n2Aj5Ow&s"
                alt="Category Image 2"
              />
            </div>
            <div id="th">
              <img
                className="grid-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0-rYPgPBLsZ2O6ByJ7_ekQZAWmO9UmvRVQ&usqp=CAU"
                alt="Category Image 3"
              />
            </div>
            <div id="f">
              <img
                className="grid-image"
                src="https://tse1.mm.bing.net/th?id=OIP.vt19-2rqVO2k7Watog6xPAHaEt&pid=Api&P=0&h=180"
                alt="Category Image 4"
              />
            </div>
            <div id="fi">
              <img
                className="grid-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtIhDl-H1pH11wqdYdGLv7OThhdnQtuO6fQ&usqp=CAU"
                alt="Category Image 5"
              />
            </div>
          </div>
        </div>

        <div id="expfood">
          <div className="Foodvariety">
            <img src="data:image/jpeg;base64,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" height="120px" width="120px" alt="Comfort Food Classics" />
            <h3>Comfort Food Classics</h3>
          </div>
          <div className="Foodvariety">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWGa7nz-J8ZfjAVxPSsPdXwLJw1ajyWAEmQ&usqp=CAU"
              alt="Breakfast & Brunch"
            />
            <h3>Breakfast & Brunch</h3>
          </div>
          <div className="Foodvariety">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.vt19-2rqVO2k7Watog6xPAHaEt&pid=Api&P=0&h=180"
              alt="Community Picks"
            />
            <h3>Community Picks</h3>
          </div>
          <div className="Foodvariety">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCT52ssRYeroIhhrjhzRJvXCLCplGhD4cSw&s"
              alt="International Eats"
            />
            <h3>International Eats</h3>
          </div>
          <div className="Foodvariety">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB-wDT8ah4SjQ8RZ3LZSHQ3-gR7kSNlKn8A&s"
              alt="Copycat Recipes"
            />
            <h3>Copycat Recipes</h3>
          </div>
          <div className="Foodvariety">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRv08xClTpeOgeKbJvTbQU3Bx--2n2Aj5Ow&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObbxnTRARq3vIAr_z3Iks4bqVkMsuck7eRw&s"
              alt="Quick & Easy"
            />
            <h3>Quick & Easy</h3>
          </div>
        </div>
      </section>

      <div id="app">
        <div id="list">
          <div className="app">
            <a href="https://www.zomato.com/" target="_blank" rel="noreferrer">
              <img src="data:image/jpeg;base64,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" alt="Zomato" />
            </a>
            <h4>Zomato</h4>
          </div>
          <div className="app">
            <a href="https://www.swiggy.com" target="_blank" rel="noreferrer">
              <img src="data:image/png;base64,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" alt="Swiggy" />
            </a>
            <h4>Swiggy</h4>
          </div>
          <div className="app">
            <a href="https://www.foodpanda.com" target="_blank" rel="noreferrer">
              <img src="data:image/png;base64,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" alt="Food Panda" />
            </a>
            <h4>Food Panda</h4>
          </div>
          <div className="app">
            <a href="https://www.dominos.com" target="_blank" rel="noreferrer">
              <img src="data:image/png;base64,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" alt="Dominos" />
            </a>
            <h4>Dominos</h4>
          </div>
        </div>
      </div>

      <footer>
        <div id="footer">
          <div id="lstimg">
            <img src="" alt="Footer Image" height="220px" width="220px" />
          </div>
          <div>
            <h4>Main Links</h4>
            <ol>
              <li>Order Tracking</li>
              <li>New Order</li>
              <li>Contact Us</li>
              <li>News & Blogs</li>
            </ol>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div id="sup">
            <h4>Support</h4>
            <div>
              <input type="text" placeholder="Enter your Email" />
            </div>
            <h4>Follow Us</h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;










