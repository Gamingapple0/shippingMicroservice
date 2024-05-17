const validateShipping = async (req, res) => {
    try {
      const { name, address, state, zipCode, country } = req.query;

      console.log(req.query);
  
      // Validate address
      if (!name.toLowerCase() || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({ message: 'Invalid name', price:0 });
      }

      // Validate address
      if (!address.toLowerCase() || typeof address !== 'string' || address.trim().length === 0) {
        return res.status(400).json({ message: 'Invalid address', price:0 });
      }
  
      // Validate country
      if (country.toLowerCase() !== 'australia') {
        return res.status(400).json({ message: 'Invalid country or state', price: 0 });
      }
  
      // Validate purchases
      if ((state.toLowerCase() === 'vic' || state.toLowerCase() === 'victoria') && country.toLowerCase() === 'australia') {
        return res.status(200).json({ message: 'Free Shipping!', price: 0 });
      } else if (state.toLowerCase() !== 'vic' && state.toLowerCase() !== 'victoria' && country.toLowerCase() === 'australia') {
        return res.status(200).json({ message: 'Extra Shipping Cost', price: 10 });
      }


      // Validate zipCode
      if (!zipCode || typeof zipCode !== 'string' || !/^\d{4}$/.test(zipCode)) {
        return res.status(400).json({ message: 'Invalid ZIP code', price:0 });
      }
  
      // If all validations pass, return success message
      res.json({ message: 'Shipping information is valid', price:0 });
    } catch (err) {
      console.error(err);
      // res.status(400).json({ message: err });
      //res.status(500).json({ message: 'An error occurred while validating shipping information', price:0 });
    }
  };
  
  module.exports = { validateShipping };