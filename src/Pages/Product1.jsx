import { useState } from 'react';
import '../index.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageGallery from '../Data/ImageGallery';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';
import Breadcrumbs from "../Data/Breadcrumbs";
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Products } from '../Data/Productdata';
import 'swiper/css'; // core Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';



  


const allProducts = [
  {
    id: 1,
    category: "Blouses & Shirts",
    brand:"HOTOUCH",
    title: "HOTOUCH Womens Hawaiian Shirts Button Up Casual Floral Tropical Shirt Summer Beach Shirt ",
    price: 700,
    mainImage: "/assets/img/HSS152-Floral-Hipster.jpg",
    thumbnails: ["/assets/img/HSS152-Floral-Hipster.jpg", "/assets/img/a2.jpg", "/assets/img/a1.jpg", "/assets/img/a4.jpg", "/assets/img/a7.jpg"],
    sizes: ['Small', 'Large', 'Medium', 'XL', 'XXL'],
    new: 'Material composition', newtype: '95% Polyester, 5% Spandex',
    Color: 'Neck style', Colortype: 'V-Neck',
    Style: 'Pattern', Styletype: 'Printed',
    Length: 'Length ', Lengthtype: 'Standard length  ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '1',
    Fit: 'Fit type', Fittype: '  Regular Fit ',
    Material: 'Closure type', Materialtype: 'Button',
    Care: 'Care instructions ', Caretype: ' Machine Wash',
    Origin: 'Country of Origin ', Origintype: ' USA',
    Description: "*❥ High Quality:This Hawaiian Shirt is quality material with brilliant/vivid colors and summer sun feel. When you wear this Tropical Shirts, you will feels soft an flight, kind of silky.So comfy, cool, breathable, durable and skin-frendly!",
    Fabric: "*❥Unique Design:Summer Hawaiian Shirts, cute floral tropical print, casual button down blouse, cool beach shirt, soft short sleeve top, v Neck. The Color is bright and vibrant. Got lots of compliments for the print as Hawaiian Themed Party Gift, Halloween Costume, Beach Day Shirt, Christmas Present!",
    CareInstructions: '* ❥Fashion Match/Mutiple Options: Cute Hawaii Outfit that you can wear open/buttoned/tied in the front.This Hawaiian Button Down Shirt will be great for wearing with shorts/pants or over a swimsuit/tank as a cover-up, with white slacks or capris for beach vibes. And also match for favorite necklace, heels, sandals, hat and sunglass to look for fasionable and beautiful.',
    About: '*❥Occasion: Perfect for Hawaiian party, travel, beach trip, holiday, vacation, cruise, camping, graduation, club, dating, street,night out, shopping, outdoor.',

    relatedProducts: [3,10]
  },
  {
    id: 2,
    category: " Jeans",
    brand:'HIGHLANDER',
    title: " HIGHLANDER Men Tapered Fit Mid Rise Dark Blue Jeans",
    price: '1,300',
    mainImage: "/assets/img/j1.webp",
    thumbnails: ["/assets/img/j2.webp", "/assets/img/j3.webp", "/assets/img/j4.webp", "/assets/img/j5.webp"],
    sizes: ['30', '34', '36', '38'],
    Color: 'Color', Colortype: 'Dark Blue ',
    Style: 'Style', Styletype: 'PHJN000073',
    Length: 'Length ', Lengthtype: 'Long  length',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '5',
    Fit: 'Fit type', Fittype: '  Straight fit ',
    Material: 'Material type', Materialtype: 'Cotton Blend',
    Care: 'Care instructions ', Caretype: ' Machine Wash',
    Origin: 'Country of Origin ', Origintype: ' India',
    Description: "* 📝🛍️Product Description: These straight-fit mid-rise jeans offer a sleek, modern look with a clean finish. Made from stretchable fabric, they provide comfort and flexibility for all-day wear.",
    Fabric: "*🧵 👕Fabric: A blend of cotton, polyester, and lycra, offering breathability, durability, and stretch for all-day comfort and flexibility.",
    CareInstructions: '* 🧺🧴CareInstructions: Machine wash in cold water on a gentle cycle to maintain fabric quality. Use a mild detergent and avoid bleach to prevent fading. Wash inside out to protect the color and design. Tumble dry on low or air dry to retain shape.',
    relatedProducts: [
      { id: 6, image: '/assets/img/g1.webp', brand: "Ketch", title: "Blue Skinny Fit Clean Look Jeans", price: '1000', cartLink: '/cart' },
      { id: 7, image: '/assets/img/z1.webp', brand: "Highlander", title: "Charcoal Straight Fit Jeans", price: '1,101', cartLink: '/cart' },
      { id: 8, image: '/assets/img/n1.webp', brand: "Highlander", title: "Blue Relaxed Fit Stretchable Jeans", price: '2,100', cartLink: '/cart' },
      { id: 9, image: '/assets/img/o1.webp', brand: "Highlander", title: "Blue Slim Fit Stretchable Jeans", price: '1,350', cartLink: '/cart' },
      { id: 10, image: '/assets/img/j6.webp', brand: "Highlander", title: "Blue Relaxed Fit Clean Look Jeans", price: '1,300', cartLink: '/cart' },

    ]
  },
  {
    id: 3,
    category: "Shirts",
    brand:"Generic",
    title: "Men's Hawaiian Beach Print Button Down Shirt, Short Sleeve",
    price: 800,
    mainImage: "/assets/img/H1.jpg",
    thumbnails: ['/assets/img/H2.jpg', '/assets/img/H3.jpg', '/assets/img/H6.jpg', '/assets/img/H8.jpg'],
    sizes: ['XL', 'XXL', 'Small', 'Large'],


    Color: 'Material composition', Colortype: '98% Polyester, 2% Spandex',
    Style: 'Pattern', Styletype: 'Printed',
    Length: 'Length ', Lengthtype: 'Standard length  ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '1',
    Fit: 'Fit type', Fittype: '  Regular Fit ',
    Material: 'Collar style', Materialtype: 'Spread Collar, Button Down',
    Care: 'Care instructions ', Caretype: ' Machine Wash',
    Origin: 'Country of Origin ', Origintype: ' USA',
    Description: "* 【Material】This casual shirts are made of 98% polyester and 2% spandex, soft, breathable, quick-dry, lightweight and durable, it's suitable for summer days, making you cool and comfortable all day long.",
    Fabric: "*【Classic Design】The button down shirt features spread collar and short sleeves, some has one chest pocket that is covenient to hold small items, regular fit shirts are suitable for most people, simple but classic, it never goes out of style.",
    CareInstructions: '* 【Stylish Pattern】There are different patterns you could choose, hawaiian patterns like coconut tree, setting sun, Christmas Patterns like santa, Christmas tree, some unique printed patterns, the button up shirts is suitable for boys, men, college students, etc.',
    About: '*【Occasion】Our printed shirts are perfect for Hawaii, summer beaches, holidays, camping, casual wear, Christmas Day and so on because of the different patterns. The stylish summer hawaiian shirts could be a perfect gift for your son, boy friends, husband, etc.',

    relatedProducts: [1,10]
  },
  {
    id: 4,
    category: "Shorts",
    brand:"Kook N Keech",
    title: "Men's Denim  Shorts",
    price: 999,
    mainImage: "/assets/img/f6.jpg",
    thumbnails: ['/assets/img/i2.webp', '/assets/img/i3.jpg', '/assets/img/i4.jpg', '/assets/img/i5.jpg'],
    sizes: ['XL', 'XXL', 'Small', 'Large'],
    Color: 'Color', Colortype: 'blue & White ',
    Style: 'Style', Styletype: 'PHJN000073',
    Length: 'Length ', Lengthtype: 'Knee Length',
    Fit: 'Fit type', Fittype: '  Slim fit ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '5',
    Material: 'Material type', Materialtype: 'Cotton Blend',
    Care: 'Care instructions ', Caretype: ' Machine Wash',
    Origin: 'Country of Origin ', Origintype: ' India',
    Description: '* 📝🛍️Product Descripition:Make a statement in these blue and white cotton lycra shorts. The slim fit and knee-length design create a trendy look, while the washed pattern adds a unique touch. With five pockets and a zip closure, these shorts blend style with functionality. Perfect for casual outings, they are machine washable for easy maintenance.',

    Fabric: "*🧵 👕Fabric: Made from woven cotton fabric, featuring a zip closure, round pockets (5 total), and a mid-rise waist.",
    CareInstructions: '* 🧺🧴CareInstructions: Perfect for casual wear with convenient machine wash ',
    relatedProducts: [13,14]
  },
  {
    id: 5,
    brand:'ADDIZ',
    category: "Shorts",
    title: "ADDIZ Lycra Shorts pack of 3 for Men",
    price: 999,
    mainImage: "/assets/img/shorts.webp",
    thumbnails: ['/assets/img/short1.jpg', '/assets/img/short4.jpg', '/assets/img/short2.jpg', '/assets/img/short3.jpg'],
    sizes: ['XL', 'XXL', 'Small', 'Large'],
    Color: 'Material composition', Colortype: 'Lycra ',
    Style: 'Style', Styletype: 'Regular Shorts',
    Length: 'Length ', Lengthtype: 'Above Knee ',
    Fit: 'Fit type', Fittype: '  Regular fit ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '2',
    Material: 'Material type', Materialtype: 'Polyester Blend',
    Care: 'Care instructions ', Caretype: ' Hand Wash Only',
    Origin: 'Country of Origin ', Origintype: ' India',

    Fabric: '【 Premium Quality Fabricl】Made from high-quality lycra, these shorts offer superior comfort, flexibility, and durability.',
    CareInstructions: ' 【 iVersatile Pack of Threel】 Comes in a convenient pack of three, providing great value and options for different occasions.Breathable & Moisture-Wicking: Designed with breathable material that wicks moisture away, keeping you dry and comfortable during workouts.',
    Description: '【 Four-Way Stretch】 The four-way stretch fabric ensures maximum mobility and a perfect fit for all body types. Ideal for Various Activities: Perfect for gym workouts, running, cycling, yoga, and casual wear.',

    relatedProducts: [4
    ]
  },
  {
    id: 6,
    category: "Shirts",
    brand:"Dcvmvmn",
    title: "Dcvmvmn Men's Shirt Slim Solid Color Long Sleeve British Style Cotton Shirt Office Casual Wear",
    price: 1000,
    mainImage: "/assets/img/81.jpg",
    thumbnails: ['/assets/img/82.jpg', '/assets/img/83.jpg', '/assets/img/84.jpg', '/assets/img/85.jpg'],
    sizes: ['XL', 'XXL', 'Small', 'Large'],


    Color: 'Fabric type', Colortype: '100% cotton',
    Style: 'Collar style', Styletype: ' Button Down',
    Length: 'Length ', Lengthtype: 'Standard length  ',
    Fit: 'Care instructions', Fittype: '   Machine Wash ',
    NoOfPockets: 'Country of Origin', NoOfPocketstype: 'Imported',


    Description: "* 【PERFECT DESIGN】This men's button up shirt has a smooth texture. Classic mainstream color, regular fit. Slim-fit button-down dress shirt with wrinkle-resistant lapels. The stylish and high-end design reflects your unique taste and elegance.",
    Fabric: "*【HIGH QUALITY FABRIC】Men's dress shirts are made of high quality breathable fabric. Well-cut high-quality smooth fabric makes you feel soft and comfortable when you wear it. Durable.",
    CareInstructions: '* 【CareInstructions】Mens shirts can be hand or machine washed. Hang to dry.',
    About: '*【Occasion】Perfect for all seasons, suitable for every occasion. This mens shirt is easy to wear and looks sophisticated for any occasion.',

    relatedProducts: [
     9,10
    ]
  },
  {
    id: 7,
    category: "Bags",
    brand:"Aldo ",
    title: "Aldo TARANDI Black Womens Laptop Bag",
    price: 3000,
    mainImage: "/assets/img/bag1.jpg",
    thumbnails: ['/assets/img/bag2.jpg', '/assets/img/bag3.jpg', '/assets/img/bag4.jpg', '/assets/img/bag5.jpg'],
    sizes: ['Small', 'Large'],
    Color: 'Color', Colortype: 'Black ',
    Style: 'Type', Styletype: 'Top Zipper Closure',
    Length: 'Material ', Lengthtype: 'Synthetic Outer ',
    Fit: 'Country of Origin', Fittype: 'China ',
    NoOfPockets: 'Product Dimensions', NoOfPocketstype: '  39 x 12 x 30 Centimeters',
    Material: 'Item model number', Materialtype: '23Tarandi',
    Care: 'Item Weight  ', Caretype: ' 1 kg 110 g',
    Origin: 'Manufacturer  ', Origintype: ' ALDO GROUP INTERNATIONAL ',

    Description: '*📝🛍️【Additional Information】 The manufacturer is ALDO GROUP INTERNATIONAL, with operations at FOB AGIAG VIRTUAL DC, 6 Schochenmuehlestrasse, Zug, Baar, Switzerland, 634000. The product is packed by Apparel Group India Limited, located at 3rd Floor, Tower 1, Raiaskaran Tech Park, M.V. Road, Sakinaka, Andheri Kurla Road, Andheri East, Mumbai, 400072. It holds a Best Sellers Rank of #144,719 in Computers & Accessories, and #3,497 in Laptop Messenger & Shoulder Bags.',
    relatedProducts: [22
     

    ]
  },
  {
    id: 8,
    category: "T-Shirts",
    brand:"U.S. Polo Assn",
    title: "U.S. Polo Assn. Kids",
    price: 899,
    mainImage: "/assets/img/10.jpg",
    thumbnails: ['/assets/img/9.jpg', '/assets/img/101.jpg', '/assets/img/102.jpg', '/assets/img/104.jpg'],
    sizes: ['2-3 years', '3-4 years', '6-7 years', '8-9 years', '9-10 years', '10-11 years'],

    new: ' Color', newtype: ' Dk. Black,white',
    Color: 'Material composition', Colortype: '100% Cotton',
    Style: 'Pattern', Styletype: 'Solid',
    Length: 'Length ', Lengthtype: 'Standard length  ',
    NoOfPockets: 'Fit type', NoOfPocketstype: 'Regular Fit',
    Fit: 'Sleeve type', Fittype: '  Half Sleeve ',
    Material: 'Neck style', Materialtype: 'Turtle Neck',
    Care: 'Care instructions ', Caretype: ' Hand wash cold',
    Origin: 'Country of Origin ', Origintype: ' USA',
    Description: "* 【🧵 Polo T-Shirt Essentials】This item weighs 500 grams and measures 25 x 20 x 4.5 centimeters. It is sold as a single unit and falls under the generic category of Polo T-Shirt. The net quantity included is 1 count.",
    Fabric: "*【🏷️ Additional Information】The manufacturer, packer, and importer of this product is SIMBUS SOURCING LLP, located at No. 951, 24th Main Road, RK Colony, Marenahalli, JP Nagar, Bengaluru, 560078, Karnataka.",
    CareInstructions: '* 【📝🛍️Description】This polo shirt from the Joyful Nautical collection is made from soft cotton and is a perfect weekend choice for your little boy.',
    About: '*【Occasion】The US Polo shirt is ideal for casual outings, travel, and smart-casual occasions. Its classic design ensures timeless style, while the breathable fabric offers all-day comfort. This versatile piece also makes a thoughtful gift for your son, boyfriend, or husband.',

    relatedProducts:[],
  },
  {
    id: 9,
    category: "Shirts",
    brand:"AG Adriano Goldschmied",
    title: "AG Adriano Goldschmied Men's Benning Utility Shirt",
    price:'1,400',
    mainImage: "/assets/img/111.jpg",
    thumbnails: ['/assets/img/11.jpg', '/assets/img/112.jpg', '/assets/img/113.jpg', '/assets/img/115.jpg'],
    sizes: ['XL', 'XXL', 'Small', 'Large', 'Medium'],


    Color: 'Material composition', Colortype: '100% Cotton',
    Style: 'Pattern', Styletype: 'Solid',
    Length: 'Length ', Lengthtype: 'Standard length  ',
    NoOfPockets: 'Fit type', NoOfPocketstype: 'True To Size',
    Fit: 'Sleeve type', Fittype: '  Long Sleeve ',
    Material: 'Neck style', Materialtype: 'Collared Neck',
    Care: 'Care instructions ', Caretype: ' Hand wash cold',
    Origin: 'Country of Origin ', Origintype: ' USA',
    Description: "* This men's button up denim shirt is designed in non-stretch crosshatch denim with lightweight fabrication",
    Fabric: "*【🧵 Men's Shirt Specifications】This men's shirt has package dimensions of 40.7 x 31.3 x 5.7 cm and weighs approximately 459 grams. It is categorized under the generic name Shirt and carries the item model number 70670CBBBIER. The product first became available on 2 May 2020.",
    CareInstructions: '* 【🏷️ Additional Information】Manufactured by AG Adriano Goldschmied, this shirt is crafted with attention to detail and quality. The ASIN is B07TJX8KTW, making it easy to locate for purchase or reference.',
    About: '*【Occasion】Perfect for both casual and semi-formal settings, this mens shirt is ideal for office wear, weekend outings, dinner dates, and travel. Its timeless design and comfortable fit make it a versatile addition to any wardrobe.',

    relatedProducts: [6,10
     

    ]
  },
  {
    id: 10,
    category: "Shirts",
    brand:'DOINLINE',
    title: " DOINLINE Men's Corduroy Cotton Regular fit Casual Shirt",
    price: '1,600',
    mainImage: "/assets/img/13.jpg",
    thumbnails: ['/assets/img/14.webp', '/assets/img/141.webp', '/assets/img/144.jpg', '/assets/img/142.webp'],
    sizes: ['XL', 'XXL', 'XXXL', 'Small', 'Large', 'Medium'],


    Color: 'Material composition', Colortype: 'Corduroy',
    Style: 'Pattern', Styletype: 'Striped',
    Length: 'Length ', Lengthtype: 'Standard length  ',
    NoOfPockets: 'Fit type', NoOfPocketstype: 'Regular Fit',
    Fit: 'Sleeve type', Fittype: '  Long Sleeve ',
    Material: 'Collar style', Materialtype: 'Cutaway',
    Care: 'Care instructions ', Caretype: ' Hand wash cold or Machine wash',
    Origin: 'Country of Origin ', Origintype: ' Made in USA and Imported',
    Description: "* Premium Quality Fabric: Made from high-quality corduroy, this shirt offers a soft, textured feel, excellent durability, and year-round comfort.",
    Fabric: "*Comfort Fit Design: Tailored for a relaxed yet flattering fit, ensuring ease of movement and all-day comfort for any casual occasion.",
    CareInstructions: '* Stylish Striped Pattern: The classic striped design adds sophistication, making it versatile for pairing with jeans, chinos, or trousers.',
    About: '*Full Sleeve Casual Shirt: Offers full coverage and a polished look, ideal for casual outings, weekend gatherings, or relaxed office settings.',
    specification: "🧵 Shirt Specifications:Compact shirt measuring 9 x 4 x 10 cm and weighing 300 g. Sold as a single unit under the generic name Shirt with a net quantity of 1 count.",
   Addition: ' Additional Information:',
    AdditionalInformation: [{ par: "The manufacturer, packer, and importer is MiraMichi, ensuring consistent quality control across all stages. This item is thoughtfully designed to blend comfort and style for everyday wear." }],

    relatedProducts: [6,9

    ]
  },
  {
    id: 11,
    category: "Shoes",
    brand:'JINGPI',
    title: "Men's PU Leather Formal Oxford Dress Shoes",
    price: 2000,
    mainImage: "/assets/img/shoe.jpg",
    thumbnails: [
      "/assets/img/shoe2.webp",
      "/assets/img/shoe3.webp",
      "/assets/img/shoe4.webp",
      "/assets/img/shoe5.webp"
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "10"],

    Color: "Insole Material", Colortype: "Synthetic",
    Style: "Pattern", Styletype: "Solid",
    Length: "Handmade", Lengthtype: "Yes",
    NoOfPockets: "Toe Shape", NoOfPocketstype: "Pointed Toe",
    Fit: "Shoe Width", Fittype: "Standard",
    Material: "Collar Style", Materialtype: "Cutaway",
    Care: "Closure", Caretype: "Lace Up",
    Origin: "Country of Origin", Origintype: "China",

    Description: "* Rubber soles have wear-resistant texture with strong elasticity. Taller posture brings you more self-confidence and charm.",
    Fabric: "* Suitable for formal, business, wedding occasions and more.",
    CareInstructions: "* 【Item Specifications】 Package Dimensions: 11.81 x 7.87 x 3.94 inches; Weight: 1.98 pounds; Department: Men's; First Available: April 22, 2023; Manufacturer: jiangfeng20210627; ASIN: B0C3MK86BX",

   relatedProducts:[17,20],
  },
  {
    id: 12,
    category: "Smart Watches",
    brand:"Titan",
    title: "Titan Smart 3 Premium Smart Watch,SingleSync BT Calling, 110+ Sports Modes, 200+ Smartwatch Faces",
    price: 4000,
    mainImage: "/assets/img/smart.jpg",
    thumbnails: ['/assets/img/smart.jpg', '/assets/img/sm1.jpg', '/assets/img/sm2.jpg', '/assets/img/sm3.jpg', '/assets/img/sm4.jpg', '/assets/img/sm5.jpg'],
    sizes: ['1.96" AMOLED', '1.85" AMOLED'],
    Color: 'Color', Colortype: 'Black',
    Style: 'Operating System', Styletype: '	android & ios',
    Length: 'Battery Capacity', Lengthtype: ' 280 ',
    NoOfPockets: 'Connectivity ', NoOfPocketstype: 'Bluetooth',
    Fit: 'Resolution', Fittype: ' 410 x 502 ',
    Material: 'Battery Average Life', Materialtype: '7 Days',
    Care: 'Special Feature', Caretype: 'Multisport , Activity and Stress Tracking ,Phone Call, Heart Rate Monitor',
    

    Description: "*1.96 Super AMOLED Display with Always On Display and is ready to style your wrist with bright pixel resolution for a sharper experience and brand new amazing colours",
    Fabric: "*SingleSync BT Calling with Favourite Contacts storage (Android - 100, iOS - 50) and Quick Replies (Android); NitroFast Charging with 10 min charge to fuel up 1 day of battery",
    CareInstructions: '* Advanced 110+ Sports Modes, 200+ Watchfaces, In-Built Games, AI Voice Assistant and many more handy features at a single tap; Health Monitoring with Auto Stress monitor, 24x7 Heart Rate, Sleep Tracker, Spo2 and Womens Health',
    About: '*Closure Type: Hook Buckle; Target Gender: Unisex; Warranty Type: 1 Year Manufacturer Warranty; Sport Type: Walking, running, cycling, badminton, basketball',
    specification: "*Sport Type: Walking, running, cycling, badminton, basketball",

    para: [
      { icon: "/assets/img/waranty.png", text: "1 Year Warranty" },
      { icon: "/assets/img/replace.png", text: "7 Days Replacement" },
      { icon: "/assets/img/cash.png", text: "Cash/Pay on Delivery " },
      { icon: "/assets/img/top.png", text: "Top Brand " },
      { icon: "/assets/img/istall.png", text: "Installation Available " }
    ],


    relatedProducts: [18,31

    ]
  },
  {
    id: 13,
    category: "Skirts & Shorts",
    brand:"LOVE KINS",
    title: "Denim Shorts for Girls and Kids",
    price: 800,
    mainImage: "/assets/img/s1_files/s3.jpg",
    thumbnails: ['/assets/img/s1_files/s1.jpg', '/assets/img/s1_files/s2.jpg', '/assets/img/s1_files/s3.jpg', '/assets/img/s1_files/s4.jpg'],
    sizes: ['7-8 Y', '9-10 Y', '11-12 Y', '13-14 Y', '15-16 Y', '16-17 Y'],
    new: 'Fabric', newtype: "Denim",
    Color: 'Color', Colortype: 'blue',
    Style: 'Style', Styletype: 'PHJN000073',
    Length: 'Length ', Lengthtype: 'Knee Length',
    Fit: 'Fit type', Fittype: '  Slim fit ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '5',
    Material: 'Material type', Materialtype: 'Cotton ',
    Care: 'Care instructions ', Caretype: ' Gentle Wash',
    Origin: 'Country of Origin ', Origintype: ' India',
    Description: '* 📝🛍️Product Descripition:Make a statement in these blue cotton  shorts. The slim fit and knee-length design create a trendy look, while the washed pattern adds a unique touch. With five pockets and a zip closure, these shorts blend style with functionality. Perfect for casual outings, they are machine washable for easy maintenance.',

    Fabric: "*🧵 👕Fabric: Made from woven cotton fabric, featuring a zip closure, round pockets (5 total), and a mid-rise waist.",
    CareInstructions: '* 🧺🧴CareInstructions: Perfect for casual wear with Gentle Wash ',
    relatedProducts: [
 4,14

    ]
  },
  {
    id: 14,
    category: "Shorts",
    brand:"Enrica",
    title: "Men Casual  denim shorts Combo of 4 ",
    price: '1,600',
    mainImage: "/assets/img/c1.webp",
    thumbnails: ['/assets/img/c1.webp', '/assets/img/c3.jpg', '/assets/img/c5.webp', '/assets/img/c6.webp',],
    sizes: ['7-8 Y', '9-10 Y', '11-12 Y', '13-14 Y', '15-16 Y', '16-17 Y'],

    Color: 'Fabric', Colortype: 'Denim',
    Style: 'Style', Styletype: 'PHJN000073',
    Length: 'Length ', Lengthtype: 'Knee Length',
    Fit: 'Fit type', Fittype: '  Slim fit ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '5',
    Material: 'Material type', Materialtype: 'Cotton ',
    Care: 'Care instructions ', Caretype: ' Gentle Wash',
    Origin: 'Country of Origin ', Origintype: ' India',
    Description: '* 📝🛍️Product Descripition:Make a statement in these  cotton  shorts. The slim fit and knee-length design create a trendy look, while the washed pattern adds a unique touch. With five pockets and a zip closure, these shorts blend style with functionality. Perfect for casual outings, they are machine washable for easy maintenance.',

    Fabric: "*🧵 👕Fabric: Made from Denim fabric, featuring a zip closure, round pockets (5 total), and a mid-rise waist.",
    CareInstructions: '* 🧺🧴CareInstructions: Perfect for casual wear with Gentle Wash ',
    relatedProducts: [4,13


    ]
  },
  {
    id: 15,
    category: "Shirts",
    brand:'STIVERS',
    title: " Combo of 4 Checked Men Shirts  ",
    price: '1,900',
    mainImage: '/assets/img/c2.webp',
    thumbnails: [],
    sizes: ['Small', 'Large', 'Medium', 'XL',],

    Color: 'Sleeves', Colortype: 'Long Sleeves',
    Style: 'Pattern', Styletype: 'Casual checks',
    Length: 'Length ', Lengthtype: 'Standard length  ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '1',
    Fit: 'Fabric', Fittype: '  Cotton Blend',
    Material: 'Closure type', Materialtype: 'Button',
    Care: 'Care instructions ', Caretype: ' Machine Wash',
    Origin: 'Country of Origin ', Origintype: ' USA',
    Description: "*❥ High Quality:This Checks Shirt is quality material with brilliant/vivid colors and summer sun feel you will feels soft an flight, kind of silky.So comfy, cool, breathable, durable and skin-frendly!",
    Fabric: "*❥Unique Design:Summer Checks Shirts,  casual button down blouse, soft short sleeve top, v Neck. The Color is bright and vibrant. ",
    CareInstructions: '* ❥Fashion Match/Mutiple Options: Cute  Outfit that you can wear open/buttoned/tied in the front.This Cotton Check Button Down Shirt will be great for wearing with shorts/pants to look for fasionable and beautiful.',
    About: '*❥Occasion: Perfect for  holiday, vacation, cruise, camping, graduation, club, dating, street,night out, shopping, outdoor.',

    relatedProducts: [
   
    ]
  },
  {
    id: 16,
    category: "Shorts & Skirts",
    brand:'ReemJheem ',
    title: "ReemJheem Baby- Girl's Kid's Casual Wear Birthday Skirts Princess Knee Length Skirts Color Black With Mollty_R_J_224_8,9 Years Kidswear",
    price: '2,500',
    mainImage: "/assets/img/sh1.jpg",
    thumbnails: ['/assets/img/sh5.jpg', '/assets/img/sh1.jpg', '/assets/img/sh2.jpg', '/assets/img/sh3.jpg', '/assets/img/sh4.jpg',],
    sizes: ['7-8 Y', '9-10 Y', '11-12 Y', '13-14 Y', '15-16 Y', '16-17 Y'],
    new: "Style", newtype: 'A-line',
    Color: 'Fabric', Colortype: 'Denim',
    Style: 'Rise style', Styletype: 'Mid Rise',
    Length: 'Length ', Lengthtype: 'Knee Length',
    Fit: 'Closure type', Fittype: '  Elastic',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '5',
    Material: 'Material type', Materialtype: 'Pure Crepe ',
    Care: 'Care instructions ', Caretype: ' Gentle Wash',
    Origin: 'Country of Origin ', Origintype: ' India',
    Description: '* Baby GirlsCasual Skirts. Knee-Length, Fluffy Skirts , 100% Cotton Lining.',

    Fabric: "*Beautifully Designed Skirts for Girls with Smooth lining for comfort",
    CareInstructions: '* Ideal for all party occasions, birthday, festives and gifting',
    About: '*Wash Care: Hand wash in cold water with mild detergent, do not tumble dry',
    Addition: '  AdditionalInformation',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: 'Reem Jheem, RZ-113 B/5, 3rd Floor, Tughalkabad Extension, New Delhi – 110019' },
    { Head: 'Contact No:', par: ' 9818547844 / 8700023239' },

    { Head: 'Packer:', par: ' Mannat Fashion, RZ-113 B/5, Tughalkabad, New Delhi – 110019' },

    { Head: 'Item Weight:', par: ' 250 kg (Note: Please verify this, as 250 kg seems unusually heavy for a skirt.)' },


    { Head: '(LxWxH):', par: ' 20 x 18 x 2 cm' },

    { Head: 'Net Quantity:', par: '249.50 count' },

    { Head: 'Generic Name:', par: 'skirt' }],

    relatedProducts: [19
   
    

    ]
  },
  {
    id: 17,
    category: "Shoes",
    title: "Woodland Men's Leather Sneaker Shoes",
    price: 2000,
    mainImage: "/assets/img/w1.webp",
    thumbnails: [
      "/assets/img/wood1.jpg",
      "/assets/img/wood2.jpg",
      "/assets/img/w1.webp",
      "/assets/img/wood3.jpg"
    ],
    sizes: ["7", "8", "9", "10"],
    new: 'Style', newtype: "Sneaker",
    Color: " Material Type", Colortype: "Leather",
    Style: "Closure type", Styletype: "Lace-Up",
    Length: "Heel type", Lengthtype: "Flat",
    NoOfPockets: "Water resistance level", NoOfPocketstype: " No Water resistance ",
    Fit: "Sole material", Fittype: "Thermoplastic Elastomers",
    Material: "Collar Style", Materialtype: "Cutaway",
    Care: "Closure Type", Caretype: "Lace Up",
    Origin: "Country of Origin", Origintype: "India",

    Description: "*Casual Leather Shoes",
    Addition: '  AdditionalInformation',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: 'Aero Club,Woodland, Aero Club unit -7 Rajpura Munshi Complex -140401, Rajpura Patiala Punjab' },
    { Head: 'Contact No:', par: ' 9818547844 / 8700023239' },

    { Head: 'Packer:', par: ' Aero Club unit -7 Rajpura Munshi Complex -140401, Rajpura Patiala Punjab' },

    { Head: 'Item Weight:', par: '1 kg 70 g)' },


    { Head: '(LxWxH):', par: ' 24 x 10.5 x 115 Centimeters' },

    { Head: 'Net Quantity:', par: '249.50 count' },

    { Head: 'Generic Name:', par: 'sneakers' }],
    para: [
      { icon: "/assets/img/waranty.png", text: "90 days Warranty" },
      { icon: "/assets/img/replace.png", text: "10 Days Replacement" },
      { icon: "/assets/img/cash.png", text: "Cash/Pay on Delivery " },
      { icon: "/assets/img/top.png", text: "Top Brand " },
      { icon: "/assets/img/secure.png", text: "secure transaction " }
    ],
    relatedProducts:[{
      
  id: 24,
    image: '/assets/img/WOOD.jpg',
      height: '290px',
        brand: 'Belt',
          gender: 'Men',
            category: 'Belts',
              type: 'Belt',
                title: 'WoodLand Leather Belt for Men',
                  price: 30,
                    link: '/product1/24',


    }],
  },
    
  
  {
    id: 18,
    category: "Acessories",
    brand:'FCUK',
    title: "FCUK series 2 Full touch Smartwatch with 1.69'' Large display,  Bluetooth Calling, SpO2, Metal body, Built-in Games, Heart rate monitor, Multiple Watch Faces and Long battery life",
    price: '5,500',
    mainImage: "/assets/img/smt1.jpg",
    thumbnails: ['/assets/img/smt1.jpg', '/assets/img/smt2.jpg', '/assets/img/smt3.jpg', '/assets/img/smt4.jpg', '/assets/img/smt5.jpg', '/assets/img/smt7.jpg'],
    sizes: [],
    new: 'Color', newtype: 'Pink',
    Color: 'Model Number', Colortype: 'FCUK007F',
    Style: 'Operating System', Styletype: '	android & ios',
    Length: 'Band Material', Lengthtype: ' Nylon',
    NoOfPockets: 'Connectivity Technology', NoOfPocketstype: 'Bluetooth',
    Fit: 'Band Width ', Fittype: ' 20 Millimeters ',
    Material: 'Special Feature', Materialtype: 'Multisport , Activity and Stress Tracking ,Phone Call, Heart Rate Monitor',
    Care: 'Resolution ', Caretype: '240*280 resolution',
    Origin: 'Battery Average Life ', Origintype: '7 Days',

    Description: "*1.69 inch Full-touch HD colorful screen with 240*280 resolution and Adjustable brightness option. The color saturation is high and display is real and vivid. This smartwatch has a beautiful metal curve body that brigs light and thin wearing experience and also protects the screen from physical damages;Bluetooth calling & Phone sync address book - This Smartwatch comes with Built-in microphone and speaker and phone via Bluetooth. You can use the watch to dial & answer the calls without reaching to your phone. It sync phone contacts and built-in call records and contacts make communication more free",
    Fabric: "*Health Protection - This smartwatch has Built-in SpO2/oxygen measurement, blood pressure, Dynamic Heart rate tracking and sleep monitoring keep you informed about physical condition;Casual games - There are two built-in mini games, relax in leisure time; Voice assistant - Use the built-in voice assistant to operate the watch and phone to play, change or stop a song and many more",
    CareInstructions: 'Multi sports modes helps to record the workout data and generate analysis after the exercise. Helps to continuously improve the exercise plan. This Smartwatch is IP67 Waterproof enables you to go out freely and never worry about rain & water splash.;Unlimited Watch faces and Dial personalization available - This Smartwatch has a variety of creative dials can be replaced at will, there is always a trend that belongs to you',
    About: '*Connect with M2 wear app on your mobile. Available on both iOS & Android play stores;Incase there is any plastic cover on top of the sensor, please remove the same; Get a 1-year assured warranty from FCUK.',
    specification: "*Warranty Type: Manufacturer; Sport Type: Fitness, multi-Sports",
    Addition: '  Additional Information:',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: 'ILG ASIA, ILG ASIA LIMITED, Unit 401-406, 4/F, New East Ocean center. No.9 Science Meseum Tst, Kow Loon CT C Bonia Chiu Hong Kong.' },
    { Head: 'Importer:', par: 'ILG ASIA LIMITED, Unit 401-406, 4/F, New East Ocean center. No.9 Science Meseum Tst, Kow Loon CT C Bonia Chiu Hong Kong.' },

    { Head: 'Packer:', par: ' ILG ASIA LIMITED, Unit 401-406, 4/F, New East Ocean center. No.9 Science Meseum Tst, Kow Loon CT C Bonia Chiu Hong Kong.' },

    { Head: 'Item Weight:', par: ' 50 kg ' },


    { Head: '(LxWxH):', par: '10 x 2 x 2 Centimeters ' },

    { Head: 'Net Quantity:', par: '1 1' },

    { Head: 'Generic Name:', par: 'Smart Watches' }],
    para: [
      { icon: "/assets/img/waranty.png", text: "1 Year Warranty" },
      { icon: "/assets/img/replace.png", text: "7 Days Replacement" },
      { icon: "/assets/img/cash.png", text: "Cash/Pay on Delivery " },
      { icon: "/assets/img/top.png", text: "Top Brand " },

    ],


    relatedProducts: [
12,31

    ]
  },
  {
    id: 19,
    category: "Skirts & Shorts",
    brand:'BLACKX',
    title: "BLACKX Denim Skirt for Women| Short Denim Skirt for Women| Denim Slit Skirt for Women - 1003",
    price: '1,530',
    mainImage: "/assets/img/sK1.jpg",
    thumbnails: ['/assets/img/sk1.jpg', '/assets/img/sk1.jpg', '/assets/img/sk3.jpg', '/assets/img/sk4.jpg', '/assets/img/sk5.jpg', '/assets/img/sk6.jpg'],
    sizes: ['small', 'large', 'medium', 'XL', 'XXL',],
    new: 'Material type', newtype: "Denim",
    Color: 'Color', Colortype: 'blue',
    Style: 'Style', Styletype: 'Western',
    Length: 'Length ', Lengthtype: 'Standard Length',
    Fit: 'Rise style', Fittype: '  High Rise ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '5',
    Material: 'Occasion type', Materialtype: 'Casual ',
    Care: 'Care instructions ', Caretype: ' Gentle Wash',
    Origin: 'Country of Origin ', Origintype: ' India',
    Description: '*Quality Denim Fabric: Crafted from high-quality denim, this skirt ensures comfort and durability, making it suitable for everyday wear while maintaining its chic appeal.',

    Fabric: "*Effortless Chic: Elevate your fashion game effortlessly – the long denim skirt for women effortlessly pairs with blouses, sweaters, or tees for a chic and put-together look.",
    CareInstructions: '**Ageless Appeal: Suitable for both women and girls, the long denim pencil skirt captures an ageless aesthetic, making it a wardrobe essential that transcends generations. ',
    About: '*Classic Denim Aesthetic: The skirt exudes a classic denim vibe, providing a versatile canvas for expressing your personal style through various tops, shoes, and accessories.',
    specification: '*Size Recommendation: Please use the infographic size chart guidance to determine your perfect size for extra-large womens shirts; a size large is recommended for a comfortable fit.',
    Addition: '  AdditionalInformation',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: 'BLACKX, help.blackx@gmail.com || +91 8780722778' },
    { Head: 'Importer:', par: 'help.blackx@gmail.com || +91 8780722778' },

    { Head: 'Packer:', par: ' help.blackx@gmail.com || +91 8780722778' },

    { Head: 'Item Weight:', par: ' 300 kg ' },


    { Head: '(LxWxH):', par: '10 x 12 x 5 Centimeters' },

    { Head: 'Net Quantity:', par: '1 1' },

    { Head: 'Generic Name:', par: 'Skirts' }],
    relatedProducts: [16
  ]
  },
  {
    id: 20,
    category: "Footwear",
    brand:'Adidas',
    title: "Adidas Men Black Shoes - 11 (Jj5330)",
    price: '2,889',
    mainImage: "/assets/img/adidas.webp",
    thumbnails: [
      "/assets/img/ad3.webp",
      "/assets/img/ad1.webp",
      "/assets/img/ad2.webp",
      "/assets/img/ad3.webp"
    ],
    sizes: ["7", "8", "8", "9", "10", "11"],
    new: "Color", newtype: 'black',
    Color: " Material", Colortype: "Mesh",
    Style: "brand", Styletype: "Adidas",
    Length: "design type", Lengthtype: "Solid",
    NoOfPockets: "model name", NoOfPocketstype: "JJ5330",
    Fit: "Shoe Width", Fittype: "Standard",
    Material: "sole material type", Materialtype: "Rubber",
    Care: "Closure", Caretype: "Lace Up",
    Origin: "Country of Origin", Origintype: "China",

    Description: "* Rubber soles have wear-resistant texture with strong elasticity. Taller posture brings you more self-confidence and charm.",
    Fabric: "* Suitable for formal, business, wedding occasions and more.",
    Addition: '  AdditionalInformation',
    AdditionalInformation: [{ Head: 'water resistance:', par: ' NO' },
    { Head: 'customer care :', par: 'In case of any issue, contact us E-mail address: support@zeptonow.com' },

    { Head: 'Seller Address:', par: ' Geddit Convenience Private Limited, Unit 803, Lodha Supremus, Saki Vihar Road, Opp MTNL, Office, Powai, Mumbai, Maharashtra, India,400072 For Support ReachOut : support+geddit@zeptonow.com' },

    { Head: 'Item Weight:', par: '2 kg ' },


    { Head: '(LxWxH):', par: '34 x 22 x 14 cm' },

    { Head: 'Net Quantity:', par: '1 1' },

    { Head: 'Generic Name:', par: 'Shoes' }],
    para: [

      { icon: "/assets/img/replace.png", text: "7 Days Replacement" },
      { icon: "/assets/img/secure.png", text: "Secure transaction" },
      { icon: "/assets/img/cash.png", text: "Cash/Pay on Delivery " },
      { icon: "/assets/img/top.png", text: "Top Brand " },
    ],
    relatedProducts:[27,28,11

    ]


  },
  {
    id: 21,
    category: "Jeans & Jeggings",
    brand:"KOTTY",
    title: "KOTTY Women High Rise Relaxed Fit Cotton Lycra Blend Ankle Length Jeans,",
    price: '1,999',
    mainImage: "/assets/img/je1.jpg",
    thumbnails: ['/assets/img/je1.jpg', '/assets/img/je2.jpg', '/assets/img/je3.jpg', '/assets/img/je4.jpg', '/assets/img/je5.jpg',],
    sizes: ['L', '24', '26', '28', '30', '32', '34'],
    new: 'Occasion type', newtype: 'Casual',
    Color: 'Color', Colortype: 'blue ',
    Style: 'Style', Styletype: 'Jeans',
    Length: 'Length ', Lengthtype: 'Full Length',
    Fit: 'Fit type', Fittype: '  Slim fit ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '5',
    Material: 'Material type', Materialtype: 'Cotton Blend',
    Care: 'Care instructions ', Caretype: ' Hand Wash Only',
    Origin: 'Country of Origin ', Origintype: ' India',
    Description: '* 📝🛍️Rise and Fit: Enjoy a high-rise design coupled with a slim fit, providing ample room for movement and functionality.',

    Fabric: "*🧵 👕Fabric: Constructed with a durable cotton lycra blend, offering a perfect balance of comfort and flexibility for your active lifestyle.",
    CareInstructions: '* 🧺🧴Wash Care: Machine wash cold separately, tumble dry low, iron on low heat if necessary, do not bleach, and do not dry clean.',
    AdditionalInformation: [{ Head: 'Manufacturer', par: ' Kotty Lifestyle Pvt Ltd, KOTTY LIFESTYLE PVT LTD. B-97A, OLD POST OFFICE GALI,SHAKARPUR,DELHI-110092' },
    { Head: 'Packer', par: 'KOTTY LIFESTYLE PVT LTD. B-97A, OLD POST OFFICE GALI,SHAKARPUR,DELHI-110092' },

    { Head: 'Seller Address:', par: ' Geddit Convenience Private Limited, Unit 803, Lodha Supremus, Saki Vihar Road, Opp MTNL, Office, Powai, Mumbai, Maharashtra, India,400072 For Support ReachOut : support+geddit@zeptonow.com' },

    { Head: 'Item Weight:', par: '400gm ' },


    { Head: '(LxWxH):', par: '44 x 239 x 276 Millimeters' },

    { Head: 'Net Quantity:', par: '2' },

    { Head: 'Generic Name:', par: 'Jeans' }],
    para: [

      { icon: "/assets/img/replace.png", text: "7 Days Replacement" },
      { icon: "/assets/img/secure.png", text: "Secure transaction" },
      { icon: "/assets/img/cash.png", text: "Cash/Pay on Delivery " },
      { icon: "/assets/img/top.png", text: "Top Brand " },
    ],
    relatedProducts: [
     

    ]
  },
  { 
    id: 22,
    category: "Bags",
    brand:'FLYING BERRY',
    title: "FLYING BERRY Women's Hand bag COMBO PACK (PREMIUM EDITION)",
    price: '2,488',
    mainImage: "/assets/img/ba1.jpg",
    thumbnails: ['/assets/img/ba1.jpg', '/assets/img/ba2.jpg', '/assets/img/ba3.jpg', '/assets/img/ba4.jpg', '/assets/img/ba5.jpg',],
    sizes: ['L'],
    new: ' Color', newtype: 'Purple',
    Color: 'Closure type', Colortype: 'Zipper',
    Style: 'Style', Styletype: 'Handbag With Sling Bag',
    Length: 'Occasion type ', Lengthtype: 'Casual',
    Fit: 'Lining', Fittype: '  Satin ',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '4',
    Material: 'Country of Origin', Materialtype: 'India',

    Description: '* 📝🛍️Dimensions- Handbag- 30 X 32 X 13 CM, Sling Bag- 25 X 20 X 7 CM,',

    Fabric: "*🧵 👕The hand bag has a 2 main compartments, with zip closure for safety and security. The compartments divided by an inner zip storage, 2 slip pockets alongside 1 zip pocket, providing plenty of space for keeping phone, portable charger, keys, hairbrush, wallet, sunglasses, sanitizer etc. It has adjustable sling belt for multipurpose use.",
    CareInstructions: '* Set includes : 1 handbag, 1 sling bag,',
    Addition: '  AdditionalInformation',
    AdditionalInformation: [{ Head: 'Manufacturer', par: ' abhay overseas inc' },
    { Head: 'Packer', par: 'ABHAY OVERSEAS INC, A42 Okhla Industrial Area, Phase-1, New Delhi 110020 (INDIA)' },

    { Head: 'Seller Address:', par: ' Geddit Convenience Private Limited, Unit 803, Lodha Supremus, Saki Vihar Road, Opp MTNL, Office, Powai, Mumbai, Maharashtra, India,400072 For Support ReachOut : support+geddit@zeptonow.com' },

    { Head: 'Item Weight:', par: '499gm ' },


    { Head: '(LxWxH):', par: '30 x 12 x 27 Centimeters' },

    { Head: 'Included Components:', par: 'Sling Bag' },

    { Head: 'Generic Name:', par: 'Hand bag combo' }],
    para: [

      { icon: "/assets/img/replace.png", text: "7 Days Replacement" },
      { icon: "/assets/img/secure.png", text: "Secure transaction" },
      { icon: "/assets/img/cash.png", text: "Cash/Pay on Delivery " },
      { icon: "/assets/img/top.png", text: "Top Brand " },
    ],
    relatedProducts: [
  7

    ]
  },
  {
    id: 23,
    category: "Coats, Jackets & Gilets ",
    brand:'Calvin Klein',
    title: "Calvin Klein Jeans Women's Quilted Jacket ",
    price: '2,999',
    mainImage: "/assets/img/calvin.webp",
    thumbnails: ["/assets/img/calvin.webp", "/assets/img/cal1.jpg", "/assets/img/cal2.jpg", "/assets/img/cal3.jpg", "/assets/img/cal4.jpg"],
    sizes: ['Large', 'Medium', 'XL'],
    Color: 'Color', Colortype: 'Black ',
    Style: 'Length', Styletype: 'Length',
    Length: 'Length ', Lengthtype: 'Comfortable high neck',
    NoOfPockets: 'No Of Pockets', NoOfPocketstype: '2',
    Fit: 'Fit ', Fittype: '   Fits true to size ',
    Material: 'Material Composition', Materialtype: 'Exterior: 100% Nylon, Lining and Filling: 100% Polyester',
    Care: 'Care instructions ', Caretype: ' Machine wash. Do not tumble dry. Do not iron.',
    Origin: 'Country of Origin ', Origintype: ' India',
    Description: "* 📝🛍️Product Description: Quilted jacket with elastic cuffs by CALVIN KLEIN JEANS.These straight-fit mid-rise jackets offer a sleek, modern look with a clean finish. Made from stretchable fabric, they provide comfort and flexibility for all-day wear.",
    Fabric: '* 🧺🧴CareInstructions: Machine wash in cold water on a gentle cycle to maintain fabric quality. Use a mild detergent and avoid bleach to prevent fading. Wash inside out to protect the color and design. Tumble dry on low or air dry to retain shape.',
    Addition: '  AdditionalInformation',
    AdditionalInformation: [{ Head: 'Manufacturer', par: '   Calvin Klein' },


    { Head: 'Item Weight:', par: '499gm ' },


    { Head: '(LxWxH):', par: '30 x 12 x 27 Centimeters' },

    { Head: 'Product model number:', par: ' J20J221901BEH' },

    { Head: 'Generic Name:', par: 'Jackets' }],
    relatedProducts: [
    

    ]
  },
  {
    id: 24,
    category: "Belts",
    brand:"WoodLand",
    title: "WoodLand Lether Belt for Men ",
    price: 400,
    mainImage: "/assets/img/wood.jpg",
    thumbnails: ["/assets/img/wood.jpg", "/assets/img/woo2.jpg", "/assets/img/woo1.jpg", "/assets/img/woo3.jpg", "/assets/img/woo4.jpg"],

    Color: 'Color', Colortype: ' Tan ',
    Style: 'Closure type', Styletype: 'Belt',
    Length: 'Occasion type', Lengthtype: 'Formal',
    NoOfPockets: 'Item Weight', NoOfPocketstype: '220 g',
    Fit: 'Material type', Fittype: '   Genuine Leather,Leather',
    Material: 'Country of Origin', Materialtype: 'India',

    Description: "* 📝🛍️Woodland Genuine leather belt brings you this formal belt made of oil plub grain leather, which is finished in dark tan colour.",

    Addition: '  Additional Information :',
    AdditionalInformation: [


      { Head: 'Package Dimensions:', par: '11.1 x 8.7 x 5.6 cm; 220 g ' },

      { Head: 'Department:', par: 'Men' },
      { Head: 'ASIN: ', par: 'B077SVCKSV' },
      { Head: 'Generic Name:', par: 'Belt' },

      { Head: 'Is Discontinued By Manufacturer:', par: 'No' },

    ],
    relatedProducts: [17
    ]
  },
  {
    id: 25,
    category: "Sneakers",
    brand:"Nike",
    title: "Nike Air Force 1 Mid '07 All Triple Black Blackout Retro Classic Shoes",
    price: '1,759',
    Reduceprice: '2,199',
    mainImage: "/assets/img/air.png",
    thumbnails: [
      "/assets/img/air.png",
      "/assets/img/air2.png",

    ],
    sizes: ['7', '8', '9', '10', '11', '12',],
    new: "Color", newtype: 'black & Dark Blue',
    Color: " Type", Colortype: "Athletic",
    Style: "brand", Styletype: "Nike",
    Length: "Product Line", Lengthtype: "Nike Air Force",
    NoOfPockets: "model name", NoOfPocketstype: "JJ5330",
    Fit: "Shoe Shaft Style", Fittype: "Mid Top",
    Material: "Performance/Activity", Materialtype: "Cross Training, Running & Jogging",
    Care: "Closure", Caretype: "Lace Up",
    Origin: "Country of Origin", Origintype: "Vietnam",

    Description: "* The Air Force 1 Mid '07 is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let you shine. The padded, mid-cut collar with classic hook-and-loop closure adds heritage b-ball comfort while perforations on the toe keep you cool.",
    Fabric: "* For over 35 years it's been comfort and durability straight out of the box. From durably stitched overlays to pristine leather to an easy to break-in design, it's got you covered uptown, downtown and everywhere in between.",
    CareInstructions: "The crisp, easy to clean upper makes it perfect off-court attire while the mid-top design and cupsole finish underfoot nods to b-ball DNA. It's history, looks and comfort all wrapped into one.",
    About: '*Originally designed for performance hoops, the Nike Air cushioning delivers lasting comfort while the padded ankle and tongue add to the soft ride.',
    Addition: '  AdditionalInformation',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: ' NIKE' },
    { Head: 'Imported By :', par: 'Nike India Pvt. Ltd.' },

    { Head: 'Marketed By:', par: ' Superkicks India Pvt. Ltd.' },

    { Head: 'Item Weight:', par: '1.10 KG' },


    { Head: 'Unit of Measurement ', par: '1 Pair' },

    { Head: 'Net Quantity:', par: '1 1' },

    { Head: 'Generic Name:', par: 'Shoes' }],
    para: [


      { icon: "/assets/img/secure.png", text: "Secure transaction" },

      { icon: "/assets/img/top.png", text: "Top Brand " },
    ],

    relatedProducts: [26,27,28,29

    ]
  },
  {
    id: 26,
    category: "Sneakers",
    brand:'Nike',
    title: "AIR JORDAN 1 Retro High Og 'Grey Crimson'-555088-018 ",
    price:'1,404',

    Reduceprice: '1,755',
    mainImage: "/assets/img/jordan.png",
    thumbnails: [
      "/assets/img/jordan.png",
      "/assets/img/jor2.jpg",
      "/assets/img/jor3.jpg",
      "/assets/img/jor4.jpg",
      "/assets/img/jor5.jpg",


    ],
    sizes: ['7', '8', '9', '10', '11', '12',],
    new: "Color", newtype: '  olive green ',
    Color: " Type", Colortype: "Athletic",
    Style: "brand", Styletype: "Nike",
    Length: "Product Line", Lengthtype: "Nike Air Jordan",
    NoOfPockets: "Sole material", NoOfPocketstype: "Rubber",
    Fit: "Outer material", Fittype: "Leather",
    Material: "Performance/Activity", Materialtype: "Cross Training, Running & Jogging",
    Care: "Closure Type", Caretype: "Lace Up",
    Origin: "Country of Origin", Origintype: "Vietnam",

    Description: "* The Air jordan 1 Retro High Og 'Grey Crimson' is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let you shine. The padded, mid-cut collar with classic hook-and-loop closure adds heritage b-ball comfort while perforations on the toe keep you cool.",
    Fabric: "* For over 35 years it's been comfort and durability straight out of the box. From durably stitched overlays to pristine leather to an easy to break-in design, it's got you covered uptown, downtown and everywhere in between.",
    CareInstructions: "The crisp, easy to clean upper makes it perfect off-court attire while the mid-top design and cupsole finish underfoot nods to b-ball DNA. It's history, looks and comfort all wrapped into one.",
    About: '*Originally designed for performance hoops, the Nike Air cushioning delivers lasting comfort while the padded ankle and tongue add to the soft ride.',
    Addition: '  Additional Information:',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: ' NIKE' },
    { Head: 'Imported By :', par: 'Nike India Pvt. Ltd.' },

    { Head: 'Marketed By:', par: ' Superkicks India Pvt. Ltd.' },

    { Head: 'Item Weight:', par: '1.10 KG' },


    { Head: 'Unit of Measurement: ', par: '1 Pair' },

    { Head: 'Net Quantity:', par: '1 1' },

    { Head: 'Generic Name:', par: 'Shoes' }],
    para: [


      { icon: "/assets/img/secure.png", text: "Secure transaction" },

      { icon: "/assets/img/top.png", text: "Top Brand " },
    ],

    relatedProducts: [
 25,27,28,29,30
]
  },
  {
    id: 27,
    category: "Sneakers",
    brand:"Nike",
    title: "NIKE Blazer MID '77 VNTG-White/Black-4.5UK ",
    price: '1,119',

    Reduceprice: '1,399',
    mainImage: "/assets/img/blazer.png",
    thumbnails: [
      "/assets/img/blazer.png",
      "/assets/img/bla1.jpg",
      "/assets/img/bla2.jpg",
      "/assets/img/bla3.jpg",
      "/assets/img/bla4.jpg",
      "/assets/img/bla5.jpg",


    ],
    sizes: ['7', '8', '9', '10', '11', '12',],
    new: "Color", newtype: ' White/Black ',
    Color: " Type", Colortype: "Athletic",
    Style: "brand", Styletype: "Nike",
    Length: "Style", Lengthtype: "BLAZER MID '77 VNTG",
    NoOfPockets: "Sole material", NoOfPocketstype: "Suede",
    Fit: "Material type", Fittype: "Leather",
    Material: "Performance/Activity", Materialtype: "Cross Training, Running & Jogging",
    Care: "Closure Type", Caretype: "Lace Up",
    Origin: "Country of Origin", Origintype: "Vietnam",

    Description: "* Iconic design featuring a sleek silhouette that combines style and performance.",
    Fabric: "* Lightweight and breathable materials ensure maximum comfort during workouts and daily wear.",
    CareInstructions: "Durable rubber outsole provides excellent traction and stability on various surfaces.",
    About: '*Versatile colorway that easily complements any athletic or casual outfit.',
    Addition: '  Additional Information:',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: ' NIKE INDIA PVT LTD, NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },
    { Head: 'Packer :', par: 'NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },

    { Head: 'Importer:', par: ' NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },

    { Head: 'Item Weight:', par: '500 g' },


    { Head: 'LxWxH: ', par: '36 x 24 x 16 Centimeters' },

    { Head: 'Net Quantity:', par: '1 count' },

    { Head: 'Generic Name:', par: 'Shoes' }],
    para: [


      { icon: "/assets/img/secure.png", text: "Secure transaction" },

      { icon: "/assets/img/top.png", text: "Top Brand " },
    ],

    relatedProducts: [ 26,28,29,25

    



    ]
  },
  {
    id: 28,
    category: "Sneakers",
  brand:"Nike",
    title: " Nike Crater Impact mens Sneakers",
    price: '1,280',

    Reduceprice: '1,600',
    mainImage: "/assets/img/crater.png",
    thumbnails: [
      "/assets/img/crater.png",
      "/assets/img/crat1.jpg",
      "/assets/img/crat2.jpg",
      "/assets/img/crat3.jpg",
      "/assets/img/crat4.jpg",
      "/assets/img/crate0.jpg",
      "/assets/img/crate1.jpg",
      "/assets/img/crate2.jpg",
      "/assets/img/crate3.jpg",
      "/assets/img/crate4.jpg",




    ],
    sizes: ['7', '8', '9', '10', '11', '12',],
    new: "Color", newtype: ' Black  &  Light Bone Black Stone Volt 010 ',
    Color: " Type", Colortype: "Athletic",
    Style: "brand", Styletype: "Nike",
    Length: "Style", Lengthtype: "Running",
    NoOfPockets: "Sole material", NoOfPocketstype: "Rubber",
    Fit: "Material type", Fittype: "Leather",
    Material: "Performance/Activity", Materialtype: "Cross Training, Running & Jogging",
    Care: "Closure Type", Caretype: "Lace Up",
    Origin: "Country of Origin", Origintype: "Vietnam",

    Description: "* Iconic design featuring a sleek silhouette that combines style and performance.",
    Fabric: "* Lightweight and breathable materials ensure maximum comfort during workouts and daily wear.",
    CareInstructions: "*Rubber details on the outsole feature 15% Nike Grind and add traction and durability",
    About: '*Versatile colorway that easily complements any athletic or casual outfit.',
    Addition: '  Additional Information:',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: ' NIKE INDIA PVT LTD, NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },
    { Head: 'Packer :', par: 'NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },

    { Head: 'Importer:', par: ' NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },

    { Head: 'Item Weight:', par: '500 g' },


    { Head: 'LxWxH: ', par: '25.4 x 8.5 x 9.5 Centimeters' },

    { Head: 'Net Quantity:', par: '1 set' },

    { Head: 'Generic Name:', par: 'Shoes' }],
    para: [


      { icon: "/assets/img/secure.png", text: "Secure transaction" },

      { icon: "/assets/img/top.png", text: "Top Brand " },
    ],

    relatedProducts: [
      25,26,27,29
    ]
  },
  {
    id: 29,
    category: "Sneakers",
    brand:"Nike",
    title: "Nike Space Hippie 01 ",
    price: '1,199',

    Reduceprice: '1,499',
    mainImage: "/assets/img/hippie.png",
    thumbnails: [
      
      "/assets/img/hip1.webp",
      "/assets/img/hip2.webp",
      "/assets/img/hip3.webp",
      "/assets/img/hippie2.png",
      "/assets/img/hi0.jpg",
      "/assets/img/hi1.jpg",
      "/assets/img/hi3.jpg",
      "/assets/img/hi4.jpg",


    ],
    sizes: ['7', '8', '9', '10', '11', '12',],
    new: "Color", newtype: ' Vast Grey  Hyper Crimson & Black Navy ',
    Color: " Type", Colortype: "Athletic",
    Style: "brand", Styletype: "Nike",
    Length: "Model", Lengthtype: "Space Hippie 01",
    NoOfPockets: "Sole material", NoOfPocketstype: "Rubber",
    Fit: "Material type", Fittype: "Synthetic",
    Material: "Performance/Activity", Materialtype: "Cross Training, Running & Jogging",
    Care: "Closure Type", Caretype: "Lace Up",
    Origin: "Country of Origin", Origintype: "Vietnam",

    Description: "* Iconic design featuring a sleek silhouette that combines style and performance.",
    Fabric: "* Lightweight and breathable materials ensure maximum comfort during workouts and daily wear.",
    CareInstructions: "*Durable rubber outsole provides excellent traction and stability on various surfaces.",
    About: '*Versatile colorway that easily complements any athletic or casual outfit.',
    Addition: '  AdditionalInformation',
    AdditionalInformation: [{ Head: 'Manufacturer:', par: ' NIKE INDIA PVT LTD, NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },
    { Head: 'Packer :', par: 'NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },

    { Head: 'Importer:', par: ' NIKE INDIA PVT LTD,GROUND & 1ST FLOOR OLYMPIA BUILDING,NO 66/1 BAGMANE TECH PARK,CV RAMAN NAGAR BANGALORE-560093 INDIA' },

    { Head: 'Item Weight:', par: '989 g' },


    { Head: 'LxWxH: ', par: '36 x 24 x 16 Centimeters' },

    { Head: 'Net Quantity:', par: '1 count' },

    { Head: 'Generic Name:', par: 'Shoes' }],
    para: [


      { icon: "/assets/img/secure.png", text: "Secure transaction" },

      { icon: "/assets/img/top.png", text: "Top Brand " },
    ],

    relatedProducts: [
    25,26,27,28
]
 
 


    
  },
    {
    id: 31,
    category: "Smart Watches",
    brand:'Fire-Boltt ',
    title: "Fire-Boltt Ring X Smartwatch 2.01” Display with Always On Display, Bluetooth Calling, Wireless Charging, AI Voice Assistant, 100+ Sports Modes, Health Suite, 500+ Watchfaces (Blue S)",
    price: '4,500',

    Reduceprice: '9000',
    mainImage: "/assets/img/smart2.jpg",
    thumbnails: [
      
      "/assets/img/smart2.jpg",
      "/assets/img/smart12.jpg",
      "/assets/img/smart13.jpg",
      "/assets/img/smart14.jpg",
      "/assets/img/smart15.jpg",
      


    ],
   
    new: "Color", newtype: 'Blue S ',
    Color: " Memory Storage Capacity", Colortype: "	128 MB",
    Style: "brand", Styletype: "Fire-Boltt",
    Length: "Style Name", Lengthtype: "Modern",
    NoOfPockets: "Battery Capacity	", NoOfPocketstype: "	125 Milliamp Hours",
    Fit: "Connectivity Technology", Fittype: "Bluetooth",
    Material: "Performance/Activity", Materialtype: "Cross Training, Running & Jogging",
    Care: "Operating System", Caretype: "android,ios",
    Origin: "Country of Origin", Origintype: "India",

    Description: "* 2.01” IPS Full Touch Display - Enjoy a stunning 2.5D curved screen with a resolution of 240x296 pixels, offering vibrant colors and smooth multi-touch navigation for an immersive smartwatch experience",
    Fabric: "* Smart Bluetooth Calling with AI Voice Assistant - Make and receive calls directly from your wrist with advanced BT 3.0+5.1 connectivity. Use the integrated AI voice assistant to manage tasks hands-free",
    CareInstructions: "Wireless Charging & 7-Day Battery Life - Recharge effortlessly with wireless charging and enjoy up to 5-7 days of usage powered by a 200mAh lithium-ion battery",
    About: '*Always-On Display (AOD) - Stay updated at a glance with the Always-On Display feature that shows time and key metrics continuously, ensuring convenience without needing to wake the screen. Perfect for on-the-go access..',
    specification:'Puzzle Games, Photo Watchfaces & More - Download mini-games, personalize your watch with 500+ cloud-based and photo watchfaces, and access utilities like calculator, alarm, flashlight, weather, stopwatch, and timer',
    Addition: '  Additional Information',
    AdditionalInformation: [{ Head: 'ASIN:', par: ' B0F2YXL5XQ' },
    { Head: 'Date First Available:', par: '	14 May 2025' },

    { Head: 'Packer:', par: ' 	Boltt Games Pvt Ltd' },

    { Head: 'Importer:', par: 'Boltt Games Pvt Ltd' },


    { Head: 'LxWxH: ', par: '10.3 x 8.6 x 6.6 cm; 46 g' },

    { Head: 'Net Quantity:', par: '1 piece' },

    { Head: 'Generic Name:', par: '	Smartwatch' }],
  para: [
      { icon: "/assets/img/waranty.png", text: "1 Year Warranty" },
      { icon: "/assets/img/replace.png", text: "7 Days Replacement" },
      { icon: "/assets/img/cash.png", text: "Cash/Pay on Delivery " },
      { icon: "/assets/img/top.png", text: "Top Brand " },
      { icon: "/assets/img/istall.png", text: "Installation Available " }
    ],

    relatedProducts: [
   12,18
]
 
 


    
  },

];

function CombinedProductPage() {
 
  


  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id));
  const navigate = useNavigate();

  // Local state for size and quantity
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

 const relatedProductObjects = product.relatedProducts
  .map(id => Products.find(p => p.id === id))
  .filter(Boolean);



  const handleAddToCart = () => {
    const hasSizes = Array.isArray(product.sizes) && product.sizes.length > 0;

    if (hasSizes && !selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    // Normally update your cart here...
    navigate('/cart');
  };


 return (
  <div>
    <Header />
    <Breadcrumbs product={product} />

      <section id="prodetails" className="section-p1 ">
        {/* Image Gallery */}
        <ImageGallery mainImage={product.mainImage} thumbnails={product.thumbnails} />

        {/* Product Details */}
        <div className="single-pro-details ">
          <h6 >Home / {product.category}</h6>
          <p className='store'><b>Visit the {product.brand} Store</b></p>
          <h4 >{product.title}</h4>
         
 {product.Reduceprice && parseFloat(product.Reduceprice.replace(/,/g, '')) > parseFloat(product.price.replace(/,/g, '')) ? (
  <>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <p className="red" style={{ color: "red", fontSize: "20px" }}>
        -({Math.round(
          ((parseFloat(product.Reduceprice.replace(/,/g, '')) - parseFloat(product.price.replace(/,/g, '')))
            / parseFloat(product.Reduceprice.replace(/,/g, ''))) * 100
        )}% off)
      </p>
      <h2>₹{product.price}</h2>
    </div>

    <h2 style={{ color: "rgb(74, 74, 74)", fontSize: "15px" }}>
      M.R.P: &nbsp;<del>₹{product.Reduceprice}</del>
    </h2>
  </>
) : (
  <h2>₹{product.price}</h2>
)}



          {Array.isArray(product.sizes) && product.sizes.length > 0 && (
          <select
            id="size-select"
            value={selectedSize}
            onChange={e => setSelectedSize(e.target.value)}
            className="mb-4 w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Size</option>
            {product.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        )}



        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          className="mb-6 w-full border border-gray-300 rounded p-2"
        />

          <button
            className="normal"
            onClick={handleAddToCart}
          >
          Add to Cart
        </button>



        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          navigation

          loop={true}
          breakpoints={{
            375: { slidesPerView: 3, centeredSlides: true },
            768: { slidesPerView: 3, centeredSlides: false },
            1024: { slidesPerView: 4, centeredSlides: false },
          }}
        >
            {product.para?.map((item, index) => (
              <SwiperSlide key={index} >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img 
                  src={item.icon} 
                    alt="feature"
                 className='sli'
                />
                <span className='sli2'>{item.text}</span>
              </div>
            </SwiperSlide>

          ))}

        </Swiper>
  

          <div  > 
          <h4>Product details:</h4><br />
           
            <div style={{ display: "flex", lineHeight: "30px", }}>
              
              <div className='padd'>
                <b>{product.new}</b><br />
                <b>{product.Color}</b><br />
                <b>{product.Style}</b><br />
                <b>{product.Length}</b><br />
                <b>{product.NoOfPockets}</b><br />
                <b>{product.Fit}</b><br />
                <b>{product.Material}</b><br />
                <b>{product.Care}</b><br />
                <b>{product.Origin}</b><br />


      </div>
              <div style={{ fontWeight: '40px' }} className='padd'>
                {product.newtype}<br />
                {product.Colortype}<br />
                {product.Styletype}<br />
                {product.Lengthtype}<br />
                {product.NoOfPocketstype}<br />
                {product.Fittype}<br />
                {product.Materialtype}<br />
                {product.Caretype}<br />
                {product.Origintype}<br />



              </div>
            </div>


          </div>
          <h4 >About this item:</h4>
          <p style={{ color: 'black' }} >
            {product.Description}<br />
            {product.Fabric}<br />
            {product.CareInstructions}<br />
            {product.About}<br />
            {product.specification}<br />
            


          </p>






        </div>
        

    </section>
      <div style={{paddingLeft:'30px',}}  className='center'>
              <br /><br />
              <b style={{ fontSize: '20px' }}>{product.Addition}</b><br /><br />
              {product.AdditionalInformation?.map((item, index) => (
        <div
          key={index}
          style={{
                    display: 'flex',
                    alignItems: 'center', // vertical alignment
                    lineHeight: '30px',
                    marginBottom: '5px',
                    
          }}
        >
                  <div  className='man'>
            {item.Head}
          </div>
                  <div style={{flex:"1"}}>{item.par}</div>
        </div>
      ))}
    </div>
            <br/><br/><br/>

    <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h2 className='featured-products'  >Products related to this item </h2>
    </div>

      <section id="product1" className="section-p1 ">
       {relatedProductObjects.map(prod => (
    
        <motion.div
          key={prod.id}
            onClick={() => navigate(prod.link)}
          initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
          animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, delay: prod.id * 0.1 }}
            className="pro w-[250px] cursor-pointer "
        >
          <img 
              src={prod.image}
              alt={prod.title}
            height="290" 
              className="rounded-md "
          />
          <div className="des">
              {prod.brand && <span className='i'>{prod.brand}</span>}
              <h5 >{prod.title}</h5>
            <div className="star">★★★★★</div>
                                                <div  className='pric'   >
                                 
                                 
                       <h4 className='price'>₹{prod.price}</h4>
                     
              {prod.Reduceprice && prod.Reduceprice > prod.price && (
                <>
                           <h4 className='mrp'>M.R.P:</h4>
                           <h4 className='mrp'>
                    <del>₹{prod.Reduceprice}</del>
                  </h4>
                            <h4 className='red' >
                    ({Math.round(((prod.Reduceprice - prod.price) / prod.Reduceprice) * 100)}% off)
                  </h4>
                           
                           
                </>
                       
              )}
                    
            </div>
                    
                     
                     

            {(prod.save || prod.coupon) && (
  <div style={{ 
    display: 'flex', 
    gap: '8px', 
    alignItems: 'center', 
    paddingBottom: '10px', 
    marginTop: '5px', 
    flexWrap: 'wrap' 
  }}>
    {prod.save && (
      <div className='save'
       
      >
        {prod.save}
              </div>
            )}
    {prod.coupon && (
      <div className='coupon'>
        {prod.coupon}
      </div>
    )}
  </div>
)}
               <Link to={"/cart"} onClick={(e) => e.stopPropagation()}>
              Add to cart
            </Link>
              
          </div>
        </motion.div>
      ))}
    </section>

    <Footer />
  </div>
);

}

export default CombinedProductPage;

