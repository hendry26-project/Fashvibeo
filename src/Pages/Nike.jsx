
import '../index.css';

import ProductCard from '../Data/ProductCard';

import Footer from '../Data/Footer';
import Header from '../Data/Header';





function Nike() {
    const Models = [
        { design: "AIR FORCE", price: "$199", reduce: "$95.20", id: '1' },
        { design: "JORDAN", price: "$149", reduce: "$119.20", id: '2' },
        { design: "BLAZER", price: "$109", reduce: "$88", id: '3' },
        { design: "CRATER", price: "$129", reduce: "103.20", id: '4' },
        { design: "HIPPIE", price: "$99", reduce: "$79.20", id: '5' },
    ];

    const Pictures = [
        { id: "1", image1: '/assets/img/air.png', image2: '/assets/img/air.png', image3: '/assets/img/air2.png' },
        { id: "2", image1: '/assets/img/jordan.png', image2: '/assets/img/jordan.png', image3: '/assets/img/jordan2.png' },
        { id: "3", image1: '/assets/img/blazer.png', image2: '/assets/img/blazer.png', image3: '/assets/img/blazer2.png' },
        { id: "4", image1: '/assets/img/crater.png', image2: '/assets/img/crater.png', image3: '/assets/img/crater2.png' },
        { id: "5", image1: '/assets/img/hippie.png', image2: '/assets/img/hippie.png', image3: '/assets/img/hippie2.png' },
    ];

    // Merged function to combine Models and Pictures
    const mergeProducts = () => {
        return Pictures.map((picture) => {
            const model = Models.find((m) => m.id === picture.id);
            return {
                ...picture,
                ...model,
            };
        });
    };

    const products = mergeProducts();

    return (
        <div>
         <Header/>
            <section id="prodetail" className="section-p1 section-m1">
            {products.map((product) => (
    <ProductCard key={product.id} product={product} />
))}

            </section>


<Footer/>
      
        </div>
    );
}

export default Nike;
