import axios from 'axios';

const listBank = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://apji-rekening.lfourr.com/listBank',
    );
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

export {listBank};
