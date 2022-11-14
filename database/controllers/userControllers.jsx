import User from "../../models/User"



//GET all users = http://localhost:3000/api/users

const getUsers = async (req, res) => {

    const usersCount = await User.countDocuments();

   try {

       const users = await User.find().select().lean()

             // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
 
 
       res.status(200).json({
           success: true,
            usersCount,
            users
       })
     
   } catch (error)
   
   {

       res.status(400).json({
           success: false,
           error: error.message
       })
   }
     
}
 
// // Create new User = http://localhost:3000/api/users

 
const newUser = async (req, res) => {
 
   try {
    //    const user = await User.create(req.body);
    const { name, avatar, email, salary, date, status } = req.body;
   
    // Confirm data
    if (!name || !avatar || !email || !salary || !date || !status) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate email
    const duplicate = await User.findOne({ email }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate email - please select an alternative' })
    }


   

     // Create and store new user 
    const user = await User.create({ name, avatar, email, salary, date, status } )

    if (user) { 
     res.status(201).json({ message: `New user ${ name } created` })

    } 
    
      } catch (error) {
       res.status(400).json({
           success: false,
           message: 'Invalid user Data received'
       })
   }
   
}


 //GET single User details => api/users/:id

 const getUser = async (req, res) => {
 
    try {
        const user = await User.findById(req.query.userId);
  
        if(!user) {
            return res.status(404).json({
                success: false,
                error: "User not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            user
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single User details => api/user/:id
 
const updateUser = async (req, res) => {

    try {
        let user = await User.findById(req.query.userId);

        if(!user) {
            return res.status(404).json({
                success: false,
                error: "User not found with this ID"
            })

        }

        user = await User.findByIdAndUpdate(req.query.userId, req.body, {
            new: true,
            runValidators: true,
            
        })

        res.status(200).json({
            success: true,
            user
        })
        
    
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
             
    }
}
  
   
 
    
// DELETE images associated with User

 //DELETE single user details => api/users/:id

 const deleteUser = async (req, res) => {
 
     try {
        const user = await User.findById(req.query.userId);

        if(!user) {
            return res.status(404).json({
                success: false,
                error: "User not found with this ID"
            })

        }

        await user.remove()

        res.status(200).json({
            success: true,
            message: "User is deleted"
        })
        
    
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
             
    }
}
 
 
export {
getUsers,
newUser,
getUser,
updateUser,
deleteUser
}