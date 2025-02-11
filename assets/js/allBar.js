const categories = [
  {
    name: "All",
    subcategories: [
      {
        name: "Phone",
        items: [
          { name: "More in sell" },
          { name: "Top Brands" },
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "OnePlus", link: "#" },
          { name: "Google Pixel", link: "#" },
          { name: "Nokia", link: "#" },
          { name: "Poco", link: "#" }
        ]
      },
      {
        name: "Laptop",
        items: [
          { name: "More in sell" },
          { name: "Top Brands" },
          { name: "MacBook", link: "#" },
          { name: "Dell", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Lenovo", link: "#" },
          { name: "Honor", link: "#" },
          { name: "Acer", link: "#" }
        ]
      },
      {
        name: "Smartwatch",
        items: [
          { name: "More in sell" },
          { name: "Top Brands" },
          { name: "Apple", link: "#" },
          { name: "OnePlus", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "More Smartwatch Brands", link: "#" }
        ]
      },
      {
        name: "Tablet",
        items: [
          { name: "More in sell" },
          { name: "Top Brands" },
          { name: "Apple", link: "#" },
          { name: "Honor", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Lenovo", link: "#" },
          { name: "More Tablet Brands", link: "#" }
        ]
      },
      {
        name: "More",
        items: [
          { name: "More in sell" },
          { name: "Top Brands" },
          { name: "Smart Speaker", link: "#" },
          { name: "TV", link: "#" },
          { name: "DSLR Camera", link: "#" },
          { name: "Earbuds", link: "#" },
          { name: "Gaming Consoles", link: "#" },
          { name: "Ac", link: "#" }
        ]
      },
      {
        name: "Repair",
        items: [
          { name: "More in Repair" },
          { name: "Top Brands" },
          { name: "Screen", link: "#" },
          { name: "Battery", link: "#" },
          { name: "Mic", link: "#" },
          { name: "Back Panel", link: "#" },
          { name: "Charging Jack", link: "#" },
          { name: "Aux Jack", link: "#" }
        ]
      },
      {
        name: "Sell Gadgets",
        items: [
          { name: "More in sell" },
          { name: "Top Brands" },
          { name: "Smart Speaker", link: "#" },
          { name: "Phone", link: "#" },
          { name: "Laptop", link: "#" },
          { name: "TV", link: "#" },
          { name: "Tablet", link: "#" },
          { name: "Smartwatch", link: "#" },
          { name: "DSLR Camera", link: "#" },
          { name: "Earbuds", link: "#" },
          { name: "Gaming Consoles", link: "#" },
          { name: "Ac", link: "#" }
        ]
      },
      {
        name: "Buy Phone",
        items: [
          { name: "More in buy" },
          { name: "Refurbished Phones", link: "#" },
          { name: "Top Brands" },
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "OnePlus", link: "#" },
          { name: "Google Pixel", link: "#" },
          { name: "Nokia", link: "#" },
          { name: "Vivo", link: "#" },
          { name: "Oppo", link: "#" },
          { name: "Poco", link: "#" },
          { name: "All Brands", link: "#" }
        ]
      },
      {
        name: "Recycle",
        items: [
          { name: "More in recycle" },
          { name: "Top Brands" },
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "OnePlus", link: "#" },
          { name: "Google Pixel", link: "#" },
          { name: "Nokia", link: "#" },
          { name: "Poco", link: "#" }
        ]
      },
      {
        name: "Find New Phone",
        items: [
          { name: "More in find New Phone" },
          { name: "Phone Finder", link: "#" },
          { name: "Compare Phones", link: "#" },
          { name: "Latest Phone", link: "#" },
          { name: "Videos", link: "#" },
          { name: "News", link: "#" },
          { name: "Reviews", link: "#" },
          { name: "Top Brands" },
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "OnePlus", link: "#" },
          { name: "Google Pixel", link: "#" },
          { name: "Nokia", link: "#" },
          { name: "Poco", link: "#" }
        ]
      },
      {
        name: "Cashify Store",
        items: [
          { name: "More in Cashify Store" },
          { name: "Delhi", link: "#" },
          { name: "Mumbai", link: "#" },
          { name: "Bangalore", link: "#" },
          { name: "Hyderabad", link: "#" },
          { name: "Chennai", link: "#" },
          { name: "Kolkata", link: "#" },
          { name: "Pune", link: "#" },
          { name: "Ahmedabad", link: "#" },
          { name: "Jaipur", link: "#" },
          { name: "Lucknow", link: "#" },
          { name: "Chandigarh", link: "#" },
          { name: "Bhopal", link: "#" },
          { name: "Indore", link: "#" },
          { name: "Patna", link: "#" },
          { name: "Bhubaneswar", link: "#" },
          { name: "Guwahati", link: "#" },
          { name: "Thiruvananthapuram", link: "#" },
          { name: "Kochi", link: "#" },
          { name: "Goa", link: "#" }
        ]
      }
    ]
  },
  // 2nd dropdown menu
  {
    name: "Phone",
    items: [
      { name: "More in sell" },
      { name: "Top Brands" },
      { name: "Apple", link: "#" },
      { name: "Samsung", link: "#" },
      { name: "OnePlus", link: "#" },
      { name: "Google Pixel", link: "#" },
      { name: "Nokia", link: "#" },
      { name: "Poco", link: "#" }
    ]
  },
   // 3 dropdown menu
{
  name: "Sell Gadgets",
        items: [
          { name: "More in sell" },
          { name: "Top Brands" },
          { name: "Smart Speaker", link: "#" },
          { name: "Phone", link: "#" },
          { name: "Laptop", link: "#" },
          { name: "TV", link: "#" },
          { name: "Tablet", link: "#" },
          { name: "Smartwatch", link: "#" },
          { name: "DSLR Camera", link: "#" },
          { name: "Earbuds", link: "#" },
          { name: "Gaming Consoles", link: "#" },
          { name: "Ac", link: "#" }
        ]
      },
      
 // 4 dropdown menu
      {
        name: "Buy Phone",
        items: [
          { name: "More in buy" },
          { name: "Refurbished Phones", link: "#" },
          { name: "Top Brands" },
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "OnePlus", link: "#" },
          { name: "Google Pixel", link: "#" },
          { name: "Nokia", link: "#" },
          { name: "Vivo", link: "#" },
          { name: "Oppo", link: "#" },
          { name: "Poco", link: "#" },
          { name: "All Brands", link: "#" }
        ]
      },
//  5 dropdown
      {
        name: "Buy Laptops",
        items: [
          { name: "More in sell" },
          { name: "Top Brands" },
          { name: "MacBook", link: "#" },
          { name: "Dell", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Lenovo", link: "#" },
          { name: "Honor", link: "#" },
          { name: "Acer", link: "#" }
        ]
      },
      //  6 dropdown
      {
        name: "Cashify Store",
        items: [
          { name: "More in Cashify Store" },
          { name: "Delhi", link: "#" },
          { name: "Mumbai", link: "#" },
          { name: "Bangalore", link: "#" },
          { name: "Hyderabad", link: "#" },
          { name: "Chennai", link: "#" },
          { name: "Kolkata", link: "#" },
          { name: "Pune", link: "#" },
          { name: "Ahmedabad", link: "#" },
          { name: "Jaipur", link: "#" },
          { name: "Lucknow", link: "#" },
          { name: "Chandigarh", link: "#" },
          { name: "Bhopal", link: "#" },
          { name: "Indore", link: "#" },
          { name: "Patna", link: "#" },
          { name: "Bhubaneswar", link: "#" },
          { name: "Guwahati", link: "#" },
          { name: "Thiruvananthapuram", link: "#" },
          { name: "Kochi", link: "#" },
          { name: "Goa", link: "#" }
        ]
      }

];


