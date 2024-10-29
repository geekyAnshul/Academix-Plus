const productData = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0023/9278/4940/products/9788182525313-1_8226198b-0d91-4262-8663-75c037ea04b7_1200x.jpg?v=1605758982",
      name: "Kids Learning",
      price: 299,
      desc: "A fun and engaging book to help kids learn basic concepts.",
      category: "Primary Classes",
      liked: 120
    },
    {
      id: 2,
      img: "https://pictures.abebooks.com/isbn/9780375836596-us-300.jpg",
      name: "Coloring Set",
      price: 199,
      desc: "A complete coloring set with crayons and coloring sheets.",
      category: "Primary Classes",
      liked: 85
    },
    {
      id: 3,
      img: "https://images-na.ssl-images-amazon.com/images/I/51IP805LiXL.jpg",
      name: "Puzzle Game",
      price: 499,
      desc: "An exciting puzzle game to enhance critical thinking skills.",
      category: "Primary Classes",
      liked: 75
    },
    {
      id: 4,
      img: "https://th.bing.com/th/id/OIP.XVyxmyS4jvmZuXpluVHNzgAAAA?rs=1&pid=ImgDetMain",
      name: "Storybooks",
      price: 399,
      desc: "A collection of delightful stories for young readers.",
      category: "Primary Classes",
      liked: 150
    },
    {
      id: 5,
      img: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/a6e5f398-8351-4b27-be75-cc3f9e111f60.jpg._CB298444941_.jpg",
      name: "Art Kit",
      price: 599,
      desc: "A kit full of art supplies for creative young minds.",
      category: "Primary Classes",
      liked: 60
    },
    {
      id: 6,
      img: "https://simplyfullofdelight.com/wp-content/uploads/2022/10/free-printable-alphabet-flash-cards-1.jpg",
      name: "Flash Cards",
      price: 249,
      desc: "Educational flash cards to help kids with learning.",
      category: "Primary Classes",
      liked: 95
    },
    {
      id: 7,
      img: "https://th.bing.com/th/id/OIP._tulHJrAInyCjYOA_5k4XQHaJ1?rs=1&pid=ImgDetMain",
      name: "Math Workbook",
      price: 299,
      desc: "An engaging workbook filled with fun math exercises.",
      category: "Primary Classes",
      liked: 80
    },
    {
      id: 8,
      img: "https://static.nsta.org/images/products/PB186X3.jpg",
      name: "Science Kit",
      price: 799,
      desc: "A hands-on kit for young scientists to explore experiments.",
      category: "Primary Classes",
      liked: 110
    },
    {
        id: 11,
        img: "https://images-na.ssl-images-amazon.com/images/I/51c2t1gf+TL._SX258_BO1,204,203,200_.jpg",
        name: "Science book",
        price: 350,
        desc: "A comprehensive workbook for ICSE 10th Science students.",
        category: "ICSE 10th & 12th",
        liked: 200
      },
      {
        id: 12,
        img: "https://th.bing.com/th/id/OIP.CKdROG0BK5DUUzwqhWBKCwHaKl?w=1050&h=1500&rs=1&pid=ImgDetMain",
        name: "Maths Guide",
        price: 450,
        desc: "An essential guide for mastering ICSE 12th Mathematics.",
        category: "ICSE 10th & 12th",
        liked: 180
      },
      {
        id: 13,
        img: "https://th.bing.com/th/id/OIP.FwFLUiPVF844gLFqXFwTiQHaJr?w=519&h=678&rs=1&pid=ImgDetMain",
        name: "English Literature",
        price: 300,
        desc: "A detailed book covering ICSE 10th English Literature.",
        category: "ICSE 10th & 12th",
        liked: 150
      },
      {
        id: 14,
        img: "https://www.vivadigital.in/vupload/books/book_160419153702_87.jpg",
        name: "Physics Notes",
        price: 400,
        desc: "Concise revision notes for ICSE 12th Physics.",
        category: "ICSE 10th & 12th",
        liked: 170
      },
      {
        id: 15,
        img: "https://3.bp.blogspot.com/-heFnX1ro9H4/WiPJCr2Bu2I/AAAAAAAADIw/5EyjP5UWaGcZ98Rhm55GczKdumbQtNUGgCLcBGAs/s1600/20171203_151851_1.jpg",
        name: "Geo Atlas",
        price: 275,
        desc: "An atlas designed specifically for ICSE 10th Geography.",
        category: "ICSE 10th & 12th",
        liked: 130
      },
      {
        id: 16,
        img: "https://th.bing.com/th/id/OIP.YvfVWX8gshumsRtj-QbDogAAAA?w=393&h=500&rs=1&pid=ImgDetMain",
        name: "Practice Set",
        price: 500,
        desc: "Practice set with problems and solutions for ICSE 12th Chemistry.",
        category: "ICSE 10th & 12th",
        liked: 160
      },
      {
        id: 17,
        img: "https://th.bing.com/th/id/OIP.m5pdlG_Gxk0HVgsqiowlQgHaHa?rs=1&pid=ImgDetMain",
        name: "History Textbook",
        price: 320,
        desc: "A textbook covering all key topics in ICSE 10th History.",
        category: "ICSE 10th & 12th",
        liked: 140
      },
      {
        id: 18,
        img: "https://th.bing.com/th/id/OIP.F7u2fklPPVN1lCTz_-_YGgAAAA?rs=1&pid=ImgDetMain",
        name: "Computer Science Book",
        price: 550,
        desc: "A detailed book on Computer Science for ICSE 12th.",
        category: "ICSE 10th & 12th",
        liked: 190
      },
      {
        id: 19,
        img: "https://th.bing.com/th/id/OIP.XkkDSdMrju06mCqd_SoFIAHaLH?rs=1&pid=ImgDetMain",
        name: "Revision Kit",
        price: 280,
        desc: "A complete revision kit for ICSE 10th board exams.",
        category: "ICSE 10th & 12th",
        liked: 120
      },
      {
        id: 20,
        img: "https://th.bing.com/th/id/OIP.ugeInpWZfm41Vp8AEQxDeAHaJj?w=794&h=1024&rs=1&pid=ImgDetMain",
        name: "English Guide",
        price: 360,
        desc: "An essential guide for ICSE 12th English Language preparation.",
        category: "ICSE 10th & 12th",
        liked: 200
      },
      {
        id: 21,
        img: "https://rukminim1.flixcart.com/image/832/832/l47cu4w0/regionalbooks/e/a/n/aspire-for-jee-physics-wallah-full-course-main-and-advance-study-original-imagf5gc9jypjhzg.jpeg?q=70",
        name: "Physics HandBook",
        price: 550,
        desc: "Comprehensive guide for JEE Mains Physics preparation.",
        category: "JEE Mains/Advance",
        liked: 250
      },
      {
        id: 22,
        img: "https://www.prabhatbooks.com/upload/1656674941.jpg",
        name: "Chemistry Practice",
        price: 650,
        desc: "A detailed practice set for JEE Advanced Chemistry.",
        category: "JEE Mains/Advance",
        liked: 220
      },
      {
        id: 23,
        img: "https://cdn01.sapnaonline.com/product_media/9789355014009/md_9789355014009_160820221059945.jpg",
        name: "Maths Formula book",
        price: 480,
        desc: "An engaging workbook for JEE Mains Mathematics.",
        category: "JEE Mains/Advance",
        liked: 210
      },
      {
        id: 24,
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjllFSvL9zo4E43J4Z49OC5kw-BBw07ZcGljRtCCP1ceGiJOFmnyo-YfRKEY0uzgaVduL7uhlko4Ac10-Dk7k1a0pJ81L8qmPYqLxOW-jUnp1Ma-mBN7TBKcvP8_KDH-6dXo4rfx-AkSLZJFN6AKPZYxIlX2n8oTFazcQ-XYsQCSTcHctOB7iSmH_hD/w1600/physics-front.jpg",
        name: "Physics Problems Set",
        price: 700,
        desc: "Challenging problems for JEE Advanced Physics.",
        category: "JEE Mains/Advance",
        liked: 180
      },
      {
        id: 25,
        img: "https://m.media-amazon.com/images/I/51YfBJaR8CL.jpg",
        name: "Chemistry Quick Notes",
        price: 350,
        desc: "Quick revision Chemistry.",
        category: "JEE Mains/Advance",
        liked: 195
      },
      {
        id: 26,
        img: "https://th.bing.com/th/id/OIP.tPCMunS64C2HY2RLUKax1AAAAA?rs=1&pid=ImgDetMain",
        name: "Maths Book",
        price: 850,
        desc: "In-depth book for mastering JEE Advanced Mathematics.",
        category: "JEE Mains/Advance",
        liked: 175
      },
      {
        id: 27,
        img: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/9839698c-f7de-45d8-a5bd-9b44bb412d03.png",
        name: "Physics Handbook",
        price: 300,
        desc: "A compact formula handbook for JEE Mains Physics.",
        category: "JEE Mains/Advance",
        liked: 190
      },
      {
        id: 28,
        img: "https://freedownloads.dishapublication.com/wp-content/uploads/2020/01/51oxXAc68YL._SX318_BO1204203200_.jpg",
        name: "Organic Chemistry Guide",
        price: 600,
        desc: "Comprehensive guide to Organic Chemistry for JEE Advanced.",
        category: "JEE Mains/Advance",
        liked: 160
      },
      {
        id: 29,
        img: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/039d990d-9ace-436e-9d46-17339e5f1a72.png",
        name: "Previous Year Papers",
        price: 450,
        desc: "A collection of previous year question papers for JEE Mains.",
        category: "JEE Mains/Advance",
        liked: 230
      },
      {
        id: 30,
        img: "https://th.bing.com/th/id/OIP.NnAy3sYJlK_Q0FAEpUAVIwHaE8?rs=1&pid=ImgDetMain",
        name: "Problem Solving Book",
        price: 900,
        desc: "Advanced problem-solving techniques for JEE Advanced.",
        category: "JEE Mains/Advance",
        liked: 175
      },
      {
        id: 31,
        img: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/f/m/j/educart-neet-one-shot-biology-chapter-wise-book-on-new-ncert-original-imagunp7gwhquyga.jpeg?q=70",
        name: "NEET Biology Master Guide",
        price: 500,
        desc: "Comprehensive guide covering all NEET Biology topics.",
        category: "NEET",
        liked: 220
      },
      {
        id: 32,
        img: "https://th.bing.com/th/id/OIP.52HT_VhXgWZHx5CNOr9lYwHaJf?rs=1&pid=ImgDetMain",
        name: "NEET Physics Problem Solving Book",
        price: 650,
        desc: "A book with advanced problem-solving techniques for NEET Physics.",
        category: "NEET",
        liked: 200
      },{
        id: 33,
        img: "https://rukminim1.flixcart.com/image/832/832/kiow6fk0-0/book/g/k/0/master-the-ncert-for-neet-chemistry-2020-original-imafyf3xfcvsb85y.jpeg?q=70",
        name: "NEET Chemistry Quick Revision Notes",
        price: 400,
        desc: "Quick revision notes for NEET Chemistry preparation.",
        category: "NEET",
        liked: 180
      },
      {
        id: 34,
        img: "https://th.bing.com/th/id/OIP.g73NIM2a9PyRSoehs7KP4AHaKe?rs=1&pid=ImgDetMain",
        name: "NEET Previous Year Papers",
        price: 350,
        desc: "A collection of NEET previous year question papers.",
        category: "NEET",
        liked: 240
      },
      {
        id: 35,
        img: "https://th.bing.com/th/id/OIP.1ROOkLJSJR2km3gqdv1b4gAAAA?w=390&h=500&rs=1&pid=ImgDetMain",
        name: "NEET Physics Formula Handbook",
        price: 300,
        desc: "A concise formula handbook for NEET Physics.",
        category: "NEET",
        liked: 190
      },
      {
        id: 36,
        img: "https://i5.walmartimages.com/asr/cb17713c-1dd3-4a78-8a99-175d29b4a51b_1.5b93cc602a698c1e8b4584cd310ddaae.jpeg",
        name: "Python Programming",
        price: 600,
        desc: "A beginner's guide to learning Python programming.",
        category: "Skill Development",
        liked: 300
      },
      {
        id: 37,
        img: "https://www.porchlightbooks.com/globalassets/book-covers/9781484243947.jpg?w=1000&scale=both&mode=crop&u=637215546754370000",
        name: "JavaScript Mastery",
        price: 750,
        desc: "Master advanced concepts of JavaScript for web development.",
        category: "Skill Development",
        liked: 280
      },
      {
        id: 38,
        img: "https://m.media-amazon.com/images/I/61ySRbwmiAL._SL1500_.jpg",
        name: "Video Editing",
        price: 850,
        desc: "Learn professional video editing using Adobe Premiere Pro.",
        category: "Skill Development",
        liked: 320
      },
      {
        id: 39,
        img: "https://i5.walmartimages.com/asr/d802f596-9ed1-485c-a73e-eee9e674e208.bcf34593f017dff2b2dfa496599d9315.jpeg",
        name: "MERN Stack",
        price: 1500,
        desc: "Comprehensive bootcamp to become a full-stack web developer.",
        category: "Skill Development",
        liked: 400
      },
      {
        id: 40,
        img: "https://www.creativeboom.com/uploads/articles/a8/a817cb6d64c1a6f6d110d3e696da2581e1d607ef_1100.jpg",
        name: "Graphic Design",
        price: 700,
        desc: "Learn the basics of graphic design using Adobe Photoshop.",
        category: "Skill Development",
        liked: 250
      },
      {
        id: 41,
        img: "https://m.media-amazon.com/images/I/71qRpQtsyfL._SL1500_.jpg",
        name: "C++ Essentials",
        price: 500,
        desc: "Understand the fundamentals of C++ programming.",
        category: "Skill Development",
        liked: 210
      },
      {
        id: 42,
        img: "https://www.netguru.com/hs-fs/hubfs/image5-13.png?width=600&name=image5-13.png",
        name: "App Development",
        price: 1200,
        desc: "Learn how to build mobile apps using React Native.",
        category: "Skill Development",
        liked: 270
      },
      {
        id: 43,
        img: "https://pbs.twimg.com/media/F8xztGAbMAAiQRn.jpg:large",
        name: "DSA in Python",
        price: 950,
        desc: "Master data structures and algorithms with Python.",
        category: "Skill Development",
        liked: 260
      },
      {
        id: 44,
        img: "https://th.bing.com/th/id/OIP.AmId2geVuw8VFah8KHro5AHaL5?rs=1&pid=ImgDetMain",
        name: "Intro to Cyber",
        price: 800,
        desc: "An introductory course on cybersecurity fundamentals.",
        category: "Skill Development",
        liked: 290
      },
      {
        id: 45,
        img: "https://www.softwaretestinghelp.com/wp-content/qa/uploads/2020/03/51kwenzcqIL.jpg",
        name: "Digital Marketing",
        price: 650,
        desc: "Learn how to run successful digital marketing campaigns using Google Ads.",
        category: "Skill Development",
        liked: 220
      },
      {
        id: 46,
        img: "https://th.bing.com/th/id/OIP.Ytjqgh1gTnejSSzcaN6uwwHaJ2?rs=1&pid=ImgDetMain",
        name: "SQL DBMS",
        price: 400,
        desc: "Learn SQL for managing and querying databases.",
        category: "Skill Development",
        liked: 230
      },
      {
        id: 47,
        img: "https://m.media-amazon.com/images/I/41MDiEYVNEL.jpg",
        name: "UI/UX Principles",
        price: 900,
        desc: "Master the principles of UI/UX design for web and mobile applications.",
        category: "Skill Development",
        liked: 310
      },
      {
        id: 48,
        img: "https://www.computercareers.org/wp-content/uploads/The-Video-Editing-Handbook-For-Beginners-1024x1024.jpg",
        name: "Video Editing",
        price: 950,
        desc: "Learn advanced video editing techniques with Final Cut Pro.",
        category: "Skill Development",
        liked: 240
      },
      {
        id: 49,
        img: "https://1.bp.blogspot.com/-_gie8qAwZPY/X0HgTfDEoMI/AAAAAAAAIjk/KsZvNYbtGHU6Dq9wi7koZ-QYfSLa8MgYwCLcBGAsYHQ/s1600/touchmaster_1598152338675.jpeg",
        name: "ML with Python",
        price: 1600,
        desc: "Comprehensive course on machine learning using Python.",
        category: "Skill Development",
        liked: 350
      },
      {
        id: 50,
        img: "https://th.bing.com/th/id/OIP.sJjdg_86tiOFLPn6J_BsigAAAA?rs=1&pid=ImgDetMain",
        name: "AWS Guide",
        price: 1800,
        desc: "Master cloud computing services using Amazon Web Services (AWS).",
        category: "Skill Development",
        liked: 380
      },
      {
        id: 51,
        img: "https://n2.sdlcdn.com/imgs/g/o/s/Upsc-General-Studies-Paper-Ii-SDL399751473-1-c151f.jpg",
        name: "UPSC Civil Services",
        price: 1500,
        desc: "Prepare for the prestigious UPSC Civil Services Examination (IAS, IPS, IFS).",
        category: "Government Exams",
        liked: 1200
      },
      {
        id: 52,
        img: "https://img.etimg.com/photo/msid-99552044/ultimate-guide-to-ssc-cgl.jpg",
        name: "SSC CGL Exam",
        price: 1200,
        desc: "Crack the SSC Combined Graduate Level (CGL) exam and secure a government job.",
        category: "Government Exams",
        liked: 980
      },
      {
        id: 53,
        img: "https://images-na.ssl-images-amazon.com/images/I/91t69lx0SbL.jpg",
        name: "IBPS PO Exam",
        price: 1000,
        desc: "Prepare for the IBPS Probationary Officer exam to get a bank officer position.",
        category: "Government Exams",
        liked: 890
      },
      {
        id: 54,
        img: "https://th.bing.com/th/id/OIP.4LUKZdLrkQK6EJUDYA-BXgHaJp?rs=1&pid=ImgDetMain",
        name: "RRB NTPC Exam",
        price: 900,
        desc: "Crack the Railway Recruitment Board NTPC exam for government jobs in railways.",
        category: "Government Exams",
        liked: 760
      },
      {
        id: 55,
        img: "https://images-na.ssl-images-amazon.com/images/I/61I3vcqE6VL.jpg",
        name: "State PCS Exam",
        price: 1300,
        desc: "Get ready for State Public Service Commission exams (like UPPSC, MPPSC).",
        category: "Government Exams",
        liked: 1020
      },
      {
        id: 56,
        img: "https://www.indiancombat.com/wp-content/uploads/2020/06/nda-exam-book.jpg",
        name: "NDA & CDS",
        price: 1100,
        desc: "Prepare for defence services through exams like NDA, CDS, AFCAT.",
        category: "Government Exams",
        liked: 850
      },
      {
        id: 57,
        img: "https://th.bing.com/th/id/OIP.ix3LBo7A1YG3iJVrrHTazgAAAA?rs=1&pid=ImgDetMain",
        name: "IBPS Clerk Exam",
        price: 950,
        desc: "Get ready for the IBPS Clerk exam to secure a clerical position in banks.",
        category: "Government Exams",
        liked: 820
      },
      {
        id: 58,
        img: "https://www.notesindia.in/public/product-images/6274/lic-english.jpg",
        name: "LIC AAO Exam",
        price: 1000,
        desc: "Prepare for the LIC Assistant Administrative Officer (AAO) exam.",
        category: "Government Exams",
        liked: 670
      },
      {
        id: 59,
        img: "https://th.bing.com/th/id/OIP.Yq1mhHPGEQ4gqOay8S5qKwAAAA?rs=1&pid=ImgDetMain",
        name: "CAPF AC Exam",
        price: 1050,
        desc: "Prepare for Central Armed Police Forces (CAPF) Assistant Commandant exam.",
        category: "Government Exams",
        liked: 740
      },
      {
        id: 60,
        img: "https://images-na.ssl-images-amazon.com/images/I/71PPLdU4Y5L.jpg",
        name: "RBI Grade B Exam",
        price: 1400,
        desc: "Prepare for the Reserve Bank of India Grade B Officer exam.",
        category: "Government Exams",
        liked: 950
      }, {
        id: 61,
        img: "https://cdn11.bigcommerce.com/s-gibnfyxosi/images/stencil/2560w/products/114990/116752/51IXWZzlgSL__41945.1615559130.jpg?c=1",
        name: "To Kill a Mockingbird",
        price: 500,
        desc: "A timeless novel by Harper Lee about racial injustice in the American South.",
        category: "Novel & Biography",
        liked: 1500
      },
      {
        id: 62,
        img: "https://cdn.kobo.com/book-images/c9472126-7f96-402d-ba57-5ba4c0f4b238/1200/1200/False/nineteen-eighty-four-1984-george.jpg",
        name: "1984",
        price: 450,
        desc: "George Orwell's dystopian classic about a totalitarian regime and surveillance.",
        category: "Novel & Biography",
        liked: 2000
      },
      {
        id: 63,
        img: "https://cdn01.sapnaonline.com/product_media/9789388369169/md_9789388369169.jpg",
        name: "The Diary of a Young Girl",
        price: 400,
        desc: "The heart-wrenching diary of Anne Frank during the Holocaust.",
        category: "Novel & Biography",
        liked: 1800
      },
      {
        id: 64,
        img: "https://th.bing.com/th/id/OIP.zSiwqtCwg3S9tXPJrSXbqAHaLO?w=516&h=782&rs=1&pid=ImgDetMain",
        name: "Long Walk to Freedom",
        price: 600,
        desc: "Nelson Mandela's inspiring autobiography, chronicling his fight against apartheid.",
        category:"Novel & Biography",
        liked: 1700
      },
      {
        id: 65,
        img: "https://th.bing.com/th/id/OIP.wcZjPkH4FZD5QYi_2kfxxAHaLS?rs=1&pid=ImgDetMain ",
        name: "Pride and Prejudice",
        price: 550,
        desc: "Jane Austen's beloved novel about love, society, and class in 19th-century England.",
        category: "Novel & Biography",
        liked: 2100
      }
    
  ];

  export default productData;
  