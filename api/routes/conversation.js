const router = require("express").Router();
const Conversation  = require("../models/Conversation");

//new conversation
router.post("/",async (req,res)=>{
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.recieverId],
    });
    try{
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);

    }catch(err){
        res.status(500).json(err);

    }
    
});

//det conersation of a user
router.get('/:userId', async (req, res)=>{
    try{
        const conservation = await Conversation.find({
            members: {$in: [req.params.userId]},
        });
        res.status(200).json(conservation);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
