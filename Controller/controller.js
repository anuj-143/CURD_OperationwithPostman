import User from "../Modles/modle.js";
export const fetch = async (req, res) => {
    try{
        const users = await User.find();
        if(users.length === 0){
            return res.status(404).json({message: "No users found"});
        }
        return res.status(200).json({users});

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
}



export const createUser = async (req, res) => {
    try {
        
        const { name, email, address } = req.body;
        if (!name || !email || !address) {
            return res.status(400).json({ error: "All fields are required" });
        }

        
        const newUser = new User({ name, email, address });
        const savedUser = await newUser.save();

        
        res.status(201).json({
            message: "User created successfully",
            data: savedUser,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});
        if(!userExist){
            return res.status(404).json({message: "User not found"});
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});
        if(!userExist){
            return res.status(404).json({message: "User not found"});
        }
        await User.findByIdAndDelete(id);
        return res.status(200).json(deleteUser);
    }catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    };

