const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"myself",
        password:"password1"
    }    
]

const blogs = [
    {
        title:"my first blog",
        body:"Welcome to my blog. Like share subscribe",
        UserId:1
    },
    {
        title:"my second learning blog",
        body:"I am learning new things and would love to write about them .",
        UserId:1
    }
    
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()