const router = require('express').Router(),
  addresses = [
    { address: [ 'Studio 103', 'The Business Centre', '61 Wellfield Road', 'Roath', 'Cardiff', 'CF24 3DG' ]},
    { address: [ 'Room 67', '14 Tottenham Court Road', 'London', 'England', 'W1T 1JY' ]},
    { address: [ 'Unit 14', '3 Edgar Buildings', 'George Street', 'Bath', 'England', 'BA1 2FJ' ]},
    { address: [ 'Department 98', '44-46 Morningside Road', 'Edinburgh', 'Scotland', 'EH10 4BF' ]},
    { address: [ 'Box 777', '91 Western Road', 'Brighton', 'East Sussex', 'England', 'BN1 2NW' ]},
    { address: [ 'Office 33', '27 Colmore Row', 'Birmingham', 'England', 'B3 2EW' ]}
  ],
  arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const getLetterScore = letter => arr.indexOf(letter.toLowerCase()) % addresses.length;

router.route('/:postcode').get((req, res) => {
  res.json(addresses[getLetterScore(req.params.postcode.charAt(0))]);
});

module.exports = router;
