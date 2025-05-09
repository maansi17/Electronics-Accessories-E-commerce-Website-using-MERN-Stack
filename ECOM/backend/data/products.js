const products = [
  {
     name: "PlayStation 5",
     imageUrl:
       "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
     description:
       "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
     price: 499,
     countInStock: 15,
   },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL Speakers Flip 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Speakers Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
  {
    name: "Wired headphones",
    imageUrl:
      "https://m.media-amazon.com/images/I/41wYbyr3LLL.AC_SX679.jpg",
    description:
      "Wired headphones provide immersive audio experiences without the need for charging. They offer convenient connectivity and reliable sound quality for music lovers and professionals alike.",
    price: 60,
    countInStock: 10,
  },
  {
    name: "HP AMD CPU",
    imageUrl:
      "https://m.media-amazon.com/images/I/51gUuM1q74L.jpg",
    description:
      "HP CPUs are reliable computing solutions offering efficient performance for various tasks. With robust hardware and customizable configurations, they provide value for both personal and professional use.",
    price: 650,
    countInStock: 5,
  },
  {
    name: "HP 150 Keyboard",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2021/8/MF/BI/SG/3038212/hp-100-wired-usb-keyboard-500x500.jpg",
    description:
      "HP keyboards feature ergonomic designs and tactile feedback for comfortable typing experiences. Their durable construction ensures long-lasting use in both office and home settings.",
    price: 35,
    countInStock: 15,
  },
  {
    name: "HP Pavillion 15",
    imageUrl:
      "https://m.media-amazon.com/images/I/71QfKo6n2mL.jpg",
    description:
      "The HP Pavilion 15 is a stylish and versatile laptop, blending performance and affordability for everyday computing needs. ",
    price: 700,
    countInStock: 8,
  },
  {
    name: "Dell Laptop Bag",
    imageUrl:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/page/category/carrying-case/dell-gen-snp-carrying-cases-backpacks-pe1520ps-800x620.png?fmt=png-alpha&amp;wid=800&amp;hei=620",
    description:
      "The Dell laptop bag offers durable protection and convenient storage for your device and accessories, ensuring portability and organization on the go.",
    price: 25,
    countInStock: 0,
  },
  {
    name: "Dell Mouse",
    imageUrl:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/peripherals/input-devices/dell/mouse/wm126/dell-mouse-wm126-504x350.jpg?fmt=jpg",
    description:
      "Dell mice are ergonomically designed peripherals, providing precise control and comfort during extended use.The Dell laptop bag offers durable protection and convenient storage for your device and accessories, ensuring portability and organization on the go.",
    price: 35,
    countInStock: 2,
  },
  {
    name: "Dell MousePad",
    imageUrl:
      "https://m.media-amazon.com/images/I/61mm6tbHcGL.jpg",
    description:
      "Dell MousePad offers smooth and precise tracking for enhanced productivity. Its durable design ensures long-lasting usability.",
    price: 15,
    countInStock: 20,
  },
  {
    name: "Power Bank",
    imageUrl:
      "https://t4.ftcdn.net/jpg/02/13/32/91/360_F_213329116_ZmDVbuM75dldZbeyVCiLurdhM9OHdZm2.jpg",
    description:
      "Portable charging solutions known for their high capacity and fast charging capabilities, ensuring your devices stay powered on the go.",
    price: 35,
    countInStock: 20,
  },
  
];

module.exports = products;
