const router = require('express').Router(),
  addresses = [
    {
      lines: ['Studio 103', 'The Business Centre', '61 Wellfield Road'],
      town: 'Roath',
      city: 'Cardiff',
      postcode: 'CF24 3DG'
    },{
      lines: ['Room 67', '14 Tottenham Court Road'],
      city: 'London',
      country: 'England',
      postcode: 'W1T 1JY'
    },{
      lines: ['Unit 14', '3 Edgar Buildings', 'George Street'],
      city: 'Bath',
      country: 'England',
      postcode: 'BA1 2FJ'
    },{
      lines: ['Department 98', '44-46 Morningside Road'],
      city: 'Edinburgh',
      country: 'Scotland',
      postcode: 'EH10 4BF'
    },{
      lines: ['Box 777', '91 Western Road'],
      city: 'Brighton',
      county: 'East Sussex',
      country: 'England',
      postcode: 'BN1 2NW'
    },{
      lines: ['Office 33', '27 Colmore Row'],
      city: 'Birmingham',
      country: 'England',
      postcode: 'B3 2EW'
    }
  ],
  arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const getLetterScore = letter => arr.indexOf(letter.toLowerCase()) % addresses.length;

router.route('/:postcode').get((req, res) => {
  res.json(addresses[getLetterScore(req.params.postcode.charAt(0))]);
});

module.exports = router;
