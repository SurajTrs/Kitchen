const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const foodData = [
    {
        "CategoryName": "Biryani/Rice",
        "name": "Chicken Fried Rice",
        "img": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "options": [{"half": "130", "full": "220"}],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Biryani/Rice",
        "name": "Veg Fried Rice",
        "img": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "options": [{"half": "110", "full": "200"}],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Starter",
        "name": "Chilli Paneer",
        "img": "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
        "options": [{"half": "120", "full": "200"}],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Pizza",
        "name": "Chicken Cheese Pizza",
        "img": "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
        "options": [{"regular": "120", "medium": "230", "large": "350"}],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    }
];

const categoryData = [
    {"CategoryName": "Biryani/Rice"},
    {"CategoryName": "Starter"},
    {"CategoryName": "Pizza"}
];

router.post("/seedData", async (req, res) => {
    try {
        const foodCollection = mongoose.connection.db.collection("food_items");
        const categoryCollection = mongoose.connection.db.collection("foodCategory");
        
        await foodCollection.deleteMany({});
        await categoryCollection.deleteMany({});
        
        await foodCollection.insertMany(foodData);
        await categoryCollection.insertMany(categoryData);
        
        global.food_items = foodData;
        global.foodCategory = categoryData;
        
        res.json({success: true, message: "Data seeded successfully"});
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

module.exports = router;