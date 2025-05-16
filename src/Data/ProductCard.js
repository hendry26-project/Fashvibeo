import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const [mainImg, setMainImg] = useState(product.image1);
  
   
 const [selectedSize, setSelectedSize] = useState(null);
  const [hoveredSize, setHoveredSize] = useState(null);


  const handleClick = (size) => {
    setSelectedSize(size);
  };

  const getButtonStyle = (size) => ({
    backgroundColor: selectedSize === size
      ? 'white': hoveredSize === size
      ? ''
      : '',
    color: selectedSize === size ? 'black' : 'white',
    
  
    border: '1px solid black',
    margin: '5px',
    padding: '10px 20px',
   
  });
  // Handle size selection
 

    return (
        <div className="single">
            <div className="single-pro-image">
                <img src={mainImg} width="100%" id="MainImg" alt="Main Product" />
                <div className="small-img-group">
                    <div className="small-img-col">
                        <img
                            src={product.image2}
                            width="100%"
                            className="small-img"
                            alt="Thumbnail 1"
                            onClick={() => setMainImg(product.image2)}
                        />
                    </div>
                    <div className="small-img-col">
                        <img
                            src={product.image3}
                            width="100%"
                            className="small-img"
                            alt="Thumbnail 2"
                            onClick={() => setMainImg(product.image3)}
                        />
                    </div>
                </div>
            </div>

            <div className="single-pro-details">
                <h5>NIKE SHOES</h5>
                <h3>{product.design}</h3>
                <h2><del>{product.price}</del></h2>
                <h2>{product.reduce}</h2>
                <div>
                    <p><b>Select Sizes</b></p>
              <button className="size" style={getButtonStyle('41')} onClick={() => handleClick('41')}>41</button>
   <button className="size" style={getButtonStyle('42')} onClick={() => handleClick('42')}>42</button>
   <button className="size" style={getButtonStyle('43')} onClick={() => handleClick('43')}>43</button>
                    </div> 
               
                <br />
                <input type="number" defaultValue="1" />
              <Link to= '/cart'><button className="normal">Buy Now</button></Link>  <br /><br />
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda dolorum doloremque sapiente aliquid aperiam.
                </span>
            </div>
        </div>
    );
}
export default ProductCard