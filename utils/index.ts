import avatar1 from '@/public/images/avatar1.png';
import avatar2 from '@/public/images/avatar2.png';
import avatar3 from '@/public/images/avatar3.png';
import avatar4 from '@/public/images/avatar4.png';
import avatar5 from '@/public/images/avatar5.png';


// Bar Chart Data
export const data = [
    {
      name: 'Jan',
      value: 7000,
    },
    {
      name: 'Feb',
      value: 18000,
    },
    {
      name: 'Mar',
      value: 7000,
    },
    {
      name: 'Apr',
      value: 27000,
    },
    {
      name: 'May',
      value: 8000,
    },
    {
      name: 'Jun',
      value: 45000,
    },
    {
      name: 'Jul',
      value: 9000,
    },
    {
      name: 'Aug',
      value: 22000,
    },
    {
      name: 'Sep',
      value: 35000,
    },
    {
      name: 'Oct',
      value: 7000,
    },
    {
      name: 'Nov',
      value: 40000,
    },
    {
      name: 'Dec',
      value: 35000,
    },
  ];

    export const weeklyData = [
        {
          name: 'Mon',
          value: 7000,
        },
        {
          name: 'Tue',
          value: 18000,
        },
        {
          name: 'Wed',
          value: 7000,
        },
        {
          name: 'Thu',
          value: 27000,
        },
        {
          name: 'Fri',
          value: 8000,
        },
        {
          name: 'Sat',
          value: 4000,
        },
        {
          name: 'Sun',
          value: 9000,
        },
    ]
    
    
    export const yearlyData = Array.from({ length: 8 }, (_, index) => ({
        name: `${2020 + index}`,
        value: Math.floor(Math.random() * 5000) + 12000, // Generate random values for demonstration
    }));


//Top PlatForm Data
   export const TopPlatform = [
      {
          name: "Book Bazaar",
          amount: "$ 2,500,000",
          percentage: "+15%",
          color: '#6160DC'
      },
      {
          name: "Artisan Aisle",
          amount: "$ 1.800,000",
          percentage: "+10%",
          color: "#54C5EB"
      },
      {
          name: "Toy Troop",
          amount: "$ 1,300,000",
          percentage: "+8%",
          color: "#FFB74A"
      },
      {
          name: "Fashion Fusion",
          amount: "$ 2,500,000",
          percentage: "+12%",
          color: "#F06292"
      },
      {
          name: "Tech Temple",
          amount: "$ 1,600,000",
          percentage: "+6%",
          color: "#4CAF50"
      },
      {
          name: "Gourmet Grove",
          amount: "$ 2,200,000",
          percentage: "+15%",
          color: "#FF8A65"
      },
      {
          name: "Pet Paradise",
          amount: "$ 900,000",
          percentage: "+5%",
          color: "#AED581"
      }
      
  ]




//Last Orders Data
export const TableData =[
    {
        name: "Marcus Bergson",
        image: avatar1,
        date: "Nov 25, 2021",
        amount: "$ 80,000",
        status: "Paid",
    },
    {
        name: "Jaydon Vaccaro",
        image: avatar2,
        date: "Nov 25, 2021",
        amount: "$ 150,000",
        status: "Refund",
    },
    {
        name: "Corey Schleifer",
        image: avatar3,
        date: "Nov 25, 2021",
        amount: "$ 87,000",
        status: "Paid",
    },
    {
        name: "Cooper Press",
        image: avatar4,
        date: "Nov 25, 2021",
        amount: "$ 100,000",
        status: "Refund",
    },
    {
        name: "Cooper Press",
        image: avatar5,
        date: "Nov 25, 2021",
        amount: "$ 78,000",
        status: "Paid",
    },
    {
      name: "Ella Harrison",
      image: avatar2,
      date: "Dec 10, 2021",
      amount: "$ 120,000",
      status: "Paid",
  },
  {
      name: "Caleb Mendoza",
      image: avatar4,
      date: "Dec 12, 2021",
      amount: "$ 95,000",
      status: "Refund",
  },
  {
      name: "Aria Patel",
      image: avatar5,
      date: "Dec 15, 2021",
      amount: "$ 110,000",
      status: "Paid",
  }
]