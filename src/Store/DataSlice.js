import { createSlice, nanoid } from '@reduxjs/toolkit'
import * as allItems from '../assets/FeaturedItems/index.js'

const initialState = {
  home: {
    featuredCategories: [
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Cake-and-milk.png",
        title: "Cake & Milk",
        subtitle: "26 items",
        link: '#',
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Organic-Kiwi.png",
        title: "Organic Kiwi",
        subtitle: "35 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Peach.png",
        title: "Peach",
        subtitle: "20 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Red-Apple.png",
        title: "Red Apple",
        subtitle: "22 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Snack.png",
        title: "Snack",
        subtitle: "30 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Vegetables.png",
        title: "Vegetables",
        subtitle: "46 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Strawberry.png",
        title: "Stawberry",
        subtitle: "16 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Black-plum.png",
        title: "BlackPlum",
        subtitle: "50 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Custard-apple.png",
        title: "Custard Apple",
        subtitle: "12 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Coffe-and-Tea.png",
        title: "Coffe & Tea",
        subtitle: "36 items",
        link: "#",
      },
      {
        id: nanoid(),
        image: "/src/assets/FeaturedItems/Headphone.png",
        title: "Headphones",
        subtitle: "18 items",
        link: "#",
      },
    ],
    products: {
      productBasic: [
        {
          id: nanoid(),
          productName: {
            Name: "Seeds of Change Organic Quinoa, Brown",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$245.8",
            offerPrice: "$238.85",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-1-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-1-2.jpg",
            SideImage: "",
          },
          brand: "armani",
          cardTags: ["Hot", "Sale", "14%"],
          popularityType: ["Popular Products", "Daily Best Sales New Added", "Top Selling", "Top Rated"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "All Natural Italian-Style Chicken Meatballs",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$78",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-2-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-2-2.jpg",
            SideImage: "",
          },
          brand: "armani",
          cardTags: ["New"],
          popularityType: ["Popular Products", "Featured", "Daily Best Sales Popular", "Trending Products"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "Angie's Boomchickapop Sweet & Salty",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$35",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-3-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-3-2.jpg",
            SideImage: "",
          },
          brand: "armani",
          cardTags: ["Hot"],
          popularityType: ["Popular Products", "Daily Best Sales Featured", "Daily Best Sales Popular", "Daily Best Sales New Added", "Recently Added"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "Foster Farms Takeout Crispy Classic",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$55",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-4-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-4-2.jpg",
            SideImage: "",
          },
          brand: "armani",
          cardTags: ["Sale"],
          popularityType: ["Popular Products", "Daily Best Sales Popular", "Trending Products", "Top Rated"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "Green Diamond Almonds Lightly From Oska",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$110",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-5-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-5-2.jpg",
            SideImage: "",
          },
          brand: "NestFood",
          cardTags: [""],
          popularityType: ["Popular Products", "Popular", "Daily Best Sales Popular", "Daily Best Sales New Added", "Top Selling"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "Chobani Complete Vanilla Greek Yogurt",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$150",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-6-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-6-2.jpg",
            SideImage: "",
          },
          brand: "helix",
          cardTags: [""],
          popularityType: ["Popular Products", "Daily Best Sales Featured", "Top Rated"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "Canada Dry Ginger Ale - 2 L Bottle",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$98",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-7-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-7-2.jpg",
            SideImage: "",
          },
          brand: "armani",
          cardTags: ["Hot"],
          popularityType: ["Popular Products", "Daily Best Sales New Added", "Trending Products"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "Encore Seafoods Stuffed Alaskan",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$24",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-8-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-8-2.jpg",
            SideImage: "",
          },
          brand: "armani",
          cardTags: ["Hot"],
          popularityType: ["Popular Products", "Popular", "Daily Best Sales Popular", "Recently Added"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "Gorton's Beer Battered Fish Fillets",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$146",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-9-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-9-2.jpg",
            SideImage: "",
          },
          brand: "armani",
          cardTags: ["Hot"],
          popularityType: ["Popular Products", "Daily Best Sales New Added", "Recently Added"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
        {
          id: nanoid(),
          productName: {
            Name: "Haagen-Dazs Caramel Cone Ice Cream",
            Link: "#",
          },
          rating: 4.5,
          manufacturedBy: "NestFood",
          price: {
            currentPrice: "$67",
            offerPrice: "",
            offerPercent: "",
          },
          images: {
            frontSide: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-10-1.jpg",
            backImage: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-10-2.jpg",
            SideImage: "",
          },
          brand: "armani",
          cardTags: ["Sale"],
          popularityType: ["Popular Products", "New added", "Daily Best Sales Popular", "Top Selling"],
          category: "Category",
          stock: {
            available: 15,
            total: 50,
          },
          time: "3days",
          color: {
            red: {
              frontImage: "",
              BackImage: "",
              SideImage: "",
            },
          },
          sizes: ["S", "M", "L", "XL"],
          smallDescription: "",
        },
      ],
      "Description": {
        firstPara: "Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.",
        miniFeatureList: {
          "Type Of Packing": "Bottle",
          "Color": "Green, Pink, Powder Blue, Purple",
          "Quantity Per Case": "100ml",
          "Ethyl Alcohol": "70%",
          "Piece In One": "Carton"
        },
        lastPara: {
          title: "Packaging & Delivery",
          firstPara: "Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.",
          secondPara: "Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund."
        }
      },
      "Additional Info": {
        "Stand Up": "35″L x 24″W x 37-45″H(front to back wheel)",
        "Folded (w/o wheels)": "32.5″L x 18.5″W x 16.5″H",
        "Folded (w/ wheels)": "32.5″L x 24″W x 18.5″H",
        "Door Pass Through": "24",
        "Frame": "Aluminum",
        "Weight (w/o wheels)": "20 LBS",
        "Weight Capacity": "60 LBS",
        "Width": "24″",
        "Handle height (ground to handle)": "37-45″",
        "Wheels": "12″ air / wide track slick tread",
        "Seat back height": "21.5″",
        "Head room (inside canopy)": "25″",
        "Color": "Black, Blue, Red, White",
        "Size": "M, S"
      },
      "Vendor": {
        title: "Noodles Co.",
        rating: 4.5,
        totalReviews: "32 reviews",
        address_Contact: {
          "Address": "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
          "Contact Seller": "(+91) - 540-025-553"
        },
        percentageSection: {
          "Rating": "92%",
          "Ship on time": "100%",
          "Chat response": "89%"
        },
        vendorMiniDescription: "Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C."
      },
      "Reviews": {
        customerQA: {
          title: "Customer questions & answers",
          customers: [
            {
              customerName: "Jacky Chan",
              joinedOn: "Since 2012",
              reviewPara: "Thank you very fast shipping from Poland only 3days.",
              rating: 4.5,
              reviewedOn: "December 4, 2020 at 3:12 pm",
              image: " ",
            },
            {
              customerName: "Ana Rosie",
              joinedOn: "Since 2008",
              reviewPara: "Great low price and works well.",
              rating: 4.5,
              reviewedOn: "December 4, 2020 at 3:12 pm",
              image: "",
            },
            {
              customerName: "Steven Keny",
              joinedOn: "Since 2010",
              reviewPara: "Authentic and Beautiful, Love these way more than ever expected They are Great earphones",
              rating: 4.5,
              reviewedOn: "December 4, 2020 at 3:12 pm",
              image: " "
            }
          ]
        },
        customerReviews: {
          average: 4.8,
          outOf: 5,
          starPercent: {
            "5 star": 50,
            "4 star": 25,
            "3 star": 45,
            "2 star": 65,
            "1 star": 85,
          }
        }
      }
    }
  },
  provide: [
    {
      id: nanoid(),
      title: "Best Prices & Offers",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-1.svg",
      subtitle: "Orders $50 or more",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      id: nanoid(),
      title: "Wide Assortment",
      subtitle: "Mega Discounts",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-2.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      id: nanoid(),
      title: "Free Delivery",
      subtitle: "24/7 amazing services",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-3.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      id: nanoid(),
      title: "Easy Returns",
      subtitle: "Within 30 days",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-4.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      id: nanoid(),
      title: "100% Satisfaction",
      subtitle: "",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-5.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      id: nanoid(),
      title: "Great Daily Deal",
      subtitle: "When you sign up",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-6.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
  ]
}

export const dataSlice = createSlice({
  name: "dataStore",
  initialState,
  reducers: {
    sample: (state,action) => {
      state.home =true;
    } 
  }
})

export const {sample} = dataSlice.actions;

export default dataSlice.reducer;