// External dependencies
const express = require('express')

const router = express.Router()

router.post('/magical-powers-answer', (req, res) => {

    const sobrietyLevel = req.session.data.sobrietyLevel
    
   if(sobrietyLevel == "Sober"){
    res.redirect('/details')
   }
   else if (sobrietyLevel == "High as a kite" || sobrietyLevel == "Absolutely baked"){
    res.redirect('/ineligible')
   }
   else {
    res.redirect('/magical-powers')
   }
});



module.exports = router
